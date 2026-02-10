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
    const difference = nextValentine.getTime() - now.getTime();

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
      <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-y-3">
        <div className="justify-self-start">
          <img src="google 1.svg" alt="logo" />
        </div>

        <div className="col-span-2 md:col-span-1 justify-self-center">
          <span className="text-[#F25277] italic font-bold text-lg">
            Valentine's offer
          </span>
          <div className="flex items-center gap-1 font-bold text-3xl text-primary">
            <span>{pad(timeLeft.days)}</span>:<span>{pad(timeLeft.hours)}</span>
            :<span>{pad(timeLeft.minutes)}</span>:
            <span>{pad(timeLeft.seconds)}</span>
          </div>
          <div className="flex gap-5 font-bold justify-center">
            <span>Days</span>
            <span>Hrs</span>
            <span>Min</span>
            <span>Sec</span>
          </div>
        </div>

        <div className="justify-self-end col-start-2 row-start-1 md:col-start-3  flex items-center">
          <Button color="green"  />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
