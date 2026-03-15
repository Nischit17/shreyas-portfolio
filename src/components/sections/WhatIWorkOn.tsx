"use client";

import Reveal from "../animations/Reveal";
import { Brain, Search, Lightbulb, Presentation, TrendingUp, Workflow, BarChart3, Mic, Users } from "lucide-react";

const skillsData = [
  { title: "AI & Generative AI Solutions", icon: <Brain className="w-6 h-6" />, color: "text-blue-400" },
  { title: "Enterprise Discovery", icon: <Search className="w-6 h-6" />, color: "text-purple-400" },
  { title: "Solution Consulting", icon: <Lightbulb className="w-6 h-6" />, color: "text-amber-400" },
  { title: "Technical Product Demos", icon: <Presentation className="w-6 h-6" />, color: "text-emerald-400" },
  { title: "Business Development", icon: <TrendingUp className="w-6 h-6" />, color: "text-indigo-400" },
  { title: "CRM Automation", icon: <Workflow className="w-6 h-6" />, color: "text-rose-400" },
  { title: "Sales Pipeline Management", icon: <BarChart3 className="w-6 h-6" />, color: "text-cyan-400" },
  { title: "AI Voice Agents", icon: <Mic className="w-6 h-6" />, color: "text-violet-400" },
  { title: "Client Relationship Building", icon: <Users className="w-6 h-6" />, color: "text-fuchsia-400" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-24">
            <h2 className="text-sm font-mono tracking-[0.2em] text-primary uppercase mb-4">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Core Competencies</h3>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, i) => (
            <Reveal key={skill.title} delay={0.1 * i}>
              <div className="group relative glass-card p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all overflow-hidden flex flex-col items-center justify-center text-center h-full hover:-translate-y-1">
                
                {/* Background Sweep */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className={`mb-6 p-4 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 ${skill.color}`}>
                  {skill.icon}
                </div>
                
                <h4 className="text-lg md:text-xl font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {skill.title}
                </h4>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
