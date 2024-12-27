import Image from "next/image";
import React from "react";

const PortalNavbar = () => {
  return (
    <header className="p-2 sm:px-4 sm:py-2 md:px-2 lg:py-4 lg:px-10  w-full shadow-lg">
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
      </div>
    </header>
  );
};

export default PortalNavbar;
