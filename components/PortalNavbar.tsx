"use client";

import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { User } from "lucide-react";
import { Separator } from "./ui/separator";
import SignOutButton from "./SignOutButton";

const PortalNavbar = () => {
  return (
    <header className="p-2 sm:px-4 sm:py-2 md:px-2 lg:py-4 lg:px-10 shadow-lg">
      <div className="flex items-center justify-between  w-full">
        <div>
          <Image
            src="/logo.png"
            width={175}
            height={50}
            className="max-sm:w-1/2"
            alt="maryland consultancy"
          />
        </div>
        {/* {session && (
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-x-2 items-center">
              <User className="bg-secondary w-8 h-8 rounded-full text-muted-foreground" />{" "}
              <p className="text-sm text-muted-foreground">Student</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="flex flex-col gap-2 items-start">
                <h4 className="font-semibold">Email</h4>
                <p className="text-muted-foreground font-semibold">
                  {session.user?.email}
                </p>
              </DropdownMenuItem>
              <Separator />
              <DropdownMenuItem>
                <SignOutButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )} */}
      </div>
    </header>
  );
};

export default PortalNavbar;
