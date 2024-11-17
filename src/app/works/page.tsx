import Link from "next/dist/client/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Page = () => {
  const photos = [
    {
      id: 1,
      src: "https://utfs.io/f/Tqz4CHeTuQcd6NCrGbtCgGu3jFOmXKkto1RaDM5VlwsrfApH",
      link: "https://catopay.com",
      title: "Catopay",
    },
    {
      id: 2,
      src: "https://utfs.io/f/Tqz4CHeTuQcdMhLTP6cy83elBpGM5HtKwh9VPAFdv6RXqj1N",
      link: "https://thesociomatic.com",
      title: "The Sociomatic",
    },
    {
      id: 3,
      src: "https://utfs.io/f/Tqz4CHeTuQcdNVI1CflsndSxRqO8zjY5F4L2iDZKXbItTQwh",
      link: "https://visowayconsultancy.com",
      title: "Viso Way Consultancy",
    },
  ];
  return (
    <div className="container section flex flex-wrap gap-4 items-center justify-center">
      {photos.map((photo) => {
        const { id, src, link, title } = photo;
        return (
          <Link href={link} key={id} passHref={true} target="_blank">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Image
                    key={id}
                    src={src}
                    alt={`photo-${id}`}
                    width={400}
                    height={400}
                    className="w-24 h-24 rounded-full border-4 border-border bg-white opacity-80"
                    blurDataURL={src}
                    placeholder="blur"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        );
      })}
    </div>
  );
};

export default Page;
