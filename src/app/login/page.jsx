'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async () => {

  
    // Call signIn() with the provider name and disable the default redirect
    const result = await signIn('google', {
      redirect: false,
    });

    // Check if the sign-in was successful
    if (result?.ok) {
      // Redirect the user to the /products page
      router.push('/products');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Sign in with Google
      </button>
    </div>
  );
}