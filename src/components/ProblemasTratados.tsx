import React from "react";
import { motion } from "motion/react";
import {
  Activity,
  UserCheck,
  Layers,
  Zap,
  Accessibility,
  Flame,
  Heart,
  Sliders,
  Maximize2,
  MessageSquare
} from "lucide-react";

export default function ProblemasTratados() {
  const waLink = "https://wa.me/5511960403390?text=Olá%20Dra.%20Thelma,%20gostaria%20de%20saber%20se%20o%20meu%20problema%20tem%20tratamento.";

  const problemas = [
    { name: "Dor Lombar", icon: Flame, text: "Dores na região inferior das costas, agudas ou crônicas, causadas por má postura ou sobrecarga." },
    { name: "Dor Cervical", icon: Activity, text: "Desconforto na região do pescoço, nuca e ombros, frequentemente associado a tensão e estresse." },
    { name: "Hérnia de Disco", icon: Layers, text: "Desgaste ou deslocamento dos discos intervertebrais, causando compressão de nervos." },
    { name: "Ciatalgia", icon: Zap, text: "Dor intensa que irradia ao longo do nervo ciático, passando pelo glúteo e pernas." },
    { name: "Escoliose", icon: Sliders, text: "Desvio lateral ou rotação da coluna vertebral que causa desequilíbrios posturais e musculares." },
    { name: "Dores Articulares", icon: Accessibility, text: "Dores crônicas ou agudas em joelhos, quadris, ombros e punhos decorrentes de artrite ou esforço." },
    { name: "Lesões Musculares", icon: Maximize2, text: "Estiramentos, contraturas e distensões causadas por movimentos bruscos ou fadiga." },
    { name: "Pós-operatório", icon: Heart, text: "Reabilitação após cirurgias ortopédicas para acelerar a cicatrização e restaurar força física." },
    { name: "Alterações Posturais", icon: UserCheck, text: "Hipercifose, hiperlordose e ombros caídos que afetam a mecânica natural do corpo." },
    { name: "Limitação de Movimento", icon: Sliders, text: "Sensação de rigidez ou travamento que impede a realização de tarefas básicas no dia a dia." }
  ];

  // Grid Stagger configurations
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 14 },
    },
  };

  return (
    <section id="problemas" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-light/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-brand-teal font-bold tracking-widest text-xs uppercase bg-brand-light px-3.5 py-1.5 rounded-full border border-sky-100"
          >
            Sintomas e Diagnósticos
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight"
          >
            Como Posso Ajudar Você
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
            Independentemente do seu nível de desconforto ou há quanto tempo você convive com ele, há uma solução terapêutica adequada para o seu caso.
          </motion.p>
        </div>

        {/* Problems Grid with modern animations */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {problemas.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.04, 
                  y: -5,
                  boxShadow: "0 10px 20px -5px rgb(0 0 0 / 0.03)"
                }}
                className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 text-left flex flex-col justify-between cursor-default"
              >
                <div>
                  {/* Icon box */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-10 h-10 rounded-lg bg-brand-light text-brand-teal flex items-center justify-center mb-4 transition-all group-hover:bg-brand-teal group-hover:text-white shrink-0"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  <h3 className="font-display text-base font-bold text-slate-900 mb-2 group-hover:text-brand-teal transition-colors leading-snug">
                    {prob.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    {prob.text}
                  </p>
                </div>
                
                {/* Micro interactive link with sliding effect */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-brand-teal transition-all duration-300 overflow-hidden">
                  <motion.div
                    className="flex items-center gap-1.5"
                    initial={{ x: -10, opacity: 0.5 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    animate={{ x: 0, opacity: 0.8 }}
                  >
                    <span>Tratar este quadro</span>
                    <span className="text-xs group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Banner Inside Problems section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 bg-gradient-to-r from-brand-teal to-brand-teal-dark rounded-3xl p-8 sm:p-10 shadow-xl text-left relative overflow-hidden"
        >
          {/* Subtle decoration elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Não encontrou seu sintoma na lista?
              </h3>
              <p className="text-sm sm:text-base text-slate-200 font-medium">
                Entre em contato e me explique brevemente o que você está sentindo. Posso fazer uma triagem e indicar a melhor conduta.
              </p>
            </div>
            <motion.a
              id="problems-cta-whatsapp"
              href={waLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-brand-green-accent text-white hover:bg-emerald-600 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-md whitespace-nowrap self-stretch sm:self-auto text-center justify-center cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-emerald-300 text-emerald-300" />
              Tirar Dúvida no WhatsApp
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
