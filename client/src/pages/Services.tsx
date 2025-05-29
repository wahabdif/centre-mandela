import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { services, equipmentBenefits } from "@/lib/constants";

export default function Services() {
  return (
    <main className="pt-28">
      <div className="container mx-auto px-4 py-12">
        {/* Bouton Retour */}
        <BackButton />

        {/* Titre et introduction */}
        <header className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-primary font-heading mb-4">
            Nos Services d&apos;Imagerie Médicale
          </h1>
          <p className="text-lg text-gray-600">
            Le Centre D&apos;Imagerie Benameur propose des services d&apos;imagerie médicale avancés avec des équipements de dernière génération et une équipe de professionnels expérimentés.
          </p>
        </header>

        {/* Liste des services */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" aria-label="Liste des services d'imagerie médicale">
          {services.map((service, index) => (
            <ServiceDetailCard key={service.id} service={service} index={index} />
          ))}
        </section>

        {/* Section équipement et technologie */}
        <EquipmentTechnology />

        {/* Section expérience patient */}
        <PatientExperience />

        {/* Call to Action */}
        <CallToAction />
      </div>
    </main>
  );
}

/* Bouton Retour */
function BackButton() {
  return (
    <div className="mb-6">
      <button
        onClick={() => window.history.back()}
        className="flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
        aria-label="Retour à la page précédente"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
          aria-hidden="true"
          focusable="false"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        Retour
      </button>
    </div>
  );
}

/* Carte détaillée du service */
interface ServiceProps {
  id: string;
  icon?: string;
  title: string;
  description?: string;
}

interface ServiceDetailCardProps {
  service: ServiceProps;
  index: number;
}

const serviceDetails: Record<
  string,
  {
    fullDescription: string;
    uses: string[];
    preparation: string;
    image: string;
  }
> = {
  radiologie: {
    fullDescription:
      "Notre service de radiologie générale utilise des rayons X pour créer des images des structures internes du corps. Ces examens sont rapides, simples et peuvent diagnostiquer diverses conditions, des fractures aux infections pulmonaires.",
    uses: [
      "Examens osseux et articulaires",
      "Radiographie du thorax",
      "Examens digestifs",
      "Radiographie dentaire",
    ],
    preparation:
      "La plupart des examens radiologiques ne nécessitent pas de préparation spéciale. Dans certains cas, il peut vous être demandé de retirer bijoux ou objets métalliques dans la zone à examiner.",
    image:
      "https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  irm: {
    fullDescription:
      "L'Imagerie par Résonance Magnétique (IRM) utilise un puissant champ magnétique et des ondes radio pour produire des images détaillées des organes et tissus. Cette technique est particulièrement utile pour visualiser le cerveau, la colonne vertébrale et les articulations.",
    uses: [
      "Examens neurologiques",
      "Imagerie articulaire",
      "Examens abdominaux et pelviens",
      "Angiographie par résonance magnétique",
    ],
    preparation:
      "Vous devrez retirer tous les objets métalliques avant l'examen. Informez votre médecin si vous avez des implants métalliques, un pacemaker ou si vous êtes claustrophobe.",
    image:
      "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  scanner: {
    fullDescription:
      "Le scanner (tomodensitométrie) combine l'utilisation des rayons X avec la technologie informatique pour créer des images en coupes du corps. Il offre une excellente visualisation des os, des organes internes et des tissus mous.",
    uses: [
      "Examens thoraciques et pulmonaires",
      "Imagerie abdominale et pelvienne",
      "Examens vasculaires",
      "Imagerie de la tête et du cou",
    ],
    preparation:
      "Selon l'examen, vous pourriez devoir jeûner pendant plusieurs heures. Dans certains cas, un produit de contraste peut être nécessaire.",
    image:
      "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  echographie: {
    fullDescription:
      "L'échographie utilise des ondes sonores pour créer des images des organes et structures du corps. Cette technique sûre et non invasive est idéale pour examiner les organes abdominaux, le cœur, et pour suivre le développement fœtal pendant la grossesse.",
    uses: [
      "Échographie abdominale",
      "Échographie cardiaque",
      "Échographie obstétricale",
      "Échographie des parties molles",
    ],
    preparation:
      "La préparation varie selon l'examen. Pour certaines échographies abdominales, il est conseillé de venir à jeun.",
    image:
      "https://images.pexels.com/photos/40568/ultrasound-ultrasound-scan-sonogram-40568.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
};

function ServiceDetailCard({ service }: ServiceDetailCardProps) {
  const detail = serviceDetails[service.id];
  if (!detail) return null;

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col" aria-labelledby={`${service.id}-title`}>
      <img
        src={detail.image}
        alt={`Image illustrant le service ${service.title}`}
        className="w-full h-48 object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 id={`${service.id}-title`} className="text-2xl font-semibold text-primary mb-3">
          {service.title}
        </h3>
        <p className="text-gray-700 mb-4">{detail.fullDescription}</p>

        <section aria-labelledby={`${service.id}-uses-title`}>
          <h4 id={`${service.id}-uses-title`} className="font-bold text-primary mb-2">
            Utilisations principales :
          </h4>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            {detail.uses.map((use, i) => (
              <li key={i}>{use}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby={`${service.id}-prep-title`}>
          <h4 id={`${service.id}-prep-title`} className="font-bold text-primary mb-2">
            Préparation :
          </h4>
          <p className="text-gray-700">{detail.preparation}</p>
        </section>
      </div>
    </article>
  );
}

/* Section équipement et technologie */
function EquipmentTechnology() {
  return (
    <section className="bg-light rounded-lg shadow-lg overflow-hidden mb-16" aria-labelledby="equip-tech-title">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
            alt="Équipement d'imagerie médicale moderne"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="md:w-1/2 p-8">
          <h2 id="equip-tech-title" className="text-3xl font-bold text-primary font-heading mb-6">
            Technologie de Pointe
          </h2>
          <p className="text-gray-700 mb-6">
            Pour garantir des diagnostics précis et fiables, notre centre est équipé des technologies d&apos;imagerie médicale les plus récentes. Nos équipements sont régulièrement mis à jour pour rester à la pointe de l&apos;innovation en matière d&apos;imagerie médicale.
          </p>
          <ul className="space-y-4">
            {equipmentBenefits.map((benefit, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="text-secondary h-5 w-5 mt-1 mr-3 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* Section expérience patient */
function PatientExperience() {
  const experienceSections = [
    {
      title: "Avant votre examen",
      items: [
        "Instructions claires sur la préparation requise",
        "Rappels de rendez-vous",
        "Processus d'enregistrement simplifié",
      ],
    },
    {
      title: "Pendant votre examen",
      items: [
        "Personnel attentif et bienveillant",
        "Explications détaillées sur les procédures",
        "Environnement confortable et rassurant",
      ],
    },
    {
      title: "Après votre examen",
      items: [
        "Résultats rapides et précis",
        "Consultation pour expliquer les résultats",
        "Suivi personnalisé si nécessaire",
      ],
    },
    {
      title: "Notre engagement",
      items: [
        "Confidentialité et respect de votre vie privée",
        "Coordination avec votre médecin traitant",
        "Accessibilité pour tous les patients",
      ],
    },
  ];

  return (
    <section className="bg-white rounded-lg shadow-lg p-8 mb-16" aria-labelledby="patient-exp-title">
      <div className="max-w-3xl mx-auto">
        <h2 id="patient-exp-title" className="text-3xl font-bold text-primary font-heading mb-6 text-center">
          L&apos;Expérience Patient
        </h2>
        <p className="text-gray-700 mb-8 text-center">
          Chez Centre D&apos;Imagerie Benameur, nous nous efforçons de rendre votre visite aussi confortable et sans stress que possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceSections.map(({ title, items }, idx) => (
            <article key={idx} className="bg-light rounded-lg p-6" aria-labelledby={`patient-exp-section-${idx}`}>
              <h3 id={`patient-exp-section-${idx}`} className="text-xl font-bold text-primary mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-secondary mr-3 mt-1" aria-hidden="true">✔</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Call To Action */
function CallToAction() {
  return (
    <div className="text-center mb-24">
      <Link href="/contact" aria-label="Prendre rendez-vous au Centre d'Imagerie Benameur">
        <Button className="px-8 py-4 text-lg font-semibold">
          Prendre Rendez-vous
        </Button>
      </Link>
    </div>
  );
}
