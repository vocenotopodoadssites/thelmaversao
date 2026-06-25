import React from "react";
import { motion } from "motion/react";
import { Calendar, MessageSquare, ShieldCheck, Heart } from "lucide-react";

export default function CallToAction() {
  const waLink = "https://wa.me/5511960403390?text=Olá%20Dra.%20Thelma,%20gostaria%20de%20agendar%20minha%20avaliação%20fisioterapêutica.";

  return (
    <section className="relative py-24 bg-gradient-to-br from-brand-teal-dark via-brand-teal to-cyan-900 overflow-hidden text-center text-white">
      {/* Decorative backdrop blobs with continuous movement */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-medium/10 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          x: [0, 20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Floating Heart Icon badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          animate={{ y: [0, -6, 0] }}
          transition={{ 
            scale: { type: "spring", stiffness: 100 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="mx-auto w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg shadow-black/10"
        >
          <Heart className="w-8 h-8 text-emerald-300 fill-emerald-300 animate-pulse" />
        </motion.div>

        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
          >
            Conviva Com Menos Dor e <br />
            <span className="text-emerald-300">Mais Qualidade de Vida</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-sky-100 max-w-2xl mx-auto font-bold"
          >
            Agende sua avaliação e descubra a verdadeira causa da sua dor com um tratamento personalizado.
          </motion.p>
        </div>

        {/* Big Booking Button with pulse feedback */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-2"
        >
          <motion.a
            id="final-cta-whatsapp"
            href={waLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 bg-brand-green-accent hover:bg-emerald-600 text-white font-extrabold text-lg px-8 sm:px-12 py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-emerald-950/30 hover:shadow-emerald-950/50 cursor-pointer relative overflow-hidden"
          >
            {/* Soft pulsing border ring to draw attention */}
            <span className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-ping pointer-events-none scale-105 opacity-20" />
            
            <MessageSquare className="w-6 h-6 fill-current text-emerald-100" />
            Agendar Avaliação Pelo WhatsApp
          </motion.a>
        </motion.div>

        {/* Small reassurance statements */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.85 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="pt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs sm:text-sm text-sky-100/80 font-bold"
        >
          <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
            <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
            Sem compromisso de fidelidade
          </span>
          <span className="hidden sm:inline text-white/40">•</span>
          <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
            <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
            Atendimento 100% focado em você
          </span>
        </motion.div>

      </div>
    </section>
  );
}
