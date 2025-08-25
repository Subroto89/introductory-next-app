'use client';

import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className=" p-4 border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Home Link */}
        <Link href="/" className="text-xs md:text-xl font-bold">
          Electronics Hub
        </Link>

        {/* Navigation Links */}
        <div className="text-xs md:text-xl flex space-x-4 items-center">
          <Link href="/products" className="hover:text-gray-300">
            Products
          </Link>

          {status === 'authenticated' ? (
            // Links for authenticated users
            <>
              <Link href="/dashboard/add-product" className="text-xs md:text-xl hover:text-gray-300">
                Add Product
              </Link>

              <ThemeToggle/>

              <button
                onClick={() => signOut()}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
            <ThemeToggle/>
            {/* Link for unauthenticated users */}
            <button
              onClick={() => signIn()}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
            >
              Sign In
            </button>      
            </>

          )}
        </div>
      </div>
    </nav>
  );
}