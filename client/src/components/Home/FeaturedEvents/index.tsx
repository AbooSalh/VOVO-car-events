import Link from "next/link";
import FeaturedEventsCard from "./FeaturedEventsCard";

const events = [
  {
    image: "/imgs/home/FeaturedEvents/event-1.png",
    title: "STANCE SOCIAL",
    subtitle: "Stance & modified cars",
    date: "Sun, 25 Mar 2025, from 06:00",
    location:
      "May 30 – June 2, 2025 • Egypt International Exhibition Centre, Cairo, Egypt",
  },
  {
    image: "/imgs/home/FeaturedEvents/event-2.png",
    title: "DRIFT KINGS",
    subtitle: "High-speed drift battles",
    date: "Fri, 15 Apr 2025, from 14:00",
    location: "April 15 – April 17, 2025 • Dubai Autodrome, UAE",
  },
  {
    image: "/imgs/home/FeaturedEvents/event-3.png",
    title: "SUPER CAR FEST",
    subtitle: "Exotic & luxury car exhibition",
    date: "Sat, 10 June 2025, from 10:00",
    location: "June 10 – June 12, 2025 • Marina Bay Sands, Singapore",
  },
];

export default function FeaturedEvents() {
  return (
    <section className="p-20">
      <div className="flex justify-between flex-col md:flex-row items-center mb-20 text-center md:text-left ">
        <div>
          <h3 className="font-bold text-5xl ">Featured Events</h3>
          <p className="mt-5 text-slate-700 text-2xl mb-10 ">
            Unmissable car events around the world
          </p>
        </div>
        <Link
          href="/events"
          className="bg-black px-10 py-3 text-2xl text-white rounded-3xl hover:bg-opacity-90"
        >
          Explore All
        </Link>
      </div>

      {/* Events Grid */}
      <div className="flex flex-wrap gap-10 justify-center">
        {events.map((event, index) => (
          <FeaturedEventsCard
            key={index}
            image={event.image}
            title={event.title}
            subtitle={event.subtitle}
            date={event.date}
            location={event.location}
          />
        ))}
      </div>
    </section>
  );
}
