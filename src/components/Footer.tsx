import React from "react";
import { ArrowUp, Instagram, Facebook, Linkedin, MessageSquare, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const address = "Rua Topázio, 342 - Aclimação, São Paulo - SP, 04105-060";
  const phone = "(11) 96040-3390";
  const waLink = "https://wa.me/5511960403390?text=Olá%20Dra.%20Thelma,%20gostaria%20de%20tirar%20uma%20dúvida.";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4 text-left">
            <a href="#" className="flex items-center gap-3 group">
              <img 
                src="https://i.imgur.com/HHPJg5l.jpeg" 
                alt="Logo Dra. Thelma Soares" 
                className="w-14 h-14 rounded-full object-cover shadow-sm border border-slate-800 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-white group-hover:text-brand-teal transition-colors">
                  Dra. Thelma Soares
                </span>
                <span className="text-[10px] uppercase tracking-widest text-brand-medium font-bold mt-0.5">
                  Fisioterapia &amp; Reabilitação
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Tratamento individualizado com foco em reabilitação de coluna, articulações e RPG. Mais de 30 anos de experiência transformando vidas através do movimento consciente.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 text-slate-300 hover:bg-brand-teal hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 text-slate-300 hover:bg-brand-teal hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 text-slate-300 hover:bg-brand-teal hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links Col */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Por Que Escolher
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre Mim
                </a>
              </li>
              <li>
                <a href="#problemas" className="hover:text-white transition-colors">
                  Como Posso Ajudar
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">Contato e Local</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-brand-medium shrink-0 mt-0.5" />
                <span className="leading-relaxed">{address}</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-brand-medium shrink-0" />
                <span>{phone}</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <MessageSquare className="w-4 h-4 text-brand-green-accent shrink-0 fill-brand-green-accent" />
                <a href={waLink} target="_blank" rel="noreferrer" className="hover:text-white underline font-semibold text-slate-300">
                  Agendar pelo WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright info */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-500">
          <p>© {currentYear} Dra. Thelma Soares. Todos os direitos reservados. CREFITO 3.</p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors py-1 px-3.5 rounded-full bg-slate-800/50 hover:bg-slate-800"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
