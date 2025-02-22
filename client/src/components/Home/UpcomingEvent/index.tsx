import React from "react";
import EventCard from "./EventCard";

export default function UpcomingEvent() {
  return (
    <section className="md:py-52 grid place-content-center min-h-screen">
      <EventCard targetDate={"2025-10-11 15:20"} />
    </section>
  );
}
