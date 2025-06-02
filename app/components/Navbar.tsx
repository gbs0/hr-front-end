'use client';

import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-white shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Hr Sistemas</h1>
          </div>
          <div className="flex items-center">
            {/* <UserButton afterSignOutUrl="/sign-in" /> */}
          </div>
        </div>
      </div>
    </nav>
  );
} 