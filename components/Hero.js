import React from "react";
import { Fugaz_One } from "next/font/google";
import Calendar from "./Calendar";
import CallToAction from "./CallToAction";

const fugaz = Fugaz_One({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div className="py-4 md:py-10 flex flex-col gap-8 sm:gap-10">
      <h1
        className={`text-5xl sm:text-6xl md:text-7xl text-center ${fugaz.className}`}
      >
        <span className="textGradient">Reflectly</span> helps you track your{" "}
        <span className="textGradient">daily</span> mood
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[700px]">
        Create your mood record and see how you feel on
        <span className="font-semibold"> every day of every year.</span>
      </p>
      <CallToAction />
      <Calendar demo />
    </div>
  );
}
