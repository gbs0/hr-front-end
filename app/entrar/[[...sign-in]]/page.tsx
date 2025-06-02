import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center py-24">
      <SignIn signUpUrl="/cadastro" forceRedirectUrl={"/dashbaord"} />
    </div>
  );
}
