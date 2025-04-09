"use client";

import { ImageType } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface iAppProps {
  item: {
    src: string;
    alt: string;
  };
}

const StylishGallery = ({ item }: iAppProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  return (
    <>
      <div className="w-full">
        <div className="rounded-lg w-48 h-48 relative">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            objectFit="cover"
            className="h-64 w-full transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <button
              className="absolute -right-4 -top-4 rounded-full bg-white p-2 text-black shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="max-h-[80vh] rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default StylishGallery;
