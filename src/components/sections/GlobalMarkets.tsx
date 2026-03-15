"use client";

import Reveal from "../animations/Reveal";

const regions = [
  { name: "India", desc: "APAC Strategy & Development", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800" },
  { name: "United States", desc: "North America Expansion", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800" },
  { name: "United Kingdom", desc: "EMEA Enterprise Adoption", image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80&w=800" },
  { name: "UAE", desc: "MENA Market Integration", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800" }
];

export default function GlobalMarkets() {
  return (
    <section id="global" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <Reveal>
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-sm font-mono tracking-[0.2em] text-primary uppercase mb-4">Coverage</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Global Markets</h3>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, i) => (
            <Reveal key={region.name} delay={0.1 * i}>
              <div 
                className="h-[400px] flex flex-col justify-end p-8 relative overflow-hidden group cursor-default rounded-3xl"
                style={{
                  backgroundImage: `url(${region.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                
                {/* Heavy Dark Overlay to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 bg-black/40" />
                
                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-3xl font-bold text-white mb-2">{region.name}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{region.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
