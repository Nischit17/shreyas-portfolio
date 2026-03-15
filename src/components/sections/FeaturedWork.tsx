"use client";

import Reveal from "../animations/Reveal";

const projects = [
  {
    title: "AI Voice Agent Automation",
    category: "Scale & Efficiency",
    challenge: "Client required a system to automate outbound calls at scale.",
    solution: "Implemented an AI voice agent integrated with CRM workflows.",
    impact: "Automated hundreds of calls daily while maintaining conversation quality.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
  },
  {
    title: "CRM + AI Workflow Automation",
    category: "Sales Operations",
    challenge: "Manual follow-ups and lead management were slowing down sales operations.",
    solution: "Connected AI automation with CRM pipelines to streamline workflows.",
    impact: "Reduced manual effort and improved response times for prospects.",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
  },
  {
    title: "Enterprise AI Product Demos",
    category: "Client Engagement",
    challenge: "Potential enterprise clients required technical clarity before adopting AI solutions.",
    solution: "Led discovery sessions and delivered product demos explaining real-world use cases.",
    impact: "Improved client understanding and accelerated sales conversations.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
  }
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mb-16 md:mb-20 text-center md:text-left">
            <h2 className="text-sm font-mono tracking-[0.2em] text-primary uppercase mb-4">Case Studies</h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight max-w-2xl">
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
                
                <div className="relative z-10 p-6 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  
                  <div className="w-full">
                    <div className="text-[10px] sm:text-xs md:text-sm font-mono tracking-widest text-gray-400 mb-3 md:mb-4 uppercase">
                      {project.category}
                    </div>
                    <h4 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                      {project.title}
                    </h4>
                    
                    <div className="space-y-6 max-w-3xl">
                      <div>
                        <div className="text-white font-medium mb-1">Challenge</div>
                        <p className="text-lg text-gray-400 leading-relaxed">{project.challenge}</p>
                      </div>
                      <div>
                        <div className="text-white font-medium mb-1">Solution</div>
                        <p className="text-lg text-gray-400 leading-relaxed">{project.solution}</p>
                      </div>
                      <div>
                        <div className="text-secondary font-medium mb-1">Impact</div>
                        <p className="text-lg text-gray-300 leading-relaxed">{project.impact}</p>
                      </div>
                    </div>
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
