'use client';

import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Home Link */}
        <Link href="/" className="text-xl font-bold">
          My App
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-4 items-center">
          <Link href="/products" className="hover:text-gray-300">
            Products
          </Link>

          {status === 'authenticated' ? (
            // Links for authenticated users
            <>
              <Link href="/dashboard/add-product" className="hover:text-gray-300">
                Add Product
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
              >
                Sign Out
              </button>
            </>
          ) : (
            // Link for unauthenticated users
            <button
              onClick={() => signIn()}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}