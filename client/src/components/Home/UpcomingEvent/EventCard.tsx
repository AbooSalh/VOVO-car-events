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

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  return (
    <div className="flex gap-3 md:gap-6 mt-4 md:mt-6">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="text-center bg-gray-200 p-2 md:p-4 rounded-lg shadow-md min-w-[50px] md:min-w-[90px]"
        >
          <span className="text-lg md:text-3xl font-bold">{value}</span>
          <div className="text-xs md:text-sm uppercase font-semibold">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
};

const EventCard = ({ targetDate }: { targetDate: string }) => {
  return (
    <div className="bg-white p-6 lg:p-12 rounded-xl shadow-2xl max-w-7xl mx-auto border border-gray-300 h-auto lg:h-[550px] flex items-center">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 w-full">
        {/* Left Section */}
        <div className="flex flex-col items-center p-4 lg:p-6 bg-gray-100 rounded-lg w-full lg:w-1/2">
          <Image
            src="/imgs/home/hero/EventCardCar.png"
            alt="Car"
            width={350}
            height={250}
            className="mb-4 lg:mb-6"
            priority
          />
          <CountdownTimer targetDate={targetDate} />
        </div>

        {/* Right Section */}
        <div className="p-6 lg:p-8 flex flex-col justify-center text-center lg:text-left w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Upcoming Event
          </h2>
          <p className="text-gray-700 text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed">
            The <strong>co-Tracker</strong> project aims to create a web-based
            platform that encourages individuals to adopt sustainable lifestyle
            choices and actively contribute to environmental conservation.
          </p>
          <button
            className="bg-black text-white px-6 lg:px-10 py-2 lg:py-4 text-base lg:text-lg rounded-lg hover:bg-gray-800 transition"
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
