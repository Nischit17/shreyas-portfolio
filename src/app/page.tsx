"use client";

import { useState } from "react";
import Loader from "@/components/sections/Loader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhatIWorkOn from "@/components/sections/WhatIWorkOn";
import Journey from "@/components/sections/Journey";
import FeaturedWork from "@/components/sections/FeaturedWork";
import EnterpriseImpact from "@/components/sections/EnterpriseImpact";
import GlobalMarkets from "@/components/sections/GlobalMarkets";
import Capabilities from "@/components/sections/Capabilities";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
        <Hero />
        <About />
        <WhatIWorkOn />
        <Journey />
        <FeaturedWork />
        <EnterpriseImpact />
        <GlobalMarkets />
        <Capabilities />
        <Contact />
      </div>
    </>
  );
}
