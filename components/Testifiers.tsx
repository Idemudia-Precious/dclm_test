"use client";
import { useState } from "react";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { testimonies } from "@/constants";

const Testifiers = () => {
  const [cards, setCards] = useState(testimonies);

  const handleLeftClick = () => {
    setCards((prevCards) => {
      // Move the last card to the front
      return [prevCards[prevCards.length - 1], ...prevCards.slice(0, -1)];
    });
  };

  // Function to handle right button click
  const handleRightClick = () => {
    setCards((prevCards) => {
      // Move the first card to the back
      return [...prevCards.slice(1), prevCards[0]];
    });
  };
  return (
    <section className="px-48 lg:px-60 py-10 bg-[#B3C0CD] max-sm:px-0">
      <div className="flex-center m-4 flex-col gap-6">
        <div className="w-full flex-center flex-between">
          <Image
            src="/images/arrow-left.png"
            alt="play icon"
            height={14}
            width={14}
            onClick={handleLeftClick}
          />

          <div className="h3 max-sm:h5 whitespace-nowrap">
            What the Testifiers Says
          </div>

          <Image
            src="/images/arrow-right.png"
            alt="play icon"
            height={14}
            width={14}
            onClick={handleRightClick}
          />
        </div>

        <div className="mt-12">
          {/* Horizontal Cards */}
          <div className="flex gap-28 flex-center">
            {/* Left Card */}
            <div className="relative h-full hidden lg:flex">
              {/* Blue Card */}
              <div className="absolute w-[379px] h-[378px] inset-0 bg-mid-blue bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start translate-x-12"></div>
              {/* White Card */}
              <div className="relative w-[415px] h-[433px] bg-mid-white bg-cover bg-center bg-no-repeat p-6 pt-16 text-center flex flex-col items-center justify-start">
                <Image
                  src={cards[0].image}
                  alt={cards[0].name}
                  className="absolute -top-10  rounded-full shadow-lg"
                  height={82}
                  width={82}
                />
                <h3 className="font-bold text-lg ">{cards[0].name}</h3>
                <p className="text-sm text-primary font-medium">
                  {cards[0].title}
                </p>
                <Image
                  src="/images/quote.png"
                  alt="play icon"
                  height={35}
                  width={35}
                />
                <p className="text-sm text-gray-600 mt-2">{cards[0].text}</p>
              </div>
            </div>

            {/* Middle Card (always visible) */}
            <div className="relative h-full flex-center">
              {/* Blue Card */}
              <div className="absolute w-[379px] h-[378px] inset-0 bg-mid-blue bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start translate-x-12"></div>
              {/* White Card */}
              <div className="relative w-[415px] h-[433px] bg-mid-white bg-cover bg-center bg-no-repeat p-6 pt-16 text-center flex flex-col items-center justify-start">
                <Image
                  src={cards[1].image}
                  alt={cards[1].name}
                  className="absolute -top-10  rounded-full shadow-lg"
                  height={102}
                  width={102}
                />
                <h3 className="font-bold text-lg">{cards[1].title}</h3>
                <p className="text-sm text-primary font-medium">
                  {cards[1].name}
                </p>
                <Image
                  src="/images/quote.png"
                  alt="play icon"
                  height={45}
                  width={45}
                />
                <p className="text-sm text-gray-600 mt-2">{cards[1].text}</p>
              </div>
            </div>

            {/* Right Card */}
            <div className="relative hidden lg:flex h-full">
              {/* Blue Card */}
              <div className="absolute w-[379px] h-[378px] inset-0 bg-mid-blue bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start translate-x-12"></div>
              {/* White Card */}
              <div className="relative w-[415px] h-[433px] bg-mid-white bg-cover bg-center bg-no-repeat p-6 pt-16 text-center flex flex-col items-center justify-start">
                <Image
                  src={cards[2].image}
                  alt={cards[2].name}
                  className="absolute -top-10  rounded-full shadow-lg"
                  height={82}
                  width={82}
                />
                <h3 className="font-bold text-lg">{cards[2].name}</h3>
                <p className="text-sm text-primary font-medium">
                  {cards[2].title}
                </p>
                <Image
                  src="/images/quote.png"
                  alt="play icon"
                  height={35}
                  width={35}
                />
                <p className="text-sm text-gray-600 mt-2">{cards[2].text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testifiers;
