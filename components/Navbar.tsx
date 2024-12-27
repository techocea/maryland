"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { NavItems } from "@/utils/constants";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Menu } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="px-4 py-2 md:px-4 md:py-2 lg:py-4 lg:px-10  w-full shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <Image
            src="/logo.png"
            width={175}
            height={50}
            className="max-sm:w-1/2"
            alt="maryland consultancy"
          />
        </div>
        <div className="hidden lg:flex items-center justify-center gap-x-8">
          {NavItems.map((item) => (
            <ul key={item.id}>
              <Link
                href={item.href}
                className={cn(
                  pathname === item.href
                    ? "text-primary font-black border-b-2 border-primary"
                    : "hover:text-primary",
                  "font-medium"
                )}
              >
                {item.label}
              </Link>
            </ul>
          ))}
        </div>
        <div className="w-fit flex items-center justify-center gap-x-4">
          <Button asChild>
            <Link href="/sign-up">Portal</Link>
          </Button>
          {/* Mobile Nav */}
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Menu />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start gap-y-4">
                    {NavItems.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className={cn(
                          pathname === item.href
                            ? "text-primary font-black border-b-2 border-primary"
                            : "hover:text-primary",
                          "font-medium"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </DropdownMenuItem>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
