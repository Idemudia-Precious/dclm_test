import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="px-48 lg:px-60 py-10 max-sm:px-5">
      <div className="my-7 gap-2 flex-row md:flex-between max-sm:flex-col sm:flex-start">
        <div className="w-[384px]">
          <p className="h2-bold">Your Spiritual Welfare is our concern!</p>
          <p>Let us help you on your spiritual journey as you walk with God</p>
        </div>
        <div>
          <Button type="submit" className="p-10 log-in-button-dark">
            Contact Us
          </Button>
        </div>
      </div>
      <Separator className="bg-[#E4E7EC] w-full" />
      <div className="my-7  gap-2 flex-row md:flex-between max-sm:flex-col sm:flex-start">
        <div className="w-[168px] mb-4 flex-row flex-between">
          <Image src="/images/fb.png" alt="play icon" height={24} width={24} />
          <Image src="/images/x.png" alt="play icon" height={24} width={24} />
          <Image src="/images/in.png" alt="play icon" height={24} width={24} />
          <Image src="/images/ln.png" alt="play icon" height={24} width={24} />
        </div>
        <div>
          <p className="text-[#98A2B3]">
            © 2024 Deeper Christian Life Ministry
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
