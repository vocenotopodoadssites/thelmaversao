import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppFloatingButton() {
  const waLink = "https://wa.me/5511960403390?text=Olá%20Dra.%20Thelma,%20gostaria%20de%20agendar%20uma%20avaliação%20fisioterapêutica.";

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.6, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.5 }}
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end"
    >
      {/* Dynamic alert bubble */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.4 }}
        className="bg-white text-slate-800 text-[11px] font-extrabold py-1.5 px-3.5 rounded-full shadow-lg border border-slate-100 mb-2 mr-1 animate-bounce hidden sm:block select-none"
      >
        Fale comigo agora 💬
      </motion.div>
      
      <motion.a
        id="floating-whatsapp-action"
        href={waLink}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -4, 0]
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="relative w-14 h-14 bg-brand-green-accent text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300 group cursor-pointer"
        aria-label="Falar pelo WhatsApp"
      >
        {/* Radar concentric rings */}
        <span className="absolute inset-0 rounded-full bg-brand-green-accent/40 animate-ping -z-10" />
        
        <MessageSquare className="w-7 h-7 fill-white text-white group-hover:rotate-12 transition-transform duration-300" />
      </motion.a>
    </motion.div>
  );
}
