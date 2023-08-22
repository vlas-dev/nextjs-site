import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Socials */}
      <Socials />
      {/* Hero */}
      <Hero />
      {/* Features */}
      <Features />

      {/* CallToAction */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
}
