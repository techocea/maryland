import { GALLERY } from "@/utils/constants";
import Image from "next/image";

const GalleryPage = () => {
  return (
    <main className="min-h-screen w-full py-12">
      <div className="">
        <div className="flex flex-col space-y-10">
          {GALLERY.map((item) => {
            return (
              <div key={item.id}>
                <h1 className="pb-2 capitalize text-xl text-center mb-4 lg:text-4xl font-bold tracking-tight text-primary">
                  {item.title}
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                  {item.images.map((image) => (
                    <div
                      key={image.id}
                      className="relative w-full h-auto overflow-hidden"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={500}
                        height={420}
                        className="object-contain transition-all duration-300 hover:scale-110"
                      />
                    </div>
                  ))}
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
