import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import MobileCarousel from "./MobileCarousel";

const Hero = () => {
  const imageSources = [
    "/images/img_1.png",
    "/images/img_2.png",
    "/images/img_3.png",
  ];
  return (
    <main className="flex min-h-screen flex-center bg-bg-image bg-cover bg-center bg-no-repeat">
      <section className="min-w-full">
        <div className="flex flex-col items-center justify-between gap-10 max-sm:gap-3">
          <div className="flex max-md:flex-col flex-row md:gap-3 max-md:gap-3 items-center">
            <h1 className="h1 max-sm:h2">Got a </h1>
            <h1 className="h1 max-sm:h2">Testimony?</h1>
          </div>

          <h1 className="h1 max-sm:h2">Share it with Us</h1>
          <p className="paragraph-regular max-sm:body-regular mt-2">
            Testify of what God has done for you
          </p>
          <Button type="submit" className="mt-2 other-button-dark">
            <p className="m-3 body-medium">Share your Testimony</p>
          </Button>
        </div>
        <div className="flex-center gap-1 flex flex-row max-sm:hidden">
          <div className="">
            <Image
              alt="img1"
              src="/images/img_1.png"
              width={422}
              height={413}
            />
          </div>
          <div className="">
            <Image
              alt="img1"
              src="/images/img_2.png"
              width={422}
              height={290}
            />
          </div>
          <div className="">
            <Image
              alt="img1"
              src="/images/img_3.png"
              width={422}
              height={413}
            />
          </div>
        </div>
        <MobileCarousel />
      </section>
    </main>
  );
};

export default Hero;
