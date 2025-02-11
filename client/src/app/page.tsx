import FeaturedEvents from "@/components/Home/FeaturedEvents";
import Hero from "@/components/Home/Hero";
import Sponsors from "@/components/Home/Sponsors";
import UpcomingEvent from "@/components/Home/UpcomingEvent";

export default function Home() {
  return (
    <main className="bg-[#E1E1E1]">
      <Hero />
      <UpcomingEvent />
      <Sponsors />
      <FeaturedEvents />
    </main>
  );
}
