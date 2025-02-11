import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import UpcomingEvent from "@/components/UpcomingEvent";

export default function Home() {
  return (
    <main className="bg-[#E1E1E1]">
      <Hero />
      <UpcomingEvent />
      <Sponsors />
    </main>
  );
}
