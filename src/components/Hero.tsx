import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, MessageSquare, Calendar } from "lucide-react";

// Official clinic photos
const clinicImages = [
  "https://i.imgur.com/tAJBzTY.png",
  "https://i.imgur.com/aH7P86E.png",
  "https://i.imgur.com/hiXIb39.png",
  "https://i.imgur.com/0WbsnU1.png"
];

export default function Hero() {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIdx((prev) => (prev + 1) % clinicImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const waLink = "https://wa.me/5511960403390?text=Olá%20Dra.%20Thelma,%20gostaria%20de%20agendar%20uma%20avaliação%20fisioterapêutica.";

  const features = [
    "Atendimento Individualizado",
    "Mais de 30 Anos de Experiência",
    "Consultório na Aclimação",
    "Exercícios Terapêuticos Personalizados",
  ];

  // Container variants for staggered child animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-brand-light via-white to-slate-50">
      
      {/* Dynamic Animated background shapes for visual "life" */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          x: [0, 15, 0],
          y: [0, -15, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10" 
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, -20, 0],
          y: [0, 20, 0]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2 
        }}
        className="absolute bottom-12 left-0 w-72 h-72 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      {/* Floating abstract light particles to make it feel magical and lively */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.span 
          animate={{ y: [-10, -40, -10], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-2.5 h-2.5 rounded-full bg-brand-medium/40"
        />
        <motion.span 
          animate={{ y: [10, 40, 10], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-2/3 right-12 w-3.5 h-3.5 rounded-full bg-brand-green-accent/30"
        />
        <motion.span 
          animate={{ x: [-15, 15, -15], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-cyan-400/30"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-left"
          >
            {/* Banner Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-brand-light border border-sky-100 text-brand-teal px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-ping" />
              Fisioterapia Baseada em Resultados Consistentes
            </motion.div>
            
            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Sua Dor Tem Uma Causa. <br />
                <span className="relative inline-block text-brand-teal">
                  Vamos Encontrá-la.
                  {/* Decorative modern underline */}
                  <span className="absolute left-0 bottom-1 w-full h-[6px] bg-brand-medium/20 rounded-full -z-10" />
                </span>
              </h1>
              
              <p className="font-display text-lg sm:text-xl font-bold text-slate-700 max-w-2xl leading-relaxed italic border-l-4 border-brand-medium pl-4">
                "Tratar a dor é importante. Descobrir por que ela voltou é essencial."
              </p>
              
              <p className="text-base sm:text-lg text-slate-600 max-w-xl font-medium">
                Venha sentir em seu corpo e em sua vida os benefícios da fisioterapia.
              </p>
            </motion.div>

            {/* Checklist Features */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2"
            >
              {features.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-sky-100/50 shadow-sm shadow-slate-200/40 cursor-default transition-all duration-300 hover:border-brand-medium/30 hover:shadow-md"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-green-accent shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-slate-700">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                id="hero-cta-primary"
                href={waLink}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 bg-brand-teal text-white hover:bg-brand-teal-dark px-8 py-4 rounded-xl font-extrabold text-base transition-all duration-300 shadow-lg shadow-cyan-900/15 hover:shadow-xl hover:shadow-cyan-900/25"
              >
                <Calendar className="w-5 h-5 text-sky-200" />
                Agendar Avaliação
              </motion.a>
              <motion.a
                id="hero-cta-secondary"
                href={waLink}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 bg-white text-slate-700 hover:text-brand-teal border border-slate-200 hover:border-brand-teal px-8 py-4 rounded-xl font-extrabold text-base transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <MessageSquare className="w-5 h-5 text-brand-green-accent fill-brand-green-accent" />
                Falar pelo WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image Section with continuous smooth floating */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: [0, -10, 0] 
              }}
              transition={{ 
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 },
                y: { 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }
              }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-medium/25 to-brand-teal/15 blur-2xl -z-10" />
              
              {/* Frame around the image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-slate-100 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImgIdx}
                    src={clinicImages[currentImgIdx]}
                    alt={`Consultório Premium da Dra. Thelma Soares na Aclimação - Foto ${currentImgIdx + 1}`}
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Floating trust badge with its own subtle micro-float */}
                <motion.div 
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-sky-50 flex items-center gap-4 z-10"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-light text-brand-teal flex items-center justify-center font-display font-extrabold text-lg border border-sky-100 shrink-0">
                    30+
                  </div>
                  <div className="text-left">
                    <h4 className="font-display text-sm font-bold text-slate-950">Anos de Prática Clínica</h4>
                    <p className="text-xs text-slate-500 font-semibold">Resultados duradouros e seguros</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
