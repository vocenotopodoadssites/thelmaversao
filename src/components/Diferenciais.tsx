import React from "react";
import { motion } from "motion/react";
import {
  HeartHandshake,
  ClipboardCheck,
  Accessibility,
  Activity,
  Award,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

export default function Diferenciais() {
  const items = [
    {
      title: "Atendimento Individual e Humanizado",
      desc: "Consultas individuais, sem pressa. Toda a atenção dedicada a ouvir você e entender suas dificuldades.",
      icon: HeartHandshake,
      color: "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      title: "Avaliação Detalhada",
      desc: "Análise minuciosa da postura, mobilidade e padrões de movimento para identificar a origem real do seu desconforto.",
      icon: ClipboardCheck,
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      title: "Foco em Coluna e Articulações",
      desc: "Especialidade e técnicas avançadas para reabilitar dores nas costas, cervicalgias, hérnias e desgastes articulares.",
      icon: Accessibility,
      color: "bg-cyan-50 text-cyan-600 border-cyan-100",
    },
    {
      title: "Exercícios Terapêuticos Personalizados",
      desc: "Prescrição direcionada para as suas necessidades específicas, promovendo fortalecimento inteligente e seguro.",
      icon: Activity,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      title: "Mais de 30 Anos de Experiência",
      desc: "Histórico consolidado cuidando de centenas de pacientes com ética, seriedade e atualização profissional constante.",
      icon: Award,
      color: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      title: "Acompanhamento Próximo da Evolução",
      desc: "Monitoramento contínuo da sua melhora a cada sessão, ajustando as condutas para garantir os melhores resultados.",
      icon: TrendingUp,
      color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
  ];

  // Animation variants
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14,
      },
    },
  };

  return (
    <section id="diferenciais" className="py-20 bg-white relative overflow-hidden">
      {/* Visual background decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-brand-teal font-bold tracking-widest text-xs uppercase bg-brand-light px-3.5 py-1.5 rounded-full border border-sky-100"
          >
            Diferenciais de Atendimento
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight"
          >
            Por Que Escolher a Dra. Thelma Soares?
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
            Uma abordagem que vai muito além de tratar apenas os sintomas temporários. O foco está em devolver sua liberdade de movimento e qualidade de vida duradoura.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)"
                }}
                className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-md shadow-slate-100/40 hover:border-brand-medium/20 transition-all duration-300 cursor-default"
              >
                {/* Expandable top border line */}
                <span className="absolute top-0 left-0 w-0 h-[4px] bg-gradient-to-r from-brand-medium to-brand-teal group-hover:w-full transition-all duration-500 rounded-t-2xl" />

                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* Icon Container with jumpy rotation on card hover */}
                    <motion.div 
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color} mb-6 transition-all duration-300 group-hover:shadow-inner`}
                    >
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </motion.div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-teal transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Strategic WhatsApp CTA inside Diferenciais with #ac96c4 background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 bg-[#ac96c4] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden text-left"
        >
          {/* Subtle light blobs for premium visual feel */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-slate-900/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2">
              <h3 className="font-display text-xl sm:text-2xl font-extrabold">
                Quer descobrir a verdadeira causa da sua dor?
              </h3>
              <p className="text-sm sm:text-base text-purple-50 font-bold leading-relaxed">
                Agende uma avaliação postural detalhada e individualizada. Vamos identificar os desequilíbrios do seu corpo e prescrever o tratamento ideal.
              </p>
            </div>
            <motion.a
              id="diferenciais-cta-whatsapp"
              href="https://wa.me/5511960403390?text=Olá%20Dra.%20Thelma,%20gostaria%20de%20agendar%20uma%20avaliação%20postural."
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 bg-brand-green-accent hover:bg-emerald-600 text-white px-6 py-4 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-300 shadow-md whitespace-nowrap self-stretch sm:self-auto text-center justify-center cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-emerald-100 text-emerald-100" />
              Agendar Avaliação pelo WhatsApp
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
