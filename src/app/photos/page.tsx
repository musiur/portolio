import Image from "next/image";

const Page = () => {
  const photos = [
    {
      id: 1,
      src: "https://utfs.io/f/Tqz4CHeTuQcddxVbhHC57kjeRCgQY1O8ZVms24GNBLx5WSPq",
    },
    {
      id: 2,
      src: "https://utfs.io/f/Tqz4CHeTuQcdtLdXXRzTNaiov94M81jt0G2dFSgHkpn7UEwP",
    },
    {
      id: 3,
      src: "https://utfs.io/f/09e17d0b-fdf7-4c9b-90d2-6b61c80c0297-1e7cb.png",
    },
    {
      id: 4,
      src: "https://utfs.io/f/Tqz4CHeTuQcdD0o2pdfVIYSb8KPcg5lEU37oJ6n10yRXGHW4",
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
            width={400}
            height={400}
            className="w-24 h-24 rounded-full border-4 border-border"
            blurDataURL={src}
            placeholder="blur"
          />
        );
      })}
    </div>
  );
};

export default Page;
