"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownProps = {
  targetDate: string;
};

const CountdownTimer = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const updateTimer = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer(); // Initialize immediately
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null; // Prevents hydration mismatch

  return (
    <div className="flex gap-4 mt-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="text-center bg-gray-200 p-2 rounded-lg shadow-md"
        >
          <span className="text-2xl font-bold">{value}</span>
          <div className="text-sm uppercase font-semibold">{unit}</div>
        </div>
      ))}
    </div>
  );
};

const EventCard = ({ targetDate }: { targetDate: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl mx-auto border border-gray-300 ">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
          <Image
            src="/imgs/home/hero/EventCardCar.png"
            alt="Car"
            width={300}
            height={200}
            className="mb-4"
            priority
          />
          <CountdownTimer targetDate={targetDate} />
        </div>

        <div className="p-6 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Upcoming Event</h2>
          <p className="text-gray-700 mb-6">
            The <strong>co-Tracker</strong> project aims to create a web-based
            platform that encourages individuals to adopt sustainable lifestyle
            choices and actively contribute to environmental conservation.
          </p>
          <button
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            aria-label="Go to event"
          >
            Go Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
