"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

interface FloatingImage {
  src: string;
  alt: string;
  widthClass: string;
  heightClass: string;
  positionClass: string;
  rotation: string;
  zIndex: number;
}

interface GalleryImage {
  src: string;
  alt: string;
  heightClass: string;
}

interface ClientData {
  id: string;
  name: string;
  category: string;
  tags: string[];
  description: string;
  images: FloatingImage[];
  galleryImages: GalleryImage[];
}

export const clientsData: ClientData[] = [
  {
    id: "kalena",
    name: "Kalena",
    category: "Agroindustria, Branding & Packaging",
    tags: ["Branding", "Packaging", "Identidad Visual", "Dirección de Arte", "Estrategia"],
    description:
      "Diseño integral de identidad de marca, packaging y sistema visual para Kalena Yerba Mate. Rediseño de envases tradicionales y despalada con terminación rústica y tipografía editorial de autor, destacando el valor del secado barbacuá y la trazabilidad agroecológica en un mercado altamente competitivo.",
    images: [
      {
        src: "/images/kalena.jpg",
        alt: "Kalena packaging y diseño",
        widthClass: "w-[300px] sm:w-[360px] lg:w-[420px]",
        heightClass: "h-[220px] sm:h-[270px] lg:h-[310px]",
        positionClass: "top-4 right-6 sm:right-12",
        rotation: "rotate-[3deg]",
        zIndex: 2,
      },
      {
        src: "/images/sany.jpg",
        alt: "Kalena proceso productivo",
        widthClass: "w-[220px] sm:w-[270px] lg:w-[310px]",
        heightClass: "h-[160px] sm:h-[200px] lg:h-[230px]",
        positionClass: "bottom-6 left-4 sm:left-10",
        rotation: "-rotate-[3deg]",
        zIndex: 3,
      },
      {
        src: "/images/tripleimpacto.jpg",
        alt: "Kalena experiencia digital",
        widthClass: "w-[170px] sm:w-[210px] lg:w-[250px]",
        heightClass: "h-[130px] sm:h-[160px] lg:h-[190px]",
        positionClass: "bottom-16 right-4 sm:right-8",
        rotation: "rotate-[5deg]",
        zIndex: 1,
      },
    ],
    galleryImages: [
      { src: "/images/kalena.jpg", alt: "Kalena foto 1", heightClass: "h-[280px] sm:h-[320px]" },
      { src: "/images/sany.jpg", alt: "Kalena foto 2", heightClass: "h-[180px] sm:h-[210px]" },
      { src: "/images/tripleimpacto.jpg", alt: "Kalena foto 3", heightClass: "h-[220px] sm:h-[250px]" },
      { src: "/images/lunapark.jpg", alt: "Kalena foto 4", heightClass: "h-[190px] sm:h-[220px]" },
      { src: "/images/redburger.jpg", alt: "Kalena foto 5", heightClass: "h-[260px] sm:h-[300px]" },
    ],
  },
  {
    id: "svora",
    name: "Svora",
    category: "Joyería de Lujo & Dirección de Arte",
    tags: ["Joyería de Autor", "Dirección Creativa", "Branding de Lujo", "Editorial", "Packaging"],
    description:
      "Dirección de arte, fotografía editorial e identidad visual para Svora Joyería Contemporánea. Creación de un universo estético sobrio y monocromático que realza la materialidad escultórica de las piezas, cajas de presentación premium con acabados mate y contenido publicitario de alta costura para canales digitales.",
    images: [
      {
        src: "/works/svora/1.webp",
        alt: "Svora identidad visual",
        widthClass: "w-[320px] sm:w-[380px] lg:w-[440px]",
        heightClass: "h-[230px] sm:h-[280px] lg:h-[320px]",
        positionClass: "top-2 right-4 sm:right-10",
        rotation: "-rotate-[2deg]",
        zIndex: 2,
      },
      {
        src: "/works/svora/1ab719252551253.6a5248b1e01ff.webp",
        alt: "Svora branding y piezas",
        widthClass: "w-[220px] sm:w-[270px] lg:w-[310px]",
        heightClass: "h-[160px] sm:h-[200px] lg:h-[230px]",
        positionClass: "bottom-8 left-6 sm:left-12",
        rotation: "rotate-[4deg]",
        zIndex: 3,
      },
      {
        src: "/works/svora/547856252551253.6a5248b1decd1.webp",
        alt: "Svora diseño contemporáneo",
        widthClass: "w-[170px] sm:w-[210px] lg:w-[250px]",
        heightClass: "h-[130px] sm:h-[160px] lg:h-[190px]",
        positionClass: "bottom-14 right-4 sm:right-8",
        rotation: "rotate-[6deg]",
        zIndex: 1,
      },
    ],
    galleryImages: [
      { src: "/works/svora/1.webp", alt: "Svora foto 1", heightClass: "h-[300px] sm:h-[340px]" },
      { src: "/works/svora/1ab719252551253.6a5248b1e01ff.webp", alt: "Svora foto 2", heightClass: "h-[220px] sm:h-[250px]" },
      { src: "/works/svora/39a986252551253.6a5248b1e1b4e.webp", alt: "Svora foto 3", heightClass: "h-[280px] sm:h-[320px]" },
      { src: "/works/svora/547856252551253.6a5248b1decd1.webp", alt: "Svora foto 4", heightClass: "h-[200px] sm:h-[230px]" },
      { src: "/works/svora/5847fa252551253.6a5248b1e2535.webp", alt: "Svora foto 5", heightClass: "h-[260px] sm:h-[290px]" },
      { src: "/works/svora/718c8f252551253.6a5248b1dcd7c.webp", alt: "Svora foto 6", heightClass: "h-[230px] sm:h-[260px]" },
      { src: "/works/svora/7b51bd252551253.6a5248b1dbc2f.webp", alt: "Svora foto 7", heightClass: "h-[310px] sm:h-[350px]" },
      { src: "/works/svora/880e86252551253.6a5248b1df12c.webp", alt: "Svora foto 8", heightClass: "h-[240px] sm:h-[270px]" },
      { src: "/works/svora/8f8974252551253.6a5248b1e107b.webp", alt: "Svora foto 9", heightClass: "h-[290px] sm:h-[330px]" },
      { src: "/works/svora/900f10252551253.6a5248b1e359e.webp", alt: "Svora foto 10", heightClass: "h-[210px] sm:h-[240px]" },
      { src: "/works/svora/9c39d8252551253.6a5248b1dc0a6.webp", alt: "Svora foto 11", heightClass: "h-[250px] sm:h-[280px]" },
      { src: "/works/svora/a6974e252551253.6a5248b1dc972.webp", alt: "Svora foto 12", heightClass: "h-[220px] sm:h-[250px]" },
      { src: "/works/svora/a90c74252551253.6a5248b1e06f0.webp", alt: "Svora foto 13", heightClass: "h-[270px] sm:h-[300px]" },
      { src: "/works/svora/b3d73a252551253.6a5248b1de4c1.webp", alt: "Svora foto 14", heightClass: "h-[200px] sm:h-[230px]" },
      { src: "/works/svora/bd7801252551253.6a5248b1e0b1e.webp", alt: "Svora foto 15", heightClass: "h-[260px] sm:h-[290px]" },
      { src: "/works/svora/c6c890252551253.6a5248b1e15c0.webp", alt: "Svora foto 16", heightClass: "h-[280px] sm:h-[310px]" },
      { src: "/works/svora/d3f46d252551253.6a5248b1dd178.webp", alt: "Svora foto 17", heightClass: "h-[240px] sm:h-[270px]" },
      { src: "/works/svora/d67f23252551253.6a5248b1e29ec.webp", alt: "Svora foto 18", heightClass: "h-[220px] sm:h-[250px]" },
      { src: "/works/svora/e0110a252551253.6a5248b1dc4cb.webp", alt: "Svora foto 19", heightClass: "h-[300px] sm:h-[340px]" },
      { src: "/works/svora/efa79d252551253.6a5248b1db7c7.webp", alt: "Svora foto 20", heightClass: "h-[210px] sm:h-[240px]" },
    ],
  },
  {
    id: "circleside",
    name: "Circleside",
    category: "Streetwear & Diseño de Indumentaria",
    tags: ["Moda Urbana", "Gráfica Textil", "Dirección de Arte", "Lookbook Digital", "Branding"],
    description:
      "Desarrollo de identidad visual, gráfica aplicada a prendas y dirección creativa para la marca de indumentaria Circleside. Concepto streetwear vanguardista con tipografía deconstructiva, lookbooks urbanos de alto contraste y diseño de etiquetas, bolsas y complementos para colecciones de edición limitada.",
    images: [
      {
        src: "/works/CircleSide/1.webp",
        alt: "Circleside plataforma digital",
        widthClass: "w-[310px] sm:w-[370px] lg:w-[430px]",
        heightClass: "h-[230px] sm:h-[280px] lg:h-[320px]",
        positionClass: "top-4 right-8 sm:right-16",
        rotation: "-rotate-[3deg]",
        zIndex: 2,
      },
      {
        src: "/works/CircleSide/d5ab2f226704611.68336bb323009.webp",
        alt: "Circleside diseño de interfaz",
        widthClass: "w-[220px] sm:w-[270px] lg:w-[310px]",
        heightClass: "h-[160px] sm:h-[200px] lg:h-[230px]",
        positionClass: "bottom-6 left-4 sm:left-10",
        rotation: "rotate-[3deg]",
        zIndex: 3,
      },
      {
        src: "/works/CircleSide/c642eb226704611.683374f90c517.webp",
        alt: "Circleside branding",
        widthClass: "w-[170px] sm:w-[210px] lg:w-[250px]",
        heightClass: "h-[130px] sm:h-[160px] lg:h-[190px]",
        positionClass: "bottom-16 right-4 sm:right-8",
        rotation: "rotate-[5deg]",
        zIndex: 1,
      },
    ],
    galleryImages: [
      { src: "/works/CircleSide/1.webp", alt: "Circleside foto 1", heightClass: "h-[300px] sm:h-[340px]" },
      { src: "/works/CircleSide/1374d7226704611.683388375ddf3.webp", alt: "Circleside foto 2", heightClass: "h-[220px] sm:h-[250px]" },
      { src: "/works/CircleSide/1e67bf226704611.683e23ce76441.webp", alt: "Circleside foto 3", heightClass: "h-[280px] sm:h-[320px]" },
      { src: "/works/CircleSide/36427b226704611.68338f61ba51f.webp", alt: "Circleside foto 4", heightClass: "h-[200px] sm:h-[230px]" },
      { src: "/works/CircleSide/472d87226704611.683376e824387.webp", alt: "Circleside foto 5", heightClass: "h-[260px] sm:h-[290px]" },
      { src: "/works/CircleSide/55cf50226704611.683e23ce75d5e.webp", alt: "Circleside foto 6", heightClass: "h-[230px] sm:h-[260px]" },
      { src: "/works/CircleSide/5b8d06226704611.68338ec818dac.webp", alt: "Circleside foto 7", heightClass: "h-[310px] sm:h-[350px]" },
      { src: "/works/CircleSide/5e3f99226704611.6833828fcd530.webp", alt: "Circleside foto 8", heightClass: "h-[240px] sm:h-[270px]" },
      { src: "/works/CircleSide/6403d7226704611.68336bb4332c8.webp", alt: "Circleside foto 9", heightClass: "h-[290px] sm:h-[330px]" },
      { src: "/works/CircleSide/64ec7a226704611.6833de81c0a3f.webp", alt: "Circleside foto 10", heightClass: "h-[210px] sm:h-[240px]" },
      { src: "/works/CircleSide/6678c7226704611.683e23cddbdca.webp", alt: "Circleside foto 11", heightClass: "h-[250px] sm:h-[280px]" },
      { src: "/works/CircleSide/712d32226704611.68336446341bf.webp", alt: "Circleside foto 12", heightClass: "h-[220px] sm:h-[250px]" },
      { src: "/works/CircleSide/72d2dc226704611.68336f5b01258.webp", alt: "Circleside foto 13", heightClass: "h-[270px] sm:h-[300px]" },
      { src: "/works/CircleSide/96ebc3226704611.68336f5b01ad9.webp", alt: "Circleside foto 14", heightClass: "h-[300px] sm:h-[340px]" },
      { src: "/works/CircleSide/af7b45226704611.68336bb434118.webp", alt: "Circleside foto 15", heightClass: "h-[220px] sm:h-[250px]" },
      { src: "/works/CircleSide/c642eb226704611.683374f90c517.webp", alt: "Circleside foto 16", heightClass: "h-[280px] sm:h-[320px]" },
      { src: "/works/CircleSide/d5ab2f226704611.68336bb323009.webp", alt: "Circleside foto 17", heightClass: "h-[200px] sm:h-[230px]" },
      { src: "/works/CircleSide/df820e226704611.68336bb4348bc.webp", alt: "Circleside foto 18", heightClass: "h-[260px] sm:h-[290px]" },
      { src: "/works/CircleSide/e8ba49226704611.683e23cddb6c0.webp", alt: "Circleside foto 19", heightClass: "h-[230px] sm:h-[260px]" },
      { src: "/works/CircleSide/eb4785226704611.683376e824d8e.webp", alt: "Circleside foto 20", heightClass: "h-[310px] sm:h-[350px]" },
    ],
  },
  {
    id: "skoopy",
    name: "Skoopy",
    category: "Heladería Artesanal & Branding Gastronómico",
    tags: ["Packaging Gastronómico", "Identidad Visual", "Retail", "Dirección Creativa", "Social Media"],
    description:
      "Identidad visual, packaging y universo de marca para Skoopy Helados. Diseño de packaging para potes de helado artesanal, paletas cromáticas alegres, iconografía distintiva y aplicaciones retail que conectan con un público joven a través de una experiencia fresca, dulce y memorable.",
    images: [
      {
        src: "/works/Skoopy/1.webp",
        alt: "Skoopy packaging e identidad",
        widthClass: "w-[310px] sm:w-[370px] lg:w-[430px]",
        heightClass: "h-[230px] sm:h-[280px] lg:h-[320px]",
        positionClass: "top-4 right-8 sm:right-16",
        rotation: "-rotate-[3deg]",
        zIndex: 2,
      },
      {
        src: "/works/Skoopy/b62e8b238694279.691a3b2e1b828.webp",
        alt: "Skoopy dirección de arte",
        widthClass: "w-[220px] sm:w-[270px] lg:w-[310px]",
        heightClass: "h-[160px] sm:h-[200px] lg:h-[230px]",
        positionClass: "bottom-6 left-4 sm:left-10",
        rotation: "rotate-[3deg]",
        zIndex: 3,
      },
      {
        src: "/works/Skoopy/1b8df4238694279.691a43c5bb8aa.webp",
        alt: "Skoopy campaña digital",
        widthClass: "w-[170px] sm:w-[210px] lg:w-[250px]",
        heightClass: "h-[130px] sm:h-[160px] lg:h-[190px]",
        positionClass: "bottom-16 right-4 sm:right-8",
        rotation: "rotate-[5deg]",
        zIndex: 1,
      },
    ],
    galleryImages: [
      { src: "/works/Skoopy/1.webp", alt: "Skoopy foto 1", heightClass: "h-[300px] sm:h-[340px]" },
      { src: "/works/Skoopy/1b8df4238694279.691a43c5bb8aa.webp", alt: "Skoopy foto 2", heightClass: "h-[220px] sm:h-[250px]" },
      { src: "/works/Skoopy/5eafeb238694279.691a8a387662e.webp", alt: "Skoopy foto 3", heightClass: "h-[280px] sm:h-[320px]" },
      { src: "/works/Skoopy/712550238694279.691b303354825.webp", alt: "Skoopy foto 4", heightClass: "h-[200px] sm:h-[230px]" },
      { src: "/works/Skoopy/7c2a5a238694279.691a3b2ec36b0.webp", alt: "Skoopy foto 5", heightClass: "h-[260px] sm:h-[290px]" },
      { src: "/works/Skoopy/8aba35238694279.691a4b1c979b5.webp", alt: "Skoopy foto 6", heightClass: "h-[230px] sm:h-[260px]" },
      { src: "/works/Skoopy/92b05c238694279.691a9c213ad98.webp", alt: "Skoopy foto 7", heightClass: "h-[310px] sm:h-[350px]" },
      { src: "/works/Skoopy/a0d97c238694279.691a5110c16bb.webp", alt: "Skoopy foto 8", heightClass: "h-[240px] sm:h-[270px]" },
      { src: "/works/Skoopy/a30a30238694279.691b3689549e1.webp", alt: "Skoopy foto 9", heightClass: "h-[290px] sm:h-[330px]" },
      { src: "/works/Skoopy/af3439238694279.691a9b8a91ece.webp", alt: "Skoopy foto 10", heightClass: "h-[210px] sm:h-[240px]" },
      { src: "/works/Skoopy/b62e8b238694279.691a3b2e1b828.webp", alt: "Skoopy foto 11", heightClass: "h-[250px] sm:h-[280px]" },
      { src: "/works/Skoopy/e6df23238694279.691a3b2ec2f47.webp", alt: "Skoopy foto 12", heightClass: "h-[220px] sm:h-[250px]" },
    ],
  },
  {
    id: "black-pepper",
    name: "Black Pepper",
    category: "Gastronomía Gourmet & Campañas de Adquisición",
    tags: ["Gastronomía", "Publicidad Digital", "Fotografía Comercial", "Packaging", "Redes Sociales"],
    description:
      "Estrategia creativa, fotografía comercial de producto e identidad de marca para Black Pepper Gourmet Burgers. Campañas publicitarias enfocadas en apetitosidad extrema, packaging para delivery térmico, piezas promocionales animadas y contenido de alto impacto orientado a conversión directa.",
    images: [
      {
        src: "/works/BlackPepper/1.webp",
        alt: "Black Pepper identidad visual",
        widthClass: "w-[320px] sm:w-[380px] lg:w-[440px]",
        heightClass: "h-[240px] sm:h-[290px] lg:h-[330px]",
        positionClass: "top-2 right-6 sm:right-12",
        rotation: "rotate-[2deg]",
        zIndex: 2,
      },
      {
        src: "/works/BlackPepper/5a4727252398061.6a4e6fdb5546c.webp",
        alt: "Black Pepper producción comercial",
        widthClass: "w-[210px] sm:w-[260px] lg:w-[300px]",
        heightClass: "h-[160px] sm:h-[190px] lg:h-[220px]",
        positionClass: "bottom-8 left-6 sm:left-12",
        rotation: "-rotate-[4deg]",
        zIndex: 3,
      },
      {
        src: "/works/BlackPepper/85e128252398061.6a4e6fdb58fe8.webp",
        alt: "Black Pepper campaña digital",
        widthClass: "w-[170px] sm:w-[210px] lg:w-[240px]",
        heightClass: "h-[130px] sm:h-[150px] lg:h-[180px]",
        positionClass: "bottom-12 right-6",
        rotation: "rotate-[6deg]",
        zIndex: 1,
      },
    ],
    galleryImages: [
      { src: "/works/BlackPepper/1.webp", alt: "Black Pepper foto 1", heightClass: "h-[300px] sm:h-[340px]" },
      { src: "/works/BlackPepper/5a4727252398061.6a4e6fdb5546c.webp", alt: "Black Pepper foto 2", heightClass: "h-[220px] sm:h-[250px]" },
      { src: "/works/BlackPepper/7eddd1252398061.6a4e6fdb57231.webp", alt: "Black Pepper foto 3", heightClass: "h-[280px] sm:h-[320px]" },
      { src: "/works/BlackPepper/9e8878252398061.6a4e6fdb5793a.webp", alt: "Black Pepper foto 4", heightClass: "h-[200px] sm:h-[230px]" },
      { src: "/works/BlackPepper/85e128252398061.6a4e6fdb58fe8.webp", alt: "Black Pepper foto 5", heightClass: "h-[260px] sm:h-[290px]" },
      { src: "/works/BlackPepper/f5b3bb252398061.6a4e6fdb59787.webp", alt: "Black Pepper foto 6", heightClass: "h-[240px] sm:h-[270px]" },
      { src: "/works/BlackPepper/e74641252398061.6a4e6fdb54aa5.webp", alt: "Black Pepper foto 7", heightClass: "h-[280px] sm:h-[320px]" },
    ],
  },
];

export function ClientsSection() {
  const [selectedClientId, setSelectedClientId] = useState<string>("kalena");
  const [mobileOpenClientId, setMobileOpenClientId] = useState<string>("kalena");
  const [mobileAccordionIndices, setMobileAccordionIndices] = useState<Record<string, number>>({});
  const [modalClient, setModalClient] = useState<ClientData | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [mobileModalImageIndex, setMobileModalImageIndex] = useState<number>(0);
  const [isMobileListOpen, setIsMobileListOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 1. Bloquear scroll de fondo (incluyendo Lenis) cuando el dialog está abierto
  useEffect(() => {
    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    if (modalClient) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (lenis && typeof lenis.stop === "function") {
        lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (lenis && typeof lenis.start === "function") {
        lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (lenis && typeof lenis.start === "function") {
        lenis.start();
      }
    };
  }, [modalClient]);

  const activeClient =
    clientsData.find((c) => c.id === selectedClientId) || clientsData[0];

  const handleOpenModal = (client: ClientData) => {
    setSelectedClientId(client.id);
    setMobileOpenClientId(client.id);
    setExpandedIndex(null);
    setMobileModalImageIndex(0);
    setIsMobileListOpen(false);
    setModalClient(client);
  };

  const handleCloseModal = () => {
    setExpandedIndex(null);
    setMobileModalImageIndex(0);
    setIsMobileListOpen(false);
    setModalClient(null);
  };

  const handleClientClick = (client: ClientData) => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      handleOpenModal(client);
    } else {
      setMobileOpenClientId((prev) => (prev === client.id ? "" : client.id));
      setSelectedClientId(client.id);
    }
  };

  const handleMobilePrevModalImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (modalClient) {
      const total = Math.min(modalClient.galleryImages.length, 5);
      setMobileModalImageIndex((prev) => (prev - 1 + total) % total);
    }
  };

  const handleMobileNextModalImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (modalClient) {
      const total = Math.min(modalClient.galleryImages.length, 5);
      setMobileModalImageIndex((prev) => (prev + 1) % total);
    }
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (modalClient && expandedIndex !== null) {
      const total = modalClient.galleryImages.length;
      setExpandedIndex((prev) => (prev !== null ? (prev - 1 + total) % total : 0));
    }
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (modalClient && expandedIndex !== null) {
      const total = modalClient.galleryImages.length;
      setExpandedIndex((prev) => (prev !== null ? (prev + 1) % total : 0));
    }
  };

  // Navegación con teclado (Flecha izquierda, derecha y Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isMobileListOpen) {
        if (e.key === "Escape") setIsMobileListOpen(false);
      } else if (expandedIndex !== null) {
        if (e.key === "ArrowLeft") handlePrevImage();
        if (e.key === "ArrowRight") handleNextImage();
        if (e.key === "Escape") setExpandedIndex(null);
      } else if (modalClient) {
        if (e.key === "Escape") handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [expandedIndex, modalClient, isMobileListOpen]);

  const activeExpandedImage =
    modalClient && expandedIndex !== null
      ? modalClient.galleryImages[expandedIndex]
      : null;

  return (
    <section
      id="trabajo"
      className="relative min-h-[100dvh] w-full bg-transparent text-[#101010] flex flex-col justify-center py-14 sm:py-18 lg:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto w-full relative z-10">

        {/* Subtitle */}
        <h2 className="text-[clamp(1.75rem,2.4vw,2.2rem)] text-[#101010] font-normal tracking-tight mb-10 sm:mb-14 lg:mb-16 select-none">
          Selección de clientes
        </h2>

        {/* 2-Column Grid: Left List (with Mobile FAQ Dropdowns) + Right Floating Images Canvas (Desktop Only) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">

          {/* Left Column: Interactive Client Names + Mobile FAQ Dropdown (1 imagen limpia) */}
          <div className="lg:col-span-6 flex flex-col space-y-3 sm:space-y-4 lg:space-y-4 z-20">
            {clientsData.map((client) => {
              const isDesktopSelected = client.id === activeClient.id;
              const isMobileSelected = client.id === mobileOpenClientId;

              return (
                <div key={client.id} className="flex flex-col w-full">
                  {/* Fila del Título: Nombre a la izquierda + 'Ver más' alineado exactamente con la base del nombre */}
                  <div className="flex items-baseline justify-between w-full">
                    <button
                      type="button"
                      onClick={() => handleClientClick(client)}
                      onMouseEnter={() => setSelectedClientId(client.id)}
                      aria-label={`Ver proyecto de ${client.name}`}
                      className="text-left group cursor-pointer py-0.5 transition-all duration-150"
                    >
                      <span
                        className={`block text-[clamp(3.4rem,6.8vw,5.8rem)] tracking-[-0.04em] leading-[0.98] select-none transition-all duration-150 ${
                          isMobileSelected
                            ? "font-bold text-[#101010]"
                            : "font-extralight text-[#101010]/35"
                        } ${
                          isDesktopSelected
                            ? "lg:font-bold lg:text-[#101010]"
                            : "lg:font-extralight lg:text-[#101010]/35 lg:hover:text-[#101010]/70"
                        }`}
                      >
                        {client.name}
                      </span>
                    </button>

                    {/* Botón 'Ver más' + Flecha alineado en la base del texto sin animación de hover */}
                    {isMobileSelected && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenModal(client);
                        }}
                        className="lg:hidden shrink-0 inline-flex items-center gap-1 text-[clamp(1.15rem,3.8vw,1.45rem)] font-medium text-[#101010] cursor-pointer select-none pb-1 sm:pb-2"
                      >
                        <span>Ver más</span>
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2] text-[#101010]" />
                      </button>
                    )}
                  </div>

                  {/* Mobile-Only Accordion Dropdown (1 sola imagen recta, deslizable para navegar fotos) */}
                  <div className="lg:hidden overflow-hidden">
                    <AnimatePresence initial={false}>
                      {isMobileSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 12, marginBottom: 18 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
                          transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                          className="w-full"
                        >
                          {(() => {
                            const total = client.galleryImages.length || 1;
                            const currentIdx = (mobileAccordionIndices[client.id] || 0) % total;
                            const currentImg = client.galleryImages[currentIdx] || client.images[0];

                            return (
                              <div className="relative w-full h-[240px] sm:h-[300px] bg-neutral-900 rounded-none border-0 ring-0 outline-none shadow-none overflow-hidden cursor-pointer rotate-0 select-none touch-pan-y">
                                <AnimatePresence mode="wait">
                                  <motion.div
                                    key={`acc-img-${client.id}-${currentIdx}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.18 }}
                                    onPanEnd={(e, info) => {
                                      if (info.offset.x < -30) {
                                        // Deslizar a la izquierda -> Siguiente imagen
                                        setMobileAccordionIndices((prev) => ({
                                          ...prev,
                                          [client.id]: ((prev[client.id] || 0) + 1) % total,
                                        }));
                                      } else if (info.offset.x > 30) {
                                        // Deslizar a la derecha -> Imagen anterior
                                        setMobileAccordionIndices((prev) => ({
                                          ...prev,
                                          [client.id]: ((prev[client.id] || 0) - 1 + total) % total,
                                        }));
                                      }
                                    }}
                                    onClick={() => handleOpenModal(client)}
                                    className="relative w-full h-full"
                                  >
                                    <Image
                                      src={currentImg.src}
                                      alt={currentImg.alt || client.name}
                                      fill
                                      sizes="100vw"
                                      className="object-cover rounded-none border-0 ring-0 outline-none shadow-none rotate-0 select-none"
                                      priority
                                    />

                                    {/* Indicador de posición al deslizar (ej: 1 / 7) */}
                                    {total > 1 && (
                                      <div className="absolute bottom-3 right-3 z-20 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-medium text-white border border-white/20 select-none shadow-md">
                                        {currentIdx + 1} / {total}
                                      </div>
                                    )}
                                  </motion.div>
                                </AnimatePresence>
                              </div>
                            );
                          })()}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: 3 Photos Canvas (Desktop Only >= lg) */}
          <div
            onClick={() => handleOpenModal(activeClient)}
            className="hidden lg:flex lg:col-span-6 relative w-full h-[380px] sm:h-[480px] lg:h-[560px] items-center justify-center cursor-pointer select-none"
          >
            <AnimatePresence>
              <motion.div
                key={activeClient.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.12 } }}
                transition={{ duration: 0.15 }}
                className="relative w-full h-full"
              >
                {activeClient.images.slice(0, 3).map((img, idx) => {
                  const delay = idx === 0 ? 0 : idx === 1 ? 0.18 : 0.32;
                  const duration = idx === 0 ? 0.14 : 0.28;
                  return (
                    <motion.div
                      key={`${activeClient.id}-img-${idx}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.08 } }}
                      transition={{
                        duration: duration,
                        delay: delay,
                        ease: "easeOut",
                      }}
                      className={`absolute ${img.positionClass} ${img.widthClass} ${img.heightClass} ${img.rotation} rounded-none border-0 ring-0 outline-none shadow-none overflow-hidden bg-neutral-900`}
                      style={{ zIndex: img.zIndex }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt || activeClient.name}
                        fill
                        sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 440px"
                        className="object-cover select-none border-0 ring-0 outline-none shadow-none"
                        priority
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* CLIENT WORK GALLERY DIALOG (Texto Izquierda + Mosaico Fotos Pegadas Der) */}
      {/* ========================================================================= */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {modalClient && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md"
                onClick={handleCloseModal}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className={`relative rounded-xs overflow-hidden transition-all duration-300 ${
                    activeExpandedImage && expandedIndex !== null
                      ? "w-fit max-w-[92vw] max-h-[90vh] bg-transparent flex items-center justify-center"
                      : isMobileListOpen
                      ? "w-full max-w-2xl h-[92vh] max-h-[92vh] bg-transparent text-white flex flex-col"
                      : "w-full max-w-6xl max-h-[90vh] min-h-[420px] sm:min-h-[520px] lg:min-h-[580px] bg-[#121212] text-white flex flex-col"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {/* 1. VISTA MOBILE LISTA VERTICAL DE TODAS LAS IMÁGENES (Fondo transparente + Botón Volver fijo abajo) */}
                    {isMobileListOpen ? (
                      <motion.div
                        key="mobile-gallery-list-view"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative flex flex-col w-full h-full max-h-[92vh] bg-transparent overflow-hidden select-none"
                      >
                        {/* Lista scrolleable únicamente con las imágenes */}
                        <div className="flex-1 overflow-y-auto w-full h-full p-2 sm:p-4 space-y-4 no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-28">
                          {modalClient.galleryImages.map((gImg, gIdx) => (
                            <div
                              key={`mobile-list-img-${gIdx}`}
                              className="relative w-full overflow-hidden bg-transparent"
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={gImg.src}
                                alt={gImg.alt || `${modalClient.name} - ${gIdx + 1}`}
                                className="w-full h-auto object-contain block select-none rounded-none"
                                loading={gIdx < 3 ? "eager" : "lazy"}
                              />
                            </div>
                          ))}
                        </div>

                        {/* Botón Volver Fijo en la parte inferior de la pantalla */}
                        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
                          <button
                            type="button"
                            onClick={() => setIsMobileListOpen(false)}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/80 hover:bg-black text-white text-[15px] font-medium transition-all backdrop-blur-md cursor-pointer border border-white/20 shadow-2xl hover:scale-105 active:scale-95 select-none"
                          >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Volver</span>
                          </button>
                        </div>
                      </motion.div>
                    ) : activeExpandedImage && expandedIndex !== null ? (
                      /* 2. VISTA DE IMAGEN COMPLETA (DESKTOP LIGHTBOX) */
                      <motion.div
                        key="expanded-image-view"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative inline-flex items-center justify-center max-w-[92vw] max-h-[90vh] select-none"
                      >
                        {/* Imagen ajustada a sus proporciones naturales sin bordes negros */}
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={`image-${expandedIndex}`}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            onPanEnd={(e, info) => {
                              if (info.offset.x < -30) {
                                handleNextImage();
                              } else if (info.offset.x > 30) {
                                handlePrevImage();
                              }
                            }}
                            className="relative flex items-center justify-center max-w-[92vw] max-h-[90vh] touch-pan-y"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={activeExpandedImage.src}
                              alt={activeExpandedImage.alt}
                              className="max-h-[88vh] max-w-[92vw] w-auto h-auto object-contain rounded-xs select-none block shadow-2xl"
                            />
                          </motion.div>
                        </AnimatePresence>

                        {/* Botón Volver a la vista del cliente */}
                        <button
                          type="button"
                          onClick={() => setExpandedIndex(null)}
                          className="absolute top-3 left-3 sm:top-4 sm:left-4 z-40 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/85 text-white text-[13px] font-medium transition-all backdrop-blur-md cursor-pointer border border-white/15 shadow-md"
                          title="Volver"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Volver</span>
                        </button>

                        {/* Botón Cerrar Modal */}
                        <button
                          type="button"
                          onClick={handleCloseModal}
                          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-40 p-2 rounded-full bg-black/60 hover:bg-black/85 text-white/85 hover:text-white transition-all cursor-pointer backdrop-blur-md focus:outline-none border border-white/15 shadow-md"
                          title="Cerrar"
                        >
                          <X className="w-4 h-4 stroke-[2]" />
                        </button>

                        {/* Flecha Anterior (Izquierda) */}
                        {modalClient.galleryImages.length > 1 && (
                          <button
                            type="button"
                            onClick={handlePrevImage}
                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/85 text-white/85 hover:text-white transition-all backdrop-blur-md cursor-pointer border border-white/15 hover:scale-105 active:scale-95 group focus:outline-none shadow-md"
                            title="Imagen anterior (Flecha Izquierda)"
                            aria-label="Imagen anterior"
                          >
                            <ChevronLeft className="w-5 h-5 stroke-[2.5] transition-transform duration-200 group-hover:-translate-x-0.5" />
                          </button>
                        )}

                        {/* Flecha Siguiente (Derecha) */}
                        {modalClient.galleryImages.length > 1 && (
                          <button
                            type="button"
                            onClick={handleNextImage}
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/85 text-white/85 hover:text-white transition-all backdrop-blur-md cursor-pointer border border-white/15 hover:scale-105 active:scale-95 group focus:outline-none shadow-md"
                            title="Imagen siguiente (Flecha Derecha)"
                            aria-label="Imagen siguiente"
                          >
                            <ChevronRight className="w-5 h-5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" />
                          </button>
                        )}

                        {/* Indicador de posición (ej: 2 / 20) */}
                        {modalClient.galleryImages.length > 1 && (
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium text-white/85 border border-white/15 select-none shadow-md">
                            {expandedIndex + 1} / {modalClient.galleryImages.length}
                          </div>
                        )}
                      </motion.div>
                    ) : (
                      /* 3. VISTA PRINCIPAL (Texto Izquierda Arriba + Galería Fotos Derecha en Desktop / Slide + Botón Naranja en Mobile) */
                      <motion.div
                        key="split-view"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col lg:flex-row w-full h-full flex-1"
                      >
                        {/* Botón Cerrar Modal */}
                        <button
                          type="button"
                          onClick={handleCloseModal}
                          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-40 p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white/80 hover:text-white transition-all cursor-pointer backdrop-blur-md focus:outline-none"
                          title="Cerrar"
                        >
                          <X className="w-5 h-5 stroke-[2]" />
                        </button>

                        {/* 2. COLUMNA IZQUIERDA: Texto alineado arriba (justify-start) */}
                        <div className="lg:w-[44%] p-6 sm:p-8 lg:p-12 flex flex-col justify-start overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                          <div className="space-y-5 sm:space-y-7">
                            <h3 className="text-[clamp(2.5rem,4.5vw,4.2rem)] font-bold tracking-tight text-white leading-tight">
                              {modalClient.name}
                            </h3>
                            <p className="text-[clamp(1.15rem,1.45vw,1.4rem)] text-white/85 font-normal leading-[1.6]">
                              {modalClient.description}
                            </p>

                            {/* Pills de trabajo realizado */}
                            {modalClient.tags && modalClient.tags.length > 0 && (
                              <div className="pt-2 sm:pt-4 flex flex-wrap gap-2.5">
                                {modalClient.tags.map((tag, i) => (
                                   <span
                                     key={i}
                                     className="inline-flex items-center px-4 py-2 rounded-full text-[14px] sm:text-[15px] font-medium bg-white/[0.08] text-white/90 select-none transition-colors hover:bg-white/[0.14] hover:text-white"
                                   >
                                     {tag}
                                   </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* ========================================================================= */}
                        {/* VISTA MOBILE (< lg): SLIDE DE 5 IMÁGENES + BOTÓN CUADRADO NARANJA AMPLIAR  */}
                        {/* ========================================================================= */}
                        <div className="block lg:hidden w-full bg-black">
                          {modalClient.galleryImages.length > 0 && (
                            <div className="flex flex-col w-full">
                              {/* Slide de 5 imágenes (sin botón flotante) */}
                              <div className="relative w-full h-[260px] sm:h-[340px] bg-neutral-900 overflow-hidden flex items-center justify-center select-none">
                                <AnimatePresence mode="wait">
                                  <motion.div
                                    key={`modal-mobile-img-${mobileModalImageIndex}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.18 }}
                                    onPanEnd={(e, info) => {
                                      if (info.offset.x < -30) {
                                        handleMobileNextModalImage();
                                      } else if (info.offset.x > 30) {
                                        handleMobilePrevModalImage();
                                      }
                                    }}
                                    className="relative w-full h-full cursor-pointer touch-pan-y"
                                    onClick={() => setIsMobileListOpen(true)}
                                  >
                                    <Image
                                      src={modalClient.galleryImages[mobileModalImageIndex]?.src || modalClient.galleryImages[0].src}
                                      alt={modalClient.galleryImages[mobileModalImageIndex]?.alt || modalClient.name}
                                      fill
                                      sizes="100vw"
                                      className="object-cover select-none"
                                      priority
                                    />
                                  </motion.div>
                                </AnimatePresence>

                                {/* Flecha Izquierda (Anterior) */}
                                {Math.min(modalClient.galleryImages.length, 5) > 1 && (
                                  <button
                                    type="button"
                                    onClick={handleMobilePrevModalImage}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-black/90 active:scale-90 text-white transition-all backdrop-blur-md border border-white/20 shadow-xl cursor-pointer"
                                    aria-label="Imagen anterior"
                                  >
                                    <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                                  </button>
                                )}

                                {/* Flecha Derecha (Siguiente) */}
                                {Math.min(modalClient.galleryImages.length, 5) > 1 && (
                                  <button
                                    type="button"
                                    onClick={handleMobileNextModalImage}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-black/90 active:scale-90 text-white transition-all backdrop-blur-md border border-white/20 shadow-xl cursor-pointer"
                                    aria-label="Imagen siguiente"
                                  >
                                    <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                                  </button>
                                )}

                                {/* Contador de Fotos (ej: 1 / 5) */}
                                {Math.min(modalClient.galleryImages.length, 5) > 1 && (
                                  <div className="absolute bottom-3 left-3 z-30 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-xs font-medium text-white border border-white/20 select-none shadow-md">
                                    {mobileModalImageIndex + 1} / {Math.min(modalClient.galleryImages.length, 5)}
                                  </div>
                                )}
                              </div>

                              {/* Botón Cuadrado Naranja Full-Width al pie del diálogo */}
                              <button
                                type="button"
                                onClick={() => setIsMobileListOpen(true)}
                                className="w-full bg-[#FA8A61] hover:bg-[#F87747] text-[#101010] font-semibold text-[16px] py-4 rounded-none flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-none select-none"
                              >
                                <span>Ampliar</span>
                                <ArrowUpRight className="w-4 h-4 text-[#101010] stroke-[2.5]" />
                              </button>
                            </div>
                          )}
                        </div>

                        {/* ========================================================================= */}
                        {/* VISTA DESKTOP (>= lg): Exactamente igual que antes (Collage 5 imágenes)   */}
                        {/* ========================================================================= */}
                        <div className="hidden lg:block lg:w-[56%] bg-black overflow-y-auto max-h-[50vh] lg:max-h-[85vh] no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                          {(() => {
                            const images = modalClient.galleryImages;
                            const img0 = images[0];
                            const img1 = images[1] || img0;
                            const img2 = images[2] || img0;
                            const img3 = images[3] || img0;
                            const img4 = images[4] || images[images.length - 1] || img0;

                            return (
                              <div className="grid grid-cols-2 gap-0 w-full">
                                {/* Fila 1: 1 imagen que ocupa las 2 casillas */}
                                {img0 && (
                                  <div
                                    onClick={() => setExpandedIndex(0)}
                                    className="relative col-span-2 w-full h-[220px] sm:h-[260px] lg:h-[290px] overflow-hidden bg-neutral-900 rounded-none border-0 shadow-none cursor-pointer group"
                                    title="Ver imagen completa"
                                  >
                                    <Image
                                      src={img0.src}
                                      alt={img0.alt}
                                      fill
                                      sizes="(max-width: 1024px) 100vw, 60vw"
                                      className="object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                                    />
                                    {/* Hover 'Expandir' Overlay (Bottom-Left con Glow Negro Contrastante y Sin Trazo) */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 flex items-end justify-start p-3.5 sm:p-4">
                                      <div className="flex items-center gap-1.5 text-white transform translate-y-1.5 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                                        <ArrowUpRight className="w-4 h-4 text-white stroke-[2.2]" />
                                        <span className="text-[13px] sm:text-[14px] font-medium tracking-tight">Expandir</span>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {/* Fila 2: 2 imágenes abajo */}
                                {img1 && (
                                  <div
                                    onClick={() => setExpandedIndex(1)}
                                    className="relative col-span-1 w-full h-[140px] sm:h-[170px] lg:h-[190px] overflow-hidden bg-neutral-900 rounded-none border-0 shadow-none cursor-pointer group"
                                    title="Ver imagen completa"
                                  >
                                    <Image
                                      src={img1.src}
                                      alt={img1.alt}
                                      fill
                                      sizes="(max-width: 1024px) 50vw, 30vw"
                                      className="object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                                    />
                                    {/* Hover 'Expandir' Overlay (Bottom-Left con Glow Negro Contrastante y Sin Trazo) */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 flex items-end justify-start p-3 sm:p-3.5">
                                      <div className="flex items-center gap-1 text-white transform translate-y-1.5 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                                        <ArrowUpRight className="w-3.5 h-3.5 text-white stroke-[2.2]" />
                                        <span className="text-[12px] sm:text-[13px] font-medium tracking-tight">Expandir</span>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {/* Fila 2: 2da imagen abajo */}
                                {img2 && (
                                  <div
                                    onClick={() => setExpandedIndex(2)}
                                    className="relative col-span-1 w-full h-[140px] sm:h-[170px] lg:h-[190px] overflow-hidden bg-neutral-900 rounded-none border-0 shadow-none cursor-pointer group"
                                    title="Ver imagen completa"
                                  >
                                    <Image
                                      src={img2.src}
                                      alt={img2.alt}
                                      fill
                                      sizes="(max-width: 1024px) 50vw, 30vw"
                                      className="object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                                    />
                                    {/* Hover 'Expandir' Overlay (Bottom-Left con Glow Negro Contrastante y Sin Trazo) */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 flex items-end justify-start p-3 sm:p-3.5">
                                      <div className="flex items-center gap-1 text-white transform translate-y-1.5 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                                        <ArrowUpRight className="w-3.5 h-3.5 text-white stroke-[2.2]" />
                                        <span className="text-[12px] sm:text-[13px] font-medium tracking-tight">Expandir</span>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {/* Fila 3: 1 imagen normal */}
                                {img3 && (
                                  <div
                                    onClick={() => setExpandedIndex(3)}
                                    className="relative col-span-1 w-full h-[140px] sm:h-[170px] lg:h-[190px] overflow-hidden bg-neutral-900 rounded-none border-0 shadow-none cursor-pointer group"
                                    title="Ver imagen completa"
                                  >
                                    <Image
                                      src={img3.src}
                                      alt={img3.alt}
                                      fill
                                      sizes="(max-width: 1024px) 50vw, 30vw"
                                      className="object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                                    />
                                    {/* Hover 'Expandir' Overlay (Bottom-Left con Glow Negro Contrastante y Sin Trazo) */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 flex items-end justify-start p-3 sm:p-3.5">
                                      <div className="flex items-center gap-1 text-white transform translate-y-1.5 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                                        <ArrowUpRight className="w-3.5 h-3.5 text-white stroke-[2.2]" />
                                        <span className="text-[12px] sm:text-[13px] font-medium tracking-tight">Expandir</span>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {/* Fila 3: 1 imagen con 50% de opacidad que diga 'Ver más imágenes' */}
                                {img4 && (
                                  <div
                                    onClick={() => setExpandedIndex(4 < images.length ? 4 : 0)}
                                    className="relative col-span-1 w-full h-[140px] sm:h-[170px] lg:h-[190px] overflow-hidden bg-black rounded-none border-0 shadow-none cursor-pointer group"
                                    title="Ver más imágenes"
                                  >
                                    <Image
                                      src={img4.src}
                                      alt={img4.alt}
                                      fill
                                      sizes="(max-width: 1024px) 50vw, 30vw"
                                      className="object-cover opacity-50 transition-all duration-500 group-hover:opacity-40 group-hover:scale-105 select-none"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-3 text-center select-none transition-colors group-hover:bg-black/50">
                                      <span className="text-white font-medium text-[14px] sm:text-[15px] sm:font-semibold tracking-tight drop-shadow-md">
                                        Ver más imágenes
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })()}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
