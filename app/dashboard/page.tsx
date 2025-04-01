"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session || session.user?.email !== "admin@maryland.com") {
    router.push("/welcome");
    return null;
  }

  return <div>Dashboard Page</div>;
};

export default page;
