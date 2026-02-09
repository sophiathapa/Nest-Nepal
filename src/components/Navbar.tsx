"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    // Set Valentine's Day (Feb 14 of current year)
    const now = new Date();
    let year = now.getFullYear();
    const valentines = new Date(`${year}-02-14T00:00:00`);

    // If Valentine's Day this year is past, use next year
    if (now > valentines) {
      year += 1;
    }

    const nextValentine = new Date(`${year}-02-14T00:00:00`);
    const difference = nextValentine - now;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <nav className="p-5 w-full">
      <div className="flex  items-center justify-between">
        <div>
          <img src="google 1.svg" alt="logo" />
        </div>

        <div className="hidden sm:flex flex-col items-center">
          <span className="text-[#F25277] italic font-semibold text-sm">
            Valentine's offer
          </span>
          <div className="flex items-center gap-1 font-bold text-lg text-[#146DE1]">
            <span>{pad(timeLeft.days)}</span>:<span>{pad(timeLeft.hours)}</span>
            :<span>{pad(timeLeft.minutes)}</span>:
            <span>{pad(timeLeft.seconds)}</span>
          </div>
          <div className="flex gap-4 text-[10px]">
            <span>Days</span>
            <span>Hrs</span>
            <span>Min</span>
            <span>Sec</span>
          </div>
        </div>

        <div className="flex items- enter">
          <Button />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
