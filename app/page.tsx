import { IntroLoader } from "@/components/IntroLoader";
import { Navbar } from "@/components/Navbar";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Hero } from "@/components/Hero";
import { ClientsSection } from "@/components/ClientsSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent">
      {/* Modal global de contacto (WhatsApp / Email) */}
      <ContactModal />

      {/* Animación inicial de entrada / Intro Loader */}
      <IntroLoader />

      {/* 1. Fondo único animado que transiciona de Blanco a Negro al scrollear */}
      <AnimatedBackground />

      {/* Header / Navbar */}
      <Navbar />

      {/* Contenido sobre el fondo animado */}
      <div className="relative z-10">
        {/* Hero (Fase blanca con texto oscuro) */}
        <Hero />

        {/* Trabajos / Selección de Clientes (Fase blanca con texto oscuro) */}
        <ClientsSection />

        {/* Filosofía (Inicio de la fase oscura y transición de fondo) */}
        <PhilosophySection />

        {/* Servicios y Cómo Trabajo (Fase oscura) */}
        <ServicesSection />

        {/* Contacto (Fase oscura) */}
        <ContactSection />

        {/* Footer (Fase oscura) */}
        <Footer />
      </div>
    </main>
  );
}
