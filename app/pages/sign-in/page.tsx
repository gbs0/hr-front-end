import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Simplificamos juntos</h2>
          <p className="mt-2 text-sm text-gray-600">Supply Chain | Industrial | Systems</p>
        </div>
        <SignIn />
      </div>
    </div>
  );
} 