'use client';

import Sidebar from '../components/Sidebar';
import UserTable from '../components/UserTable';

export default function UsersPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto bg-gray-50 p-8">
        <div className="mx-auto max-w-7xl">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">Usuários</h1>
              <p className="mt-2 text-sm text-gray-700">
                Lista de todos os usuários cadastrados no sistema.
              </p>
            </div>
          </div>
          <UserTable />
        </div>
      </main>
    </div>
  );
}
