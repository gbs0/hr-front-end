'use client';

import { SignIn } from "@clerk/nextjs";
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <div className="flex min-h-screen pt-16">
        {/* Sidebar */}
        {/* <Sidebar /> */}

        {/* Main Content */}
        <main className="flex justify-center items-center align-center p-4 sm:p-6 lg:p-8">
          <div className="w-full max-w-md flex justify-center items-center align-center">
            <SignIn/>
          </div>
        </main>
      </div>
    </div>
  );
}

