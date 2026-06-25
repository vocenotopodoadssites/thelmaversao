import React from "react";
import { motion } from "motion/react";
import { Sparkles, Shield, Compass, ChevronRight, MessageSquare } from "lucide-react";

export default function Servicos() {
  const waLink = "https://wa.me/5511960403390?text=Olá%20Dra.%20Thelma,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20tratamentos.";

  const services = [
    {
      id: "coluna",
      title: "Tratamento para Coluna",
      desc: "Atendimento especializado para dor lombar, cervicalgia, hérnia de disco, ciatalgia, escoliose e alterações posturais. O tratamento tem como objetivo reduzir a dor, melhorar a mobilidade, restaurar a função e promover mais qualidade de vida.",
      icon: Sparkles,
      tag: "Mais Procurado",
      highlights: ["Dor Lombar & Ciático", "Hérnia de Disco", "Cervicalgias", "Melhora de Mobilidade"],
      bg: "from-sky-50 to-blue-50/50",
      accentColor: "text-brand-teal bg-sky-100",
      borderColor: "border-sky-100",
    },
    {
      id: "ortopedia",
      title: "Fisioterapia Ortopédica e Reabilitação Funcional",
      desc: "Tratamento voltado para lesões e disfunções que afetam músculos, tendões, ligamentos e articulações, incluindo joelhos, quadris, ombros e recuperação pós-cirúrgica. O objetivo é recuperar os movimentos, aliviar a dor e permitir o retorno seguro às atividades diárias.",
      icon: Shield,
      tag: "Especialidade",
      highlights: ["Lesões de Tendão & Músculo", "Reabilitação Pós-Cirúrgica", "Dores Articulares (Joelho, Ombro)", "Retorno Seguro às Atividades"],
      bg: "from-cyan-50 to-teal-50/30",
      accentColor: "text-cyan-700 bg-cyan-100/75",
      borderColor: "border-cyan-100",
    },
    {
      id: "rpg",
      title: "RPG – Reeducação Postural Global",
      desc: "Método fisioterapêutico que busca corrigir desequilíbrios posturais por meio de posturas específicas e alongamentos globais. É indicado para alterações posturais, dores crônicas, escoliose e limitações de movimento, promovendo alinhamento corporal e prevenção de novas dores.",
      icon: Compass,
      tag: "Método Exclusivo",
      highlights: ["Alongamentos Globais", "Correção Postural", "Limitações de Movimento", "Prevenção de Recidivas"],
      bg: "from-emerald-50/60 to-teal-50/30",
      accentColor: "text-emerald-700 bg-emerald-100/70",
      borderColor: "border-emerald-100/80",
    },
  ];

  // Animation configuration
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
      },
    },
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="servicos" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-light rounded-full blur-3xl opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-brand-teal font-bold tracking-widest text-xs uppercase bg-brand-light px-3.5 py-1.5 rounded-full border border-sky-100"
          >
            Especialidades Médicas
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight"
          >
            Serviços Especializados
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 bg-brand-medium mx-auto mt-4 rounded-full" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-600 text-base sm:text-lg mt-4"
          >
            Abordagens fisioterapêuticas integradas para reabilitação completa do seu corpo, focadas em tratar a raiz do seu problema com rigor científico e delicadeza.
          </motion.p>
        </div>

        {/* Services Stack/Grid */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02, 
                  y: -6,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)"
                }}
                className={`flex flex-col justify-between bg-gradient-to-br ${service.bg} rounded-3xl p-8 border ${service.borderColor} shadow-sm hover:border-brand-medium/20 transition-all duration-300 relative overflow-hidden cursor-default`}
              >
                {/* Visual Accent Circle in Background */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/20 rounded-full blur-xl pointer-events-none" />

                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div 
                      whileHover={{ rotate: 15 }}
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${service.accentColor}`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <span className="text-xs font-bold tracking-wide uppercase bg-white/80 px-3 py-1 rounded-full text-slate-500 border border-slate-100">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title and description */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Highlights Bullet list */}
                  <div className="border-t border-slate-200/60 pt-5 mb-8">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3.5">
                      Focos do Tratamento:
                    </h4>
                    <motion.ul 
                      variants={listContainerVariants}
                      className="space-y-2.5"
                    >
                      {service.highlights.map((hl, i) => (
                        <motion.li 
                          key={i} 
                          variants={listItemVariants}
                          className="flex items-center gap-2 text-sm text-slate-700 font-bold"
                        >
                          <span className="w-2 h-2 rounded-full bg-brand-green-accent shrink-0" />
                          {hl}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-auto pt-4">
                  <motion.a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-teal text-slate-700 hover:text-white border border-slate-200 hover:border-transparent p-3.5 rounded-xl font-bold text-sm transition-all shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-500 group-hover:text-white" />
                    Saber Mais Pelo WhatsApp
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
 
        {/* Small Trust Info Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 font-medium flex items-center justify-center gap-2 flex-wrap">
            <span>✓ Atendimento individualizado por sessão</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Consultas com hora marcada</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Materiais e aparelhos esterilizados e modernos</span>
          </p>
        </div>

      </div>
    </section>
  );
}
