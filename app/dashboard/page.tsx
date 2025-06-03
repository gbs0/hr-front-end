'use client';

import Sidebar from '../components/Sidebar';
import UserTable from '../components/UserTable';

export default function UsersPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto bg-gray-50 p-8">
        <div className="mx-auto max-w-7xl">
          <UserTable />
        </div>
      </main>
    </div>
  );
}
