import StylishGallery from "@/components/Gallery";
import { GalleryImage } from "@/types";
import { Gallery } from "@/utils/constants";

const GalleryPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-center text-4xl font-bold tracking-tight text-gray-900">
          Gallery Collection
        </h1>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {Gallery.map((galleryImage, index: number) => (
            <StylishGallery key={index} item={galleryImage} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default GalleryPage;
