import Image from "next/image";
import React from "react";

const Partnerships = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-16 my-12 lg:my-16">
            <Image
                src="/top-partner.jpeg"
                alt="Top Partner"
                width={250}
                height={250}
            />
            <Image
                src="/partner-logos.jpeg"
                alt="Partner Logos"
                width={1200}
                height={500}
            />
        </div>
    );
};

export default Partnerships;
