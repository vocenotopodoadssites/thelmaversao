import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone, MessageSquare, Clock, ArrowUpRight } from "lucide-react";

export default function Localizacao() {
  const address = "Rua Topázio, 342 - Aclimação, São Paulo - SP, 04105-060";
  const phone = "(11) 96040-3390";
  const email = "contato@drathelmasoares.com.br";
  const hours = [
    { days: "Segunda a Sexta", hours: "08h às 20h" },
    { days: "Sábado", hours: "08h às 13h" },
    { days: "Domingo", hours: "Fechado" },
  ];

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const waLink = "https://wa.me/5511960403390?text=Olá%20Dra.%20Thelma,%20gostaria%20de%20confirmar%20a%20localização%20do%20consultório.";

  return (
    <section id="localizacao" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-brand-teal font-bold tracking-widest text-xs uppercase bg-brand-light px-3.5 py-1.5 rounded-full border border-sky-100"
          >
            Onde Atendo
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight"
          >
            Atendimento na Aclimação
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-brand-medium mx-auto mt-4 rounded-full" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-600 text-base sm:text-lg mt-4"
          >
            Consultório localizado em região de fácil acesso, oferecendo conforto, segurança e atendimento especializado de alto padrão.
          </motion.p>
        </div>

        {/* Info Grid and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between text-left">
            <div className="space-y-6">
              
              {/* Address Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 10px 20px -5px rgb(0 0 0 / 0.04)" }}
                className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex gap-4 transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-teal flex items-center justify-center shrink-0 border border-sky-100">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display text-base font-bold text-slate-900">Endereço</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-semibold">{address}</p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-teal hover:text-brand-teal-dark mt-2 group"
                  >
                    Ver no Google Maps
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>

              {/* Contact Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -4, boxShadow: "0 10px 20px -5px rgb(0 0 0 / 0.04)" }}
                className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex gap-4 transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-teal flex items-center justify-center shrink-0 border border-sky-100">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display text-base font-bold text-slate-900">Contatos</h4>
                  <p className="text-sm text-slate-600 font-semibold">Telefone: {phone}</p>
                  <p className="text-sm text-slate-600 font-semibold">WhatsApp: {phone}</p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={`tel:${phone.replace(/\D/g, "")}`}
                      className="text-xs font-bold text-slate-600 hover:text-brand-teal underline"
                    >
                      Ligar agora
                    </a>
                    <span className="text-slate-300">•</span>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-brand-green-accent hover:text-emerald-600 flex items-center gap-1"
                    >
                      Conversar no WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Hours Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -4, boxShadow: "0 10px 20px -5px rgb(0 0 0 / 0.04)" }}
                className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex gap-4 transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-teal flex items-center justify-center shrink-0 border border-sky-100">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-2 w-full">
                  <h4 className="font-display text-base font-bold text-slate-900">Horário de Atendimento</h4>
                  <div className="space-y-1.5 pt-1">
                    {hours.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs sm:text-sm border-b border-slate-100 pb-1.5 last:border-0 last:pb-0">
                        <span className="text-slate-500 font-bold">{item.days}</span>
                        <span className="text-slate-800 font-extrabold">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Map Column with responsive entry */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 h-[350px] lg:h-auto min-h-[350px] relative rounded-3xl overflow-hidden shadow-md border border-slate-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.974864434685!2d-46.643666324669894!3d-23.569352778794828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a68be79d49%3A0x6b4ef8d16eb7ef4d!2sRua%20Top%C3%A1zio%2C%20Aclima%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1719245190000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Consultório - Dra. Thelma Soares"
            />
          </motion.div>

        </div>

        {/* Gallery Section */}
        <div className="mt-20 border-t border-slate-200/60 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Conheça o Nosso Consultório
            </h3>
            <p className="text-slate-500 text-sm sm:text-base mt-2 font-semibold">
              Ambientes preparados com o máximo de conforto, higiene e tecnologia para o seu tratamento de fisioterapia e RPG na Aclimação.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                url: "https://i.imgur.com/tAJBzTY.png",
                title: "Recepção e Espera",
                desc: "Ambiente moderno e acolhedor para receber você e seus acompanhantes com total conforto."
              },
              {
                url: "https://i.imgur.com/aH7P86E.png",
                title: "Espaço de Avaliação",
                desc: "Sala privativa com foco em diagnóstico postural, palpação e testes de movimento."
              },
              {
                url: "https://i.imgur.com/hiXIb39.png",
                title: "Sala de Tratamento",
                desc: "Ambiente climatizado e equipado com recursos fisioterapêuticos e macas ajustáveis."
              },
              {
                url: "https://i.imgur.com/0WbsnU1.png",
                title: "Área de RPG e Cinesioterapia",
                desc: "Estrutura completa para exercícios terapêuticos guiados e realinhamento postural global."
              }
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={img.url}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 text-left">
                  <h4 className="font-display text-sm font-bold text-slate-900 group-hover:text-brand-teal transition-colors">
                    {img.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 font-semibold leading-relaxed">
                    {img.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
