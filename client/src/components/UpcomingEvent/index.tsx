import React from "react";
import EventCard from "./EventCard";

export default function UpcomingEvent() {
  return (
    <section className="min-h-screen grid place-content-center bg-[#E1E1E1]">
      <EventCard targetDate={"2025-11-14 14:20"} />
    </section>
  );
}
