"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "../animations/Reveal";

const journeyData = [
  {
    company: "Iosys Software",
    role: "AI Platforms Commercialization",
    description: "Enterprise adoption across India, UK, USA, and UAE. Bridging the gap between deeply technical AI platforms and large-scale enterprise needs.",
    highlight: "Global Expansion Strategy",
  },
  {
    company: "Biztechnosys",
    role: "Enterprise Platform Solutions",
    description: "Built and mentored a 7-member team while delivering CRM systems interwoven with AI capabilities.",
    highlight: "Generated over $120K enterprise project value",
  },
  {
    company: "Lobotus Technology",
    role: "Market Intelligence & Growth",
    description: "Focused on market intelligence, opportunity development, and robust technology sales pipelines.",
    highlight: "Best Performer of the Year",
  }
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="py-32 relative" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-24">
            <h2 className="text-sm font-mono tracking-[0.2em] text-primary uppercase mb-4">Experience</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Professional Journey</h3>
          </div>
        </Reveal>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[24px] md:left-[50%] top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />
          
          {/* Animated Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[24px] md:left-[50%] top-0 w-[2px] bg-gradient-to-b from-primary to-secondary -translate-x-1/2 origin-top"
          />

          {/* Timeline Items */}
          <div className="space-y-24">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.company} className="relative flex flex-col md:flex-row items-center justify-between w-full">
                  
                  {/* Marker */}
                  <div className="absolute left-[24px] md:left-[50%] w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 z-10" />

                  {/* Left Content */}
                  <div className={`w-full md:w-[45%] pl-14 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:order-2 md:pl-16 md:text-left"}`}>
                    <Reveal delay={0.2}>
                      <div className={`glass-card p-6 md:p-8 hover:bg-white/10 transition-colors ${!isEven ? "" : "md:items-end flex flex-col"}`}>
                        <h4 className="text-2xl font-bold text-white mb-2">{item.company}</h4>
                        <div className="text-primary font-mono text-sm mb-4">{item.role}</div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="inline-block px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-medium">
                          {item.highlight}
                        </div>
                      </div>
                    </Reveal>
                  </div>
                  
                  {/* Empty space for the other side */}
                  <div className="hidden md:block w-[45%]" />

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
