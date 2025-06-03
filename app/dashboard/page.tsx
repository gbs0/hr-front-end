'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Sidebar from '../components/Sidebar';
import UserTable from '../components/UserTable';

export default function DashboardPage() {
  const { isLoaded, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !user) {
      toast.error('Você deverá entrar com suas credenciais para o acesso.');
      router.push('/entrar');
    }
  }, [isLoaded, user, router]);

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

  if (!user) {
    return null;
  }

  return (
    <>
      <Toaster position="top-right" />
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 overflow-auto bg-gray-50 p-8 pl-64 ml-4">
          <div className="mx-auto max-w-7xl md:w-full">
            <UserTable />
          </div>
        </main>
      </div>
    </>
  );
}
