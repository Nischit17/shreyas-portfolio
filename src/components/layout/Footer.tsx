"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 border-t border-white/5 relative bg-background/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="font-bold text-xl tracking-tighter cursor-pointer interactive" onClick={() => scrollTo("#hero")}>
          Shreyas<span className="text-primary">.</span>SK
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-500 font-mono uppercase tracking-widest">
          <button onClick={() => scrollTo("#about")} className="hover:text-white transition-colors interactive">About</button>
          <button onClick={() => scrollTo("#work")} className="hover:text-white transition-colors interactive">Work</button>
          <button onClick={() => scrollTo("#contact")} className="hover:text-white transition-colors interactive">Contact</button>
        </div>

        <div className="text-gray-500 text-sm">
          &copy; {currentYear} Shreyas SK. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
