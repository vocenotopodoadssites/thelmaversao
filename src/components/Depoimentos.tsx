import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MessageSquare, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

export default function Depoimentos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const googleRating = {
    score: "5.0",
    totalReviews: "84 avaliações",
    source: "Google Reviews",
  };

  const depoimentos = [
    {
      id: 1,
      name: "Mariana Alencar",
      treatment: "Tratamento de Hérnia de Disco",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
      text: "Eu sofria com crises constantes de coluna que me travavam na cama. Depois de passar por vários médicos, comecei a tratar com a Dra. Thelma. Ela identificou que minha dor lombar vinha de compensações na bacia. Em poucas sessões de avaliação e exercícios dirigidos, voltei a ter uma rotina ativa e sem dor. Sou eternamente grata!",
      stars: 5,
      date: "Há 2 meses",
    },
    {
      id: 2,
      name: "Carlos Eduardo Santos",
      treatment: "Fisioterapia Ortopédica (Joelho)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      text: "Fiz uma cirurgia de menisco no joelho e estava muito inseguro quanto à reabilitação. O atendimento da Dra. Thelma é extremamente personalizado, ela me acompanhou de perto, conferindo cada repetição e ajustando conforme eu progredia. Minha recuperação foi muito mais rápida do que o ortopedista previa.",
      stars: 5,
      date: "Há 1 mês",
    },
    {
      id: 3,
      name: "Beatriz Nogueira",
      treatment: "RPG (Correção de Escoliose)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      text: "Procurei o RPG por causa de uma escoliose acentuada que estava causando dores constantes nos ombros. O trabalho da Dra. Thelma é fantástico. Ela percebe os mínimos desvios e ensina a gente a se posicionar melhor. Sinto meu corpo muito mais alinhado e leve. Indico de olhos fechados!",
      stars: 5,
      date: "Há 3 semanas",
    },
    {
      id: 4,
      name: "Roberto de Oliveira",
      treatment: "Ciatalgia & Postura",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
      text: "Quem já teve dor no nervo ciático sabe o desespero que é. A Dra. Thelma conseguiu desinflamar meu nervo em pouquíssimas sessões através de terapia manual e exercícios que faço até hoje em casa. Uma profissional de altíssimo nível e com uma empatia rara de se ver.",
      stars: 5,
      date: "Há 4 meses",
    },
  ];

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === depoimentos.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? depoimentos.length - 1 : prev - 1));
  };

  const selectBullet = (idx: number) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  // Bidirectional slider animation configuration
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
    }),
  };

  return (
    <section id="depoimentos" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-sky-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-brand-teal font-bold tracking-widest text-xs uppercase bg-brand-light px-3.5 py-1.5 rounded-full border border-sky-100"
          >
            Relatos de Sucesso
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight"
          >
            O Que Meus Pacientes Dizem
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-1 bg-brand-medium mx-auto mt-4 rounded-full" 
          />
        </div>

        {/* Google Reviews Trust Badge with active floating motion */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{ y: [0, -4, 0] }}
          transition={{ 
            opacity: { duration: 0.5 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="max-w-sm mx-auto mb-12 bg-slate-50 border border-slate-200/80 p-4 rounded-2xl flex items-center justify-between shadow-sm cursor-default hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-center gap-3">
            {/* Google Logo Mock */}
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-display font-extrabold text-lg shadow-sm border border-slate-100 shrink-0">
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span>
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-slate-900">Avaliações no Google</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-sm font-bold text-slate-800">{googleRating.score}</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="text-right border-l border-slate-200 pl-4 shrink-0">
            <p className="text-xs font-bold text-brand-teal uppercase tracking-wider">Excelente</p>
            <p className="text-[10px] text-slate-500 font-bold">{googleRating.totalReviews}</p>
          </div>
        </motion.div>

        {/* Carousel / Slider Frame */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-12">
          
          <div className="relative bg-[#ac96c4] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-purple-300/20 overflow-hidden min-h-[360px] sm:min-h-[280px] flex items-center">
            {/* Soft decorative elements inside the container to make it premium */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-950/20 rounded-full blur-xl pointer-events-none" />

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ 
                  x: { type: "spring", stiffness: 150, damping: 20 },
                  opacity: { duration: 0.25 }
                }}
                className="space-y-6 text-left w-full relative z-10"
              >
                {/* Stars and verified */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-300">
                    {[...Array(depoimentos[activeIndex].stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-purple-100 font-extrabold bg-white/10 px-3 py-1 rounded-full border border-white/20">
                    <CheckCircle className="w-4 h-4 text-emerald-300 fill-emerald-300" />
                    Paciente Verificado
                  </div>
                </div>

                {/* Main Review text */}
                <blockquote className="text-base sm:text-lg text-white/95 leading-relaxed italic font-semibold">
                  "{depoimentos[activeIndex].text}"
                </blockquote>

                {/* Profile info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/25">
                  <img
                    src={depoimentos[activeIndex].avatar}
                    alt={depoimentos[activeIndex].name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shrink-0"
                  />
                  <div className="text-left">
                    <h4 className="font-display text-base font-extrabold text-white">
                      {depoimentos[activeIndex].name}
                    </h4>
                    <p className="text-xs sm:text-sm font-bold text-purple-100/90">
                      {depoimentos[activeIndex].treatment} • <span className="font-semibold text-purple-200/80">{depoimentos[activeIndex].date}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Arrows */}
          <div className="flex justify-center sm:justify-between items-center mt-8 sm:absolute sm:inset-y-0 sm:left-0 sm:right-0 sm:mt-0 pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white hover:bg-brand-teal text-slate-700 hover:text-white border border-slate-200 hover:border-transparent flex items-center justify-center shadow-md transition-all pointer-events-auto sm:-translate-x-5"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <span className="mx-4 text-xs font-bold text-slate-400 sm:hidden">
              {activeIndex + 1} de {depoimentos.length}
            </span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white hover:bg-brand-teal text-slate-700 hover:text-white border border-slate-200 hover:border-transparent flex items-center justify-center shadow-md transition-all pointer-events-auto sm:translate-x-5"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Carousel Bullets */}
          <div className="flex justify-center gap-2 mt-6">
            {depoimentos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => selectBullet(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "bg-brand-teal w-6" : "bg-slate-300"
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Strategic CTA below testimonials */}
        <div className="mt-12 text-center">
          <motion.a
            href="https://wa.me/5511960403390?text=Olá%20Dra.%20Thelma,%20vi%20os%20depoimentos%20dos%20seus%20pacientes%20e%20gostaria%20de%20agendar%20uma%20avaliação."
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-brand-green-accent hover:bg-emerald-600 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm sm:text-base transition-all duration-300 shadow-md cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-emerald-100 text-emerald-100" />
            Quero Ter Resultados Assim Também
          </motion.a>
        </div>

      </div>
    </section>
  );
}
