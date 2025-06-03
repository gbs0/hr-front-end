'use client';

import { useUser } from '@clerk/nextjs';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import { SignIn } from '@clerk/nextjs';

export default function Home() {

  const { user, isLoaded } = useUser();

  if (user) return (
  <>
    <Navbar user={user} />
    <div className="flex justify-center items-center h-screen">
      <div className="text-center flex mb-8">
        <HeroSection />
        <div className='flex flex-col items-center justify-center'>
        <button
          className="rounded-md border border-transparent bg-[#6C47FF] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#5835FF] focus:outline-none focus:ring-2 focus:ring-[#6C47FF] focus:ring-offset-2 sm:w-auto max-h-12"
          onClick={() => window.location.href = '/dashboard/'}
        >
          Ir para a página de dashboard
        </button>
        </div>
      </div>
    </div>
  </>
  )

  return (
    <>
      <Navbar user={user} />
      <div className="flex justify-center items-center h-screen">
        <div className="text-center flex mb-8">
          <HeroSection />
        </div>
        <SignIn signUpUrl="/cadastro/" forceRedirectUrl="/dashboard" />
      </div>
    </>
  );
}
