// src/lib/data/services.ts

export type Service = {
  title: string;
  description: string;
  icon: string; // Nom d’icône à utiliser (ex: pour Lucide ou FontAwesome)
};

export const services: Service[] = [
  {
    title: "IRM",
    description: "Imagerie par Résonance Magnétique pour le diagnostic précis des tissus mous.",
    icon: "brain",
  },
  {
    title: "Scanner (CT)",
    description: "Tomodensitométrie pour une visualisation en coupe des structures internes.",
    icon: "cpu",
  },
  {
    title: "Radiologie Numérique",
    description: "Radiographies numériques de haute qualité avec faible dose de rayons.",
    icon: "camera",
  },
  {
    title: "Échographie",
    description: "Imagerie par ultrasons pour l'examen des tissus mous et organes internes.",
    icon: "waveform",
  },
  {
    title: "Mammographie",
    description: "Dépistage et diagnostic des affections mammaires.",
    icon: "scan-face",
  },
  {
    title: "Ostéodensitométrie",
    description: "Mesure de la densité osseuse pour diagnostiquer l’ostéoporose.",
    icon: "bone",
  },
];
