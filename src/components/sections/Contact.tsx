"use client";

import Reveal from "../animations/Reveal";
import { Copy, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState("");

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <section id="contact" className="py-32 relative bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-sm font-mono tracking-[0.2em] text-primary uppercase mb-4">Connect</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight">Initiate Conversation</h3>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16">
          
          <Reveal delay={0.2}>
            <div className="space-y-12">
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                Available for enterprise consulting, strategic advisory, and collaborative technology ventures across global markets.
              </p>
              
              <div className="space-y-8">
                <div className="group flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <div className="text-sm text-gray-500 mb-1 font-mono uppercase">Email</div>
                    <div className="text-xl font-medium interactive">Sunshine.shreyu@ymail.com</div>
                  </div>
                  <button onClick={() => handleCopy("Sunshine.shreyu@ymail.com", "email")} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <Copy className={`w-5 h-5 ${copied === "email" ? "text-green-400" : "text-gray-400"}`} />
                  </button>
                </div>

                <div className="group flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <div className="text-sm text-gray-500 mb-1 font-mono uppercase">Phone</div>
                    <div className="text-xl font-medium interactive">+91 9513883088</div>
                  </div>
                  <button onClick={() => handleCopy("+91 9513883088", "phone")} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <Copy className={`w-5 h-5 ${copied === "phone" ? "text-green-400" : "text-gray-400"}`} />
                  </button>
                </div>

                <div className="group flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <div className="text-sm text-gray-500 mb-1 font-mono uppercase">Location</div>
                    <div className="text-xl font-medium">Bengaluru, India</div>
                  </div>
                </div>

                <div className="group flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <ExternalLink className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <div className="text-sm text-gray-500 mb-1 font-mono uppercase">LinkedIn</div>
                    <a href="https://linkedin.com/in/shreyas-sk-b748191a0" target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-primary transition-colors interactive">
                      linkedin.com/in/shreyas-sk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <form action="https://formspree.io/f/xqaznnzp" method="POST" className="glass-card p-8 md:p-12 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-400 uppercase">Name</label>
                  <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white hover:border-white/30 focus:border-primary focus:outline-none transition-colors interactive" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-400 uppercase">Organization</label>
                  <input type="text" name="organization" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white hover:border-white/30 focus:border-primary focus:outline-none transition-colors interactive" placeholder="Company name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-mono text-gray-400 uppercase">Email</label>
                <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white hover:border-white/30 focus:border-primary focus:outline-none transition-colors interactive" placeholder="john@enterprise.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-mono text-gray-400 uppercase">Objective</label>
                <textarea rows={5} name="message" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white hover:border-white/30 focus:border-primary focus:outline-none transition-colors resize-none interactive" placeholder="Briefly describe your requirements..." />
              </div>

              <button type="submit" className="w-full py-5 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/80 transition-colors interactive">
                Send Transmission
              </button>
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
