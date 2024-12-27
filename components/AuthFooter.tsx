import React from "react";
import { Separator } from "./ui/separator";

const AuthFooter = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center h-20 justify-between w-full px-8 lg:px-10 2xl:mx-auto">
      <div className="my-6">
        <p className="font-semibold text-center text-muted-foreground text-xs">
          Copyright &copy; {new Date().getFullYear()} Maryland Consultancy - All
          rights reserved.
        </p>
      </div>
      <div className="flex items-center justify-center gap-x-3">
        <p className="font-semibold text-muted-foreground text-xs">
          Terms & Conditions
        </p>
        <Separator className="w-8 rotate-90" />
        <p className="font-semibold text-muted-foreground text-xs">
          Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default AuthFooter;
