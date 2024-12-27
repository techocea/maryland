import React from "react";
import SignInForm from "@/components/SignInForm";

const SignInPage = () => {
  return (
    <main className="h-full py-8 lg:py-12 2xl:py-16 flex items-center justify-center bg-secondary">
      <div className="flex flex-col items-center justify-center max-w-lg w-full rounded-md bg-white p-8">
        <div className="mb-8 flex flex-col gap-y-3 text-center">
          <h1 className="text-2xl font-semibold text-muted">Welcome Back</h1>
          <p className="text-sm text-muted-foreground font-semibold">
            Please enter your credentials to sign in!
          </p>
        </div>
        <SignInForm />
      </div>
    </main>
  );
};

export default SignInPage;
