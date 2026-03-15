"use client";

import Reveal from "../animations/Reveal";

const stats = [
  { label: "Revenue Impact", value: "$250K+" },
  { label: "Enterprise Projects", value: "$120K+" },
  { label: "Team Built", value: "7+" },
  { label: "Global Markets", value: "4" }
];

export default function EnterpriseImpact() {
  return (
    <section id="impact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-sm font-mono tracking-[0.2em] text-primary uppercase mb-4">Metrics</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Enterprise Impact Dashboard</h3>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.1 * i}>
              <div className="glass-card p-4 sm:p-6 md:p-8 text-center border-t-2 border-t-primary/50 bg-gradient-to-b from-primary/5 to-transparent">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter mb-2 md:mb-4 drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-sm font-mono text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* High Impact Focus Statement */}
        <Reveal delay={0.4}>
          <div className="glass-card p-8 md:p-12 lg:p-16 text-center border border-white/10 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-medium text-white mb-6 leading-tight max-w-4xl mx-auto">
              &quot;Driving measurable commercial outcomes by translating advanced technical capabilities into viable enterprise solutions.&quot;
            </h4>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
