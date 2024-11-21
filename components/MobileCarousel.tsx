"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { imageSources } from "@/constants";

const MobileCarousel = () => {
  return (
    <div className="mt-10 sm:hidden flex-center">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full max-w-xs flex-center"
      >
        <CarouselContent>
          {imageSources.map((src, index) => (
            <CarouselItem key={index}>
              <div className="flex-center">
                <Image
                  src={src}
                  width={412}
                  height={412}
                  alt={`Carousel image ${index + 1}`}
                  className=""
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default MobileCarousel;
