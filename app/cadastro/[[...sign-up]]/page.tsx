'use client';

import { SignUp } from "@clerk/nextjs";
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SignUpPage() {
  const { isLoaded, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6C47FF] mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 bg-gray-50">
      <div className="container-fluid flex items-center justify-center align-center">
        <div className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8 mx-8">
          <h2 className="text-xl font-bold text-gray-900">Crie sua conta</h2>
          <span className="block text-indigo-600">
            Supply Chain | Industrial | Systems
          </span>
        </div>
        <div>
          <SignUp signInUrl="/entrar" forceRedirectUrl="/dashboard" />
        </div>
      </div>
    </div>
  );
}
