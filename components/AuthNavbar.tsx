import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LogIn, Menu, MoveUpRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const AuthNavbar = () => {
  return (
    <header className="p-2 sm:px-4 sm:py-2 md:px-2 lg:py-4 lg:px-10  w-full shadow-xl shadow-muted">
      <div className="flex items-center justify-between">
        <div>
          <Image
            src="/logo.png"
            width={175}
            height={50}
            className="max-sm:w-2/3"
            alt="maryland consultancy"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Button asChild variant="ghost">
                <Link
                  href="/sign-in"
                  className="font-semibold text-md w-full text-muted-foreground"
                >
                  <LogIn />
                  Student Login
                </Link>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button asChild>
                <Link
                  href="/sign-up"
                  className="font-semibold text-md w-full text-muted-foreground"
                >
                  <MoveUpRight />
                  Apply Now
                </Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default AuthNavbar;
