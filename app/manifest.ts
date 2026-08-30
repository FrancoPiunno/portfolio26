import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Franco Piunno | Arquitecto Digital",
    short_name: "fran.",
    description: "Franco Piunno — Arquitecto Digital. Diseño, código, video y estrategia de adquisición.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#FA8A61",
    icons: [
      {
        src: "/webicon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
