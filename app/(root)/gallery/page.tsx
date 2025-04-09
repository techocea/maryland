import StylishGallery from "@/components/Gallery";
import { GALLERY } from "@/utils/constants";
import { Item } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";

const GalleryPage = () => {
  return (
    <main className="min-h-screen lg:max-w-4xl mx-auto w-full py-12">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {item.images.map((image) => {
                    return (
                        <div
                        key={image.id}
                        className="relative aspect-square rounded-lg sm:aspect-w-16 sm:aspect-h-9"
                        >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                          className="absolute top-0 h-full w-full object-cover transition-transform duration-300 hover:scale-105"
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
