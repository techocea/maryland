import { GALLERY } from "@/utils/constants";
import Image from "next/image";

const GalleryPage = () => {
  return (
    <main className="min-h-screen lg:max-w-5xl mx-auto w-full py-12">
      <div className="container px-4">
        <div className="flex flex-col space-y-10">
          {GALLERY.map((item) => {
            return (
                <div>
                <h1
                  key={item.id}
                  className="pb-2 text-left capitalize text-xl lg:text-4xl font-bold tracking-tight text-gray-900"
                >
                  {item.title}
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-[300px]">
                  {item.images.map((image, index) => {
                  const isWide = index % 3 === 0;
                  const isTall = index % 4 === 0;

                  return (
                    <div
                    key={image.id}
                    className={`relative overflow-hidden rounded-lg
                    ${isWide ? "sm:col-span-2" : ""}
                    ${isTall ? "sm:row-span-2" : ""}
                  `}
                    >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 53vw"
                      className="absolute inset-0 h-full w-full object-cover transition-all duration-300 hover:scale-110"
                    />
                    </div>
                  );
                  })}
                </div>
                </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default GalleryPage;
