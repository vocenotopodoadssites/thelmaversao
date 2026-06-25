import React from "react";
import { motion } from "motion/react";
import { Award, GraduationCap, CheckCircle2, Bookmark, Calendar, MessageSquare } from "lucide-react";

// Direct path to the generated portrait
const portraitImg = "https://i.imgur.com/WCfEOx0.png";

export default function Sobre() {
  const stats = [
    { label: "Anos de Carreira", val: "30+" },
    { label: "Pacientes Satisfeitos", val: "1.200+" },
    { label: "Formação Sólida", val: "UNICID" },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-24 bg-slate-50 overflow-hidden relative">
      {/* Decorative background grids */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-light rounded-full blur-3xl opacity-60 pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Image Frame */}
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              whileInView={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                y: [0, -8, 0]
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                opacity: { duration: 0.8 },
                x: { duration: 0.8 },
                scale: { duration: 0.8 },
                y: { 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5 
                }
              }}
              className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none"
            >
              {/* Decorative backgrounds */}
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-teal/15 to-brand-medium/25 rounded-2xl blur-xl -z-10 animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-100/40 rounded-full blur-2xl -z-10" />

              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white group">
                <img
                  src={portraitImg}
                  alt="Dra. Thelma Soares Fisioterapeuta"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-square object-cover object-top hover:scale-105 transition-transform duration-700"
                />

                {/* Overlaid quick bio tag */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-white text-left">
                  <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold">CREFITO 3 / 34522-F</span>
                  <p className="font-display text-lg font-bold">Dra. Thelma Soares</p>
                  <p className="text-xs text-slate-300">Fisioterapeuta Especialista Clínica</p>
                </div>
              </div>

              {/* Formação quick badge */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-sky-50 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-light text-brand-teal flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-display text-xs font-bold text-slate-900">Graduada UNICID</h4>
                  <p className="text-[10px] text-slate-500 font-bold">Univ. Cidade de S. Paulo</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Column 2: Text Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block text-brand-teal font-bold tracking-widest text-xs uppercase bg-brand-light px-3.5 py-1.5 rounded-full border border-sky-100"
              >
                Quem Sou Eu
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
              >
                Sobre a Dra. Thelma Soares
              </motion.h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="h-1 bg-brand-medium rounded-full" 
              />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg"
            >
              <p className="font-bold text-slate-900">
                "Com mais de 30 anos de atuação na fisioterapia clínica, dedico minha carreira ao tratamento de dores, lesões e disfunções do movimento."
              </p>
              <p className="text-slate-600 text-sm sm:text-base">
                Formada pela <strong>Universidade Cidade de São Paulo (UNICID)</strong>, construí minha experiência acompanhando centenas de pacientes em processos de reabilitação, desde quadros ortopédicos e musculoesqueléticos até recuperação funcional pós-cirúrgica.
              </p>
              <p className="text-slate-600 text-sm sm:text-base">
                Meu compromisso é oferecer um atendimento individualizado, baseado em avaliação criteriosa, técnicas atualizadas e acompanhamento próximo da evolução de cada paciente, visando resultados consistentes e melhora da qualidade de vida.
              </p>
            </motion.div>

            {/* Quick stats grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="grid grid-cols-3 gap-4 py-4 border-y border-slate-200"
            >
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05 }}
                  className="text-center sm:text-left transition-all cursor-default"
                >
                  <p className="font-display text-2xl sm:text-3xl font-extrabold text-brand-teal">{stat.val}</p>
                  <p className="text-xs sm:text-sm text-slate-500 font-bold mt-1 leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Quote of dedication with #ac96c4 background */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="bg-[#ac96c4] border-l-4 border-slate-900 text-white p-5 rounded-r-xl shadow-md"
            >
              <p className="text-sm sm:text-base italic font-bold text-left leading-relaxed">
                "Minha filosofia profissional baseia-se no cuidado humanizado, onde cada sessão é focada integralmente no alívio de tensões, reequilíbrio postural e fortalecimento para prevenir recidivas de dor."
              </p>
            </motion.div>

            {/* Strategic WhatsApp CTA under Bio */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.52 }}
              className="pt-2"
            >
              <motion.a
                id="sobre-cta-whatsapp"
                href="https://wa.me/5511960403390?text=Olá%20Dra.%20Thelma,%20li%20sua%20apresentação%20e%20gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-green-accent hover:bg-emerald-600 text-white font-extrabold px-8 py-4.5 rounded-2xl transition-all duration-300 shadow-xl shadow-emerald-950/15 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-emerald-100 text-emerald-100" />
                Agendar Consulta com a Dra. Thelma
              </motion.a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
