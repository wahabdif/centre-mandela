import { Brain, Cpu, Camera, ScanFace, Bone } from "lucide-react";

export type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string; // Nom d’icône à utiliser (ex: pour Lucide ou FontAwesome)
};

// Mapping string -> composant d'icône
export const iconMap: Record<string, React.ElementType> = {
  brain: Brain,
  cpu: Cpu,
  camera: Camera,
  "scan-face": ScanFace,
  bone: Bone,
};

export const services: Service[] = [
  {
    id: 1,
    title: "IRM",
    description: "Imagerie par Résonance Magnétique pour le diagnostic précis des tissus mous.",
    image: "/images/irm.jpg",
    icon: "brain",
  },
  {
    id: 2,
    title: "Scanner (CT)",
    description: "Tomodensitométrie pour une visualisation en coupe des structures internes.",
    image: "/images/scanner.jpg",
    icon: "cpu",
  },
  {
    id: 3,
    title: "Radiologie Numérique",
    description: "Radiographies numériques de haute qualité avec faible dose de rayons.",
    image: "/images/radiologie.jpg",
    icon: "camera",
  },
  {
    id: 4,
    title: "Échographie",
    description: "Imagerie par ultrasons pour l'examen des tissus mous et organes internes.",
    image: "/images/echo.jpg",
    icon: "waveform",
  },
  {
    id: 5,
    title: "Mammographie",
    description: "Dépistage et diagnostic des affections mammaires.",
    image: "/images/mammo.jpg",
    icon: "scan-face",
  },
  {
    id: 6,
    title: "Ostéodensitométrie",
    description: "Mesure de la densité osseuse pour diagnostiquer l’ostéoporose.",
    image: "/images/osteo.jpg",
    icon: "bone",
  },
];