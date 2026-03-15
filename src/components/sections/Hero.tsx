"use client";

import Reveal from "../animations/Reveal";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505]">
      
      {/* Ultra-subtle background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl px-6 w-full mt-20">
        <Reveal>
          <h2 className="text-secondary font-mono tracking-widest text-xs md:text-sm uppercase mb-8">
            AI Business & Technology Strategist
          </h2>
        </Reveal>
        
        <Reveal delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-white leading-tight">
            Shreyas SK
          </h1>
        </Reveal>
        
        <Reveal delay={0.4}>
          <p className="text-lg md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed font-light">
            Building revenue engines for AI products, enterprise software, and intelligent platforms.
          </p>
        </Reveal>
        
        <Reveal delay={0.5}>
          <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto">
            Translating complex technical capabilities into scalable commercial success for global organizations.
          </p>
        </Reveal>

        {/* Minimalist divider */}
        <Reveal delay={0.6}>
          <div className="w-12 h-[1px] bg-white/20 mx-auto my-12" />
        </Reveal>

        <Reveal delay={0.7}>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm font-mono tracking-[0.2em] text-gray-500 uppercase">
            <span className="text-white">India</span>
            <span className="text-white/20">•</span>
            <span className="text-white">USA</span>
            <span className="text-white/20">•</span>
            <span className="text-white">UK</span>
            <span className="text-white/20">•</span>
            <span className="text-white">UAE</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
