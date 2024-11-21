import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const Events = () => {
  return (
    <section className="p-20 ">
      <div className="flex-center m-3">
        <div className="flex flex-center flex-row gap-3">
          <Separator className="bg-primary overflow-hidden" />
          <div className="mb-4 h3 whitespace-nowrap">Ongoing Events</div>
          <Separator className="bg-primary overflow-hidden" />
        </div>
      </div>
      <div className="flex-center gap-6 flex lg:flex-row flex-col max-lg:flex-col-reverse">
        <div className="flex-start w-1/2 max-lg:w-full">
          <div className="space-y-4">
            <Button type="submit" className="other-button">
              <p className="body-medium">GCK in Kumasi</p>
            </Button>
            <p className="h2 max-sm:h2">Full Salvation and Healing</p>
            <p className="h2 max-sm:h2">Through Christ</p>

            <p className="h4">
              <span className="h3-bold">Venue: </span> Kumasi, Ghana
            </p>
            <p className="h4">
              <span className="h3-bold">Date: </span> July 25th - July 30th,
              2024
            </p>
            <p className="h4">
              <span className="h3-bold">Time: </span> 16:00 GMT daily
            </p>
            <Button type="submit" className="other-button-dark">
              <p className="body-medium">Connect Live</p>
              <Image
                src="/images/button-icon.png"
                alt="play icon"
                height={15}
                width={15}
              />
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/images/handbill.png"
            width={697}
            height={479}
            alt="handbill"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
