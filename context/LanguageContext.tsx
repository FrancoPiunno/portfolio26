"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "es" | "en";

export interface Translations {
  navbar: {
    work: string;
    about: string;
    contact: string;
    cta: string;
    modalTitle: string;
    whatsappText: string;
    emailText: string;
  };
  hero: {
    greeting: string;
    description: string;
    headlineLine1: string[];
    headlineLine2: string[];
    cta: string;
    scroll: string;
  };
  philosophy: {
    p1: string;
    p2: string;
    disciplines: {
      dev: string;
      design: string;
      production: string;
      marketing: string;
    };
  };
  services: {
    sectionTag: string;
    servicesTab: string;
    processTab: string;
    servicesList: Array<{
      id: string;
      title: string;
      number?: string;
      descriptionLines: string[];
    }>;
    processList: Array<{
      id: string;
      title: string;
      number: string;
      descriptionLines: string[];
    }>;
  };
  clients: {
    filters: {
      marketing: string;
      diseno: string;
      programacion: string;
      produccion: string;
    };
    viewMore: string;
    exploreProject: string;
    close: string;
  };
  contact: {
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    cta: string;
  };
  footer: {
    badgeLine1: string;
    badgeLine2: string;
    badgeLine3: string;
    rights: string;
  };
  modal: {
    title: string;
    subtitle: string;
    whatsappSubtitle: string;
    emailSubtitle: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    navbar: {
      work: "Trabajo",
      about: "Sobre mi",
      contact: "Contacto",
      cta: "Trabajemos juntos",
      modalTitle: "Hablemos de tu proyecto",
      whatsappText: "WhatsApp",
      emailText: "Email",
    },
    hero: {
      greeting: "Hola soy Franco Piunno.",
      description:
        "Elimino la fricción de coordinar programadores, diseñadores, editores y marketers centralizando todo el ciclo: código, diseño, video y adquisición bajo una sola visión estratégica.",
      headlineLine1: ["Arquitecto", "digital"],
      headlineLine2: ["a", "tus", "servicios"],
      cta: "Trabajemos juntos",
      scroll: "Scrollea para ver más",
    },
    philosophy: {
      p1: "No creo en departamentos aislados, ni en que tu proyecto pase por cinco agencias distintas perdiendo un poco de sentido en cada traspaso. Creo en una sola persona, con una sola visión, responsable de cómo se ve, cómo funciona y cómo vende tu producto de principio a fin.",
      p2: "Esa es la idea detrás de Arquitecto Digital: programación, diseño, producción y marketing no como 4 servicios sueltos, sino como una sola decisión tomada en cada etapa del mismo proyecto.",
      disciplines: {
        dev: "Programación",
        design: "Diseño",
        production: "Producción",
        marketing: "Marketing",
      },
    },
    services: {
      sectionTag: "Qué hago y cómo trabajo",
      servicesTab: "Servicios",
      processTab: "Cómo trabajo",
      servicesList: [
        {
          id: "marketing",
          title: "Marketing",
          descriptionLines: [
            "Estrategia de crecimiento y optimización de conversión basada en datos, no en intuición.",
            "Se audita lo que ya existe, se identifican los puntos donde se pierden clientes, y se ajusta con acceso directo a lo construido.",
          ],
        },
        {
          id: "diseno",
          title: "Diseño",
          descriptionLines: [
            "Interfaces y sistemas visuales diseñados para vender, no solo para verse prolijos.",
            "Cada decisión de UI se toma sabiendo cómo se va a construir en código y qué tiene que provocar en quien la usa.",
          ],
        },
        {
          id: "produccion",
          title: "Producción",
          descriptionLines: [
            "Video y contenido audiovisual con un objetivo de negocio detrás de cada corte.",
            "Piezas de producto, campañas o contenido de conversión, sosteniendo el mismo mensaje que ya está construido en la marca.",
          ],
        },
        {
          id: "programacion",
          title: "Programación",
          descriptionLines: [
            "Software y plataformas construidas para funcionar, no solo para lucir bien en una demo.",
            "Arquitectura pensada para escalar, código legible por cualquier equipo futuro, e interfaz ya integrada al sistema de diseño de marca.",
          ],
        },
      ],
      processList: [
        {
          id: "estrategia",
          title: "Estrategia",
          number: "01",
          descriptionLines: [
            "Diagnóstico del punto de partida y definición del objetivo medible del proyecto, sea cual sea el servicio contratado.",
            "Alcance, plazo y precio quedan cerrados por escrito antes de empezar a trabajar.",
          ],
        },
        {
          id: "direccion",
          title: "Dirección",
          number: "02",
          descriptionLines: [
            "Se define el plan de trabajo y las decisiones clave para resolver el objetivo — y si el proyecto combina más de una disciplina, cómo se coordinan entre sí para sostener un mismo criterio.",
            "Nada se ejecuta sin que antes quede claro qué tiene que lograr.",
          ],
        },
        {
          id: "ejecucion",
          title: "Ejecución",
          number: "03",
          descriptionLines: [
            "Desarrollo directo sobre el proyecto. Comunicación constante sin intermediarios para iterar rápido y sin ruido.",
            "Cada avance se valida contra el objetivo fijado al inicio.",
          ],
        },
        {
          id: "optimizacion",
          title: "Optimización",
          number: "04",
          descriptionLines: [
            "Una vez entregado y puesto en marcha, se miden resultados reales y se ajusta según datos, no supuestos.",
            "El trabajo no termina en la entrega: termina cuando funciona.",
          ],
        },
      ],
    },
    clients: {
      filters: {
        marketing: "Marketing",
        diseno: "Diseño",
        programacion: "Programación",
        produccion: "Producción",
      },
      viewMore: "Ver más",
      exploreProject: "Explorar proyecto",
      close: "Cerrar",
    },
    contact: {
      headlineLine1: "¿Tenés un proyecto",
      headlineLine2: "en mente?",
      description:
        "Trabajemos juntos para transformar tu idea en una experiencia digital sólida, estética y orientada a resultados reales.",
      cta: "Trabajemos juntos",
    },
    footer: {
      badgeLine1: "Argentino",
      badgeLine2: "Trabajando para",
      badgeLine3: "El mundo",
      rights: "Franco Piunno, Todos los derechos reservados.",
    },
    modal: {
      title: "Hablemos de tu proyecto",
      subtitle: "Elegí el medio que te sea más cómodo para ponernos en contacto.",
      whatsappSubtitle: "Respuesta inmediata para consultas ágiles.",
      emailSubtitle: "Para briefs detallados o propuestas formales.",
    },
  },
  en: {
    navbar: {
      work: "Work",
      about: "About me",
      contact: "Contact",
      cta: "Let's work together",
      modalTitle: "Let's talk about your project",
      whatsappText: "WhatsApp",
      emailText: "Email",
    },
    hero: {
      greeting: "Hi, I'm Franco Piunno.",
      description:
        "I eliminate the friction of coordinating developers, designers, editors, and marketers by centralizing the entire cycle: code, design, video, and acquisition under a single strategic vision.",
      headlineLine1: ["Digital", "architect"],
      headlineLine2: ["at", "your", "service"],
      cta: "Let's work together",
      scroll: "Scroll to explore",
    },
    philosophy: {
      p1: "I don't believe in siloed departments, nor in your project passing through five different agencies losing essence with every handoff. I believe in one person, with one vision, responsible for how your product looks, works, and sells from start to finish.",
      p2: "That is the idea behind Digital Architect: development, design, production, and marketing not as 4 loose services, but as a single decision made at every stage of the same project.",
      disciplines: {
        dev: "Development",
        design: "Design",
        production: "Production",
        marketing: "Marketing",
      },
    },
    services: {
      sectionTag: "What I do and how I work",
      servicesTab: "Services",
      processTab: "How I work",
      servicesList: [
        {
          id: "marketing",
          title: "Marketing",
          descriptionLines: [
            "Growth strategy and conversion rate optimization based on data, never guesswork.",
            "Existing assets are audited, customer friction points are pinpointed, and adjustments are implemented directly in the code.",
          ],
        },
        {
          id: "diseno",
          title: "Design",
          descriptionLines: [
            "Interfaces and design systems built to convert, not just to look pretty.",
            "Every UI choice is made knowing exactly how it will be built in code and how it drives user engagement.",
          ],
        },
        {
          id: "produccion",
          title: "Production",
          descriptionLines: [
            "High-impact video and media with a clear business purpose behind every frame.",
            "Product features, ad campaigns, or conversion creatives aligned seamlessly with the brand narrative.",
          ],
        },
        {
          id: "programacion",
          title: "Development",
          descriptionLines: [
            "Software and web experiences engineered to perform, not just to look good in demos.",
            "Scalable architecture, clean maintainable code for future teams, and full integration with the brand design system.",
          ],
        },
      ],
      processList: [
        {
          id: "estrategia",
          title: "Strategy",
          number: "01",
          descriptionLines: [
            "Initial diagnostic and clear measurable objectives defined before starting, regardless of the required services.",
            "Scope, deadlines, and pricing are locked down in writing before any work begins.",
          ],
        },
        {
          id: "direccion",
          title: "Direction",
          number: "02",
          descriptionLines: [
            "The roadmap and key technical decisions are mapped out — synchronizing multiple disciplines seamlessly under one coherent vision.",
            "Nothing is executed without a crystal-clear understanding of the target outcome.",
          ],
        },
        {
          id: "ejecucion",
          title: "Execution",
          number: "03",
          descriptionLines: [
            "Direct hands-on development. Continuous communication without middle layers to iterate rapidly and without friction.",
            "Every deliverable is measured directly against the goals set on day one.",
          ],
        },
        {
          id: "optimizacion",
          title: "Optimization",
          number: "04",
          descriptionLines: [
            "Post-launch data monitoring and fine-tuning based on real metrics and user behavior.",
            "The job doesn't end at delivery: it ends when it proves results.",
          ],
        },
      ],
    },
    clients: {
      filters: {
        marketing: "Marketing",
        diseno: "Design",
        programacion: "Development",
        produccion: "Production",
      },
      viewMore: "View more",
      exploreProject: "Explore project",
      close: "Close",
    },
    contact: {
      headlineLine1: "Got a project",
      headlineLine2: "in mind?",
      description:
        "Let's work together to turn your vision into a robust, visually striking digital experience engineered for real results.",
      cta: "Let's work together",
    },
    footer: {
      badgeLine1: "Argentine",
      badgeLine2: "Working for",
      badgeLine3: "The world",
      rights: "Franco Piunno, All rights reserved.",
    },
    modal: {
      title: "Let's talk about your project",
      subtitle: "Choose the communication channel that works best for you.",
      whatsappSubtitle: "Instant response for quick inquiries.",
      emailSubtitle: "For detailed briefs or formal project proposals.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("portfolio_lang") as Language | null;
      if (savedLang === "es" || savedLang === "en") {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
      }
    } catch {
      // Ignorar si localStorage no está disponible
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("portfolio_lang", lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignorar si localStorage no está disponible
    }
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
