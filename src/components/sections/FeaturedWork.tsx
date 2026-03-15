"use client";

import Reveal from "../animations/Reveal";

const projects = [
  {
    title: "Agentic AI Decision Platform",
    category: "Enterprise AI",
    description: "Enterprise platform designed for decision intelligence and multi-agent collaboration, automating complex strategic workflows.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
  },
  {
    title: "Sales Insight Copilot",
    category: "AI Analytics",
    description: "AI platform transforming dense business reporting into interactive, conversational insights for rapid enterprise decision-making.",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
  },
  {
    title: "AI Policy Monitoring",
    category: "Healthcare Technology",
    description: "Healthcare AI decision intelligence platform enabling real-time policy monitoring and significantly faster pre-authorization decisions.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
  }
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-sm font-mono tracking-[0.2em] text-primary uppercase mb-4">Case Studies</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl">
              Featured Work & Platforms
            </h3>
          </div>
        </Reveal>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={0.2 + i * 0.1}>
              <div className={`group relative glass-card overflow-hidden border ${project.border} bg-white/5 hover:bg-white/10 transition-colors`}>
                
                {/* Hover Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                
                <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  
                  <div className="w-full">
                    <div className="text-sm font-mono tracking-widest text-gray-400 mb-4 uppercase">
                      {project.category}
                    </div>
                    <h4 className="text-3xl md:text-5xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                      {project.title}
                    </h4>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl">
                      {project.description}
                    </p>
                  </div>
                  
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
