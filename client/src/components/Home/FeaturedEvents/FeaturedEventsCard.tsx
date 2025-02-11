import Image from "next/image";
import Link from "next/link";

interface EventProps {
  image: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  link?: string; // Optional: Link for the event page
}

export default function FeaturedEventsCard({
  image,
  title,
  subtitle,
  date,
  location,
  link = "#",
}: EventProps) {
  return (
    <div className="w-96 rounded-3xl bg-white shadow-lg overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer">
          ❤️ {/* Replace with an actual icon */}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
          <p className="text-gray-500 text-sm mt-1">{date}</p>
          <hr className="my-3 border-gray-300" />
          <p className="text-gray-500 text-sm">{location}</p>
        </div>

        {/* Buy Tickets Button */}
        <Link
          href={link}
          className=" w-full bg-black text-white py-2 text-lg rounded-lg text-center hover:bg-gray-900 mt-3"
        >
          Buy Tickets
        </Link>
      </div>
    </div>
  );
}
