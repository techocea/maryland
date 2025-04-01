"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut({
        redirect: true,
        redirectTo: "/",
      });
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Button
      variant="link"
      onClick={handleSignOut}
      type="button"
      className="px-0"
    >
      Logout
    </Button>
  );
};

export default SignOutButton;
