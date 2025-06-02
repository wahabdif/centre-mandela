// client/src/lib/data/testimonials.ts

export interface Testimonial {
  id: string;
  name: string;
  role?: string; // ex: Patient, Client, etc.
  photo?: string; // URL d’une photo (optionnel)
  message: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marie Dupont',
    role: 'Patiente',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    message:
      "Le Centre d'Imagerie Benameur m'a offert un service rapide et professionnel. Le personnel est très attentionné et les équipements sont à la pointe de la technologie.",
  },
  {
    id: '2',
    name: 'Jean Martin',
    role: 'Patient',
    photo: 'https://randomuser.me/api/portraits/men/35.jpg',
    message:
      "J'ai été très impressionné par la qualité de l'examen et la clarté des explications fournies par l'équipe. Je recommande vivement ce centre.",
  },
  {
    id: '3',
    name: 'Sophie Lambert',
    role: 'Patiente',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    message:
      'Une expérience rassurante du début à la fin, avec un personnel très professionnel et sympathique. Les résultats sont rapides et précis.',
  },
];
