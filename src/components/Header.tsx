import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, Menu, X, CheckCircle2 } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Simple active tab tracker based on section positions
      const sections = ["diferenciais", "servicos", "sobre", "problemas", "depoimentos", "localizacao"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waLink = "https://wa.me/5511960403390?text=Olá%20Dra.%20Thelma,%20gostaria%20de%20agendar%20uma%20avaliação%20fisioterapêutica.";

  const menuItems = [
    { id: "diferenciais", label: "Por Que Escolher" },
    { id: "servicos", label: "Serviços" },
    { id: "sobre", label: "Sobre Mim" },
    { id: "problemas", label: "Como Ajudar" },
    { id: "depoimentos", label: "Depoimentos" },
    { id: "localizacao", label: "Localização" },
  ];

  return (
    <motion.header
      id="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-sky-100/50 py-2.5"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      {/* Dynamic Reading Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-brand-medium via-brand-teal to-brand-green-accent transition-all duration-100 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]">
            <img 
              src="https://i.imgur.com/HHPJg5l.jpeg" 
              alt="Logo Dra. Thelma Soares" 
              className="w-12 h-12 rounded-full object-cover shadow-sm border border-slate-100 group-hover:border-brand-teal transition-all duration-300 shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-brand-teal flex items-center gap-1.5 transition-colors group-hover:text-brand-teal-dark">
                Dra. Thelma Soares
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold -mt-1 transition-colors group-hover:text-brand-teal">
                Fisioterapia &amp; Reabilitação
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-semibold text-slate-600">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative py-1.5 transition-all duration-300 hover:text-brand-teal ${
                  activeTab === item.id ? "text-brand-teal" : ""
                }`}
              >
                {item.label}
                {/* Underline on active or hover */}
                {activeTab === item.id ? (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-teal rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                ) : (
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2.5px] bg-brand-medium/50 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Contact and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1.5 text-xs text-brand-green-accent bg-brand-green-light px-3 py-1.5 rounded-full font-bold border border-emerald-100/30"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green-accent animate-pulse" />
              Atendendo na Aclimação
            </motion.div>
            <motion.a
              id="header-cta-whatsapp"
              href={waLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-brand-teal text-white hover:bg-brand-teal-dark px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md shadow-cyan-900/10 hover:shadow-lg hover:shadow-cyan-900/20"
            >
              <MessageSquare className="w-4 h-4 text-emerald-300 fill-emerald-300" />
              Agendar Consulta
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <motion.a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center justify-center p-2.5 rounded-full bg-brand-green-light text-brand-green-accent hover:bg-brand-green-accent hover:text-white transition-all shadow-sm"
              title="Falar pelo WhatsApp"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
            </motion.a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-brand-teal transition-all focus:outline-none border border-transparent hover:border-slate-200"
              aria-label="Alternar menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-slate-100 mt-2 bg-white overflow-hidden shadow-inner"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 flex flex-col text-base font-semibold text-slate-700">
              {menuItems.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`px-3 py-2.5 rounded-xl transition-all flex items-center justify-between ${
                    activeTab === item.id 
                      ? "bg-brand-light text-brand-teal font-bold" 
                      : "hover:bg-slate-50 hover:text-brand-teal"
                  }`}
                >
                  <span>{item.label}</span>
                  {activeTab === item.id && <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />}
                </motion.a>
              ))}

              <div className="pt-4 px-3 flex flex-col gap-3 border-t border-slate-100 mt-2">
                <div className="flex items-center gap-1.5 text-xs text-brand-green-accent bg-brand-green-light px-3 py-1.5 rounded-full font-bold self-start">
                  <span className="w-2 h-2 rounded-full bg-brand-green-accent animate-pulse" />
                  Atendendo na Aclimação
                </div>
                <motion.a
                  id="mobile-cta-whatsapp"
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-brand-teal text-white hover:bg-brand-teal-dark py-3.5 rounded-xl font-bold text-sm transition-all shadow-md"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-300 fill-emerald-300" />
                  Falar pelo WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
