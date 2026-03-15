"use client";

import Reveal from "../animations/Reveal";
import TiltCard from "../ui/TiltCard";
import { Brain, LineChart, Cpu, Globe2 } from "lucide-react";

export default function WhatIWorkOn() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI Product Commercialization",
      description: "Supporting early-stage AI platforms in translating technical capability into enterprise value."
    },
    {
      icon: <LineChart className="w-8 h-8 text-secondary" />,
      title: "Enterprise Technology Strategy",
      description: "Positioning complex technology solutions for enterprise adoption and scaling."
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      title: "AI & Intelligent Systems",
      description: "Generative AI, Agentic AI Systems, Decision Intelligence Platforms, and AI-driven analytics."
    },
    {
      icon: <Globe2 className="w-8 h-8 text-purple-400" />,
      title: "Technology Partnerships",
      description: "Collaborating with technology providers and enterprise stakeholders globally."
    }
  ];

  return (
    <section id="platforms" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-sm font-mono tracking-[0.2em] text-primary uppercase mb-4">Focus Areas</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">What I Work On</h3>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={0.2 + i * 0.1}>
              <TiltCard className="h-full flex flex-col justify-between group">
                <div className="p-4 rounded-xl bg-white/5 w-fit mb-8 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
