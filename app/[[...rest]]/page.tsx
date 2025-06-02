'use client';

import { useUser } from '@clerk/nextjs';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SignInPage from '../entrar/[[...sign-in]]/page';

export default function Home() {

  const { user, isLoaded } = useUser();

  if (user) return <HeroSection />

  return (
    <>
      <Navbar />
      <div className="text-center mb-8">
        <HeroSection />
      </div>
      <SignInPage />
    </>
  );
}
