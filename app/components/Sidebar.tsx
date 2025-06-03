'use client';

import { useState } from 'react';
import { UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton, SignedIn, SignedOut, SignUpButton, SignInButton } from '@clerk/nextjs';
import { useUser, useAuth } from "@clerk/nextjs";

const navigation = [
  { name: 'Usuários', href: '/dashboard/', icon: UserIcon },
];

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <>
      <div className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-center h-16 px-4">
            <h1 className="text-xl font-bold">SupplyChain</h1>
          </div>

          <div className="flex items-center justify-between p-4 border-t">
            <small>Olá, {user?.firstName}!</small>
          </div>

          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-6 w-6 flex-shrink-0 ${
                      isActive ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-between p-4 border-t">
          <button
              onClick={() => signOut()}
              className="px-4 py-2 text-dark outline rounded hover:cursor-pointer"
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
