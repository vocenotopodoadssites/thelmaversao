/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Diferenciais from "./components/Diferenciais";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import ProblemasTratados from "./components/ProblemasTratados";
import Depoimentos from "./components/Depoimentos";
import Localizacao from "./components/Localizacao";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between overflow-x-hidden">
      {/* Header Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Banner Area */}
        <Hero />

        {/* Why Choose Dra. Thelma */}
        <Diferenciais />

        {/* Specialist Services Cards */}
        <Servicos />

        {/* Deep Professional Profile and UNICID credentials */}
        <Sobre />

        {/* Common Symptoms Matrix */}
        <ProblemasTratados />

        {/* Patient Review slider & Google Badges */}
        <Depoimentos />

        {/* Geographic location details and Embedded Maps */}
        <Localizacao />

        {/* Final CTA scheduling trigger */}
        <CallToAction />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Conversion Floating Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
