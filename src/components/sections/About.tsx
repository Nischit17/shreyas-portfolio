"use client";

import Reveal from "../animations/Reveal";
import { useInView, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = Math.abs(Math.floor(duration / end) || 1);

      const timer = setInterval(() => {
        start += 5;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side: Strategic Visual */}
            <div className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden glass-card group border-white/10 bg-gradient-to-br from-white/5 to-transparent">
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-4 opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="h-1 bg-gradient-to-r from-primary to-transparent rounded-full w-3/4"></div>
                  <div className="h-1 bg-gradient-to-r from-secondary to-transparent rounded-full w-1/2 justify-self-end"></div>
                  <div className="h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full w-full col-span-2 mt-4"></div>
                </div>

                <div className="flex-grow flex items-center justify-center relative">
                  {/* Glowing Core */}
                  <div className="absolute w-40 h-40 bg-primary/20 rounded-full blur-[60px] animate-pulse-slow"></div>
                  <div
                    className="absolute w-32 h-32 bg-secondary/20 rounded-full blur-[40px] animate-pulse-slow"
                    style={{ animationDelay: "1s" }}
                  ></div>

                  {/* Orbiting Elements */}
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center relative"
                  >
                    <div className="absolute -top-3 w-6 h-6 bg-primary rounded-full blur-[4px]"></div>
                    <div className="absolute -bottom-3 w-6 h-6 bg-secondary rounded-full blur-[4px]"></div>
                  </motion.div>
                </div>

                <div className="space-y-3 font-mono text-sm tracking-widest uppercase md:text-xs lg:text-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary"></span> Market Strategy
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-secondary"></span> Execution
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white/50"></span> Scale
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Content */}
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                I work at the intersection of{" "}
                <span className="text-gradient">
                  AI technology and business growth.
                </span>
              </h2>

              <div className="space-y-6 text-xl text-gray-400 leading-relaxed">
                <p>
                  My focus is helping companies understand how AI, automation,
                  and modern software solutions can solve real operational
                  problems.
                </p>

                <p>I specialize in:</p>

                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Enterprise discovery and solution consulting
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    AI & Generative AI solution positioning
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Client demos and technical storytelling
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Building international sales pipelines
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Helping startups translate complex technology into business
                    value
                  </li>
                </ul>
                <p className="text-lg">
                  I enjoy working with fast-growing tech startups and AI
                  companies that are solving real-world problems.
                </p>
              </div>

              {/* Metric Card */}
              {/* <div className="mt-10 md:mt-12 glass-card p-6 md:p-8 border-primary/20 bg-primary/5">
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter">
                  $<AnimatedCounter value={250} />K<span className="text-primary">+</span>
                </div>
                <div className="text-sm font-mono tracking-widest uppercase text-gray-400">
                  Revenue Impact Across International Clients
                </div>
              </div> */}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
