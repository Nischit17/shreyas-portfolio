"use client";

import Reveal from "../animations/Reveal";

const capabilitiesData = [
  {
    category: "AI & Intelligent Systems",
    items: [
      "Generative AI",
      "Agentic AI",
      "Decision Intelligence",
      "AI Product Strategy"
    ]
  },
  {
    category: "Enterprise Technology",
    items: [
      "Enterprise Software",
      "Platform Solutions",
      "Technology Partnerships",
      "Global Market Development"
    ]
  },
  {
    category: "Execution",
    items: [
      "Stakeholder Alignment",
      "Complex Solution Positioning",
      "Enterprise Adoption Strategy",
      "Technology Commercialization"
    ]
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-32 relative bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-24">
            <h2 className="text-sm font-mono tracking-[0.2em] text-primary uppercase mb-4">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Core Capabilities</h3>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12">
          {capabilitiesData.map((section, i) => (
            <Reveal key={section.category} delay={0.2 * i}>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] flex-grow bg-white/10" />
                  <h4 className="text-lg font-mono text-secondary uppercase tracking-widest shrink-0">
                    {section.category}
                  </h4>
                </div>
                
                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li key={item} className="glass-card p-6 text-xl text-gray-300 hover:text-white hover:-translate-y-1 transition-all cursor-default relative overflow-hidden group border-white/5 hover:border-white/20">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
