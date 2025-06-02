'use client';

import { UserButton, SignedIn, SignedOut, SignUpButton, SignInButton, SignOutButton } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';

export default function Navbar(
  { user }: { user: any }
) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-white shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <h1 className="xtext-xl font-bold text-gray-900">Supply Chain</h1>
          </div>
          <div className="flex items-center justify-items-end">
            <a className="ml-4 no-underline" href="/cadastrar">
            { !user && (
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold btn-sm py-2 px-4 border border-gray-400 rounded shadow">
                Cadastre-se
              </button>
            )
            }
            { user && (
              <SignOutButton />
            )
            }
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
