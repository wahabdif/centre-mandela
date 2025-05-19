import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { services, equipmentBenefits } from "@/lib/constants";

export default function Services() {
  return (
    <div className="pt-28">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-primary font-heading mb-4">
            Nos Services d'Imagerie Médicale
          </h1>
          <p className="text-lg text-gray-600">
            Le Centre D'Imagerie Benameur propose des services d'imagerie médicale avancés 
            avec des équipements de dernière génération et une équipe de professionnels expérimentés.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceDetailCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Equipment and Technology */}
        <div className="bg-light rounded-lg shadow-lg overflow-hidden mb-16">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Équipement d'imagerie médicale moderne"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-primary font-heading mb-6">
                Technologie de Pointe
              </h2>
              <p className="text-gray-700 mb-6">
                Pour garantir des diagnostics précis et fiables, notre centre est équipé des technologies 
                d'imagerie médicale les plus récentes. Nos équipements sont régulièrement mis à jour pour 
                rester à la pointe de l'innovation en matière d'imagerie médicale.
              </p>
              <ul className="space-y-4">
                {equipmentBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-secondary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Patient Experience */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary font-heading mb-6 text-center">
              L'Expérience Patient
            </h2>
            <p className="text-gray-700 mb-8 text-center">
              Chez Centre D'Imagerie Benameur, nous nous efforçons de rendre votre visite aussi 
              confortable et sans stress que possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Avant votre examen</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Instructions claires sur la préparation requise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Rappels de rendez-vous</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Processus d'enregistrement simplifié</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Pendant votre examen</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Personnel attentif et bienveillant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Explications détaillées sur les procédures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Environnement confortable et rassurant</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Après votre examen</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Résultats rapides et précis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Consultation pour expliquer les résultats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Suivi personnalisé si nécessaire</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Notre engagement</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Confidentialité et respect de votre vie privée</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Coordination avec votre médecin traitant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Accessibilité pour tous les patients</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg text-white p-10 text-center">
          <h2 className="text-3xl font-bold font-heading mb-6">
            Prêt à prendre rendez-vous?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Notre équipe est prête à vous accueillir et à vous fournir des soins d'imagerie médicale exceptionnels.
          </p>
          <Link href="/rendez-vous">
            <Button
              className="bg-accent hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg"
              size="lg"
            >
              <i className="far fa-calendar-alt mr-2">📅</i> Prendre rendez-vous
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

interface ServiceProps {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface ServiceDetailCardProps {
  service: ServiceProps;
  index: number;
}

const serviceDetails = {
  radiologie: {
    fullDescription: "Notre service de radiologie générale utilise des rayons X pour créer des images des structures internes du corps. Ces examens sont rapides, simples et peuvent diagnostiquer diverses conditions, des fractures aux infections pulmonaires.",
    uses: ["Examens osseux et articulaires", "Radiographie du thorax", "Examens digestifs", "Radiographie dentaire"],
    preparation: "La plupart des examens radiologiques ne nécessitent pas de préparation spéciale. Dans certains cas, il peut vous être demandé de retirer bijoux ou objets métalliques dans la zone à examiner.",
    image: "https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  irm: {
    fullDescription: "L'Imagerie par Résonance Magnétique (IRM) utilise un puissant champ magnétique et des ondes radio pour produire des images détaillées des organes et tissus. Cette technique est particulièrement utile pour visualiser le cerveau, la colonne vertébrale et les articulations.",
    uses: ["Examens neurologiques", "Imagerie articulaire", "Examens abdominaux et pelviens", "Angiographie par résonance magnétique"],
    preparation: "Vous devrez retirer tous les objets métalliques avant l'examen. Informez votre médecin si vous avez des implants métalliques, un pacemaker ou si vous êtes claustrophobe.",
    image: "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  scanner: {
    fullDescription: "Le scanner (tomodensitométrie) combine l'utilisation des rayons X avec la technologie informatique pour créer des images en coupes du corps. Il offre une excellente visualisation des os, des organes internes et des tissus mous.",
    uses: ["Examens thoraciques et pulmonaires", "Imagerie abdominale et pelvienne", "Examens vasculaires", "Imagerie de la tête et du cou"],
    preparation: "Selon l'examen, vous pourriez devoir jeûner pendant plusieurs heures. Dans certains cas, un produit de contraste peut être nécessaire.",
    image: "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  echographie: {
    fullDescription: "L'échographie utilise des ondes sonores pour créer des images des organes et structures du corps. Cette technique sûre et non invasive est idéale pour examiner les organes abdominaux, le cœur, et pour suivre le développement fœtal pendant la grossesse.",
    uses: ["Échographie abdominale", "Échographie cardiaque", "Échographie obstétricale", "Échographie des parties molles"],
    preparation: "La préparation varie selon l'examen. Pour certaines échographies abdominales, vous devrez jeûner pendant quelques heures ou avoir la vessie pleine.",
    image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
};

function ServiceDetailCard({ service, index }: ServiceDetailCardProps) {
  const details = serviceDetails[service.id as keyof typeof serviceDetails];
  const isEven = index % 2 === 0;

  return (
    <Card className="overflow-hidden">
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className="md:w-2/5">
          <img
            src={details.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-6 md:w-3/5">
          <div className="flex items-center mb-4">
            <div className="text-3xl text-primary mr-3">
              <i className={`fas fa-${service.icon}`} style={{ fontFamily: "'Font Awesome 5 Free'", fontWeight: 900 }}>
                {service.icon === "x-ray" ? "📷" : 
                 service.icon === "magnet" ? "🧲" : 
                 service.icon === "laptop-medical" ? "💻" : "🔍"}
              </i>
            </div>
            <h2 className="text-2xl font-bold text-primary font-heading">{service.title}</h2>
          </div>
          
          <p className="text-gray-700 mb-4">{details.fullDescription}</p>
          
          <div className="mb-4">
            <h3 className="font-bold text-gray-800 mb-2">Applications principales :</h3>
            <ul className="space-y-1">
              {details.uses.map((use, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-secondary font-bold mr-2">•</span>
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Préparation :</h3>
            <p className="text-gray-700">{details.preparation}</p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
