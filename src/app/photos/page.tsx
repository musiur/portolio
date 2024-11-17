import Image from "next/image";
import BrandLogo from "@/assets/icon.png";

const Page = () => {
  const photos = [
    {
      id: 1,
      src: BrandLogo,
    },
  ];
  return (
    <div className="container section flex flex-wrap gap-4 items-center justify-center">
      {photos.map((photo) => {
        const { id, src } = photo;
        return (
          <Image
            key={id}
            src={src}
            alt={`photo-${id}`}
            className="w-24 h-auto"
          />
        );
      })}
    </div>
  );
};

export default Page;
