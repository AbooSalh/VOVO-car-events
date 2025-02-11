import React from "react";
import EventCard from "./EventCard";

export default function UpcomingEvent() {
  return (
    <section className="min-h-screen grid place-content-center ">
      <EventCard targetDate={"2025-10-11 15:20"} />
    </section>
  );
}
