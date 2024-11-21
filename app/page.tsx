import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Numbers from "@/components/Numbers";
import Testifiers from "@/components/Testifiers";
import React from "react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Numbers />
      <Events />
      <Testifiers />
      <Footer />
    </div>
  );
}
