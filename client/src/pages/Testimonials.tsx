import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  // Extended testimonials for the dedicated page
  const extendedTestimonials = [
    ...testimonials,
    {
      id: 4,
      text: "L'équipe du Centre Benameur est extrêmement professionnelle et attentionnée. Mon examen s'est déroulé dans d'excellentes conditions.",
      author: "Samira L.",
      role: "Patient",
      initials: "SL",
      rating: 5
    },
    {
      id: 5,
      text: "Impressionné par la qualité des équipements et la clarté des explications. Les résultats ont été disponibles très rapidement.",
      author: "Mohamed A.",
      role: "Patient",
      initials: "MA",
      rating: 5
    },
    {
      id: 6,
      text: "Un grand merci au Dr. Benameur pour sa patience et son expertise. Il a pris le temps de m'expliquer les résultats en détail.",
      author: "Fatima Z.",
      role: "Patient",
      initials: "FZ",
      rating: 5
    }
  ];

  return (
    <div className="pt-28">
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-heading mb-6">Témoignages de nos patients</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Découvrez ce que nos patients disent de leur expérience au Centre D'Imagerie Benameur.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extendedTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                text={testimonial.text}
                author={testimonial.author}
                role={testimonial.role}
                initials={testimonial.initials}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary font-heading mb-8">
            Votre expérience compte pour nous
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Nous nous efforçons constamment d'améliorer nos services et votre retour d'expérience nous est précieux.
            Si vous avez récemment visité notre centre, nous serions ravis de connaître votre opinion.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/contact">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg shadow-lg"
                size="lg"
              >
                Partagez votre expérience
              </Button>
            </Link>
            
            <Link href="/rendez-vous">
              <Button 
                className="bg-accent hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg"
                size="lg"
              >
                <i className="far fa-calendar-alt mr-2">📅</i> Prendre rendez-vous
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary font-heading mb-8 text-center">
              Notre engagement envers les patients
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-light rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-primary mb-4">Excellence médicale</h3>
                <p className="text-gray-600 mb-4">
                  Nous nous engageons à fournir des services d'imagerie médicale de la plus haute qualité en utilisant des 
                  équipements de pointe et en employant des professionnels hautement qualifiés.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Diagnostics précis et fiables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Formation continue de notre personnel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Protocoles médicaux rigoureux</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-light rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-primary mb-4">Soins centrés sur le patient</h3>
                <p className="text-gray-600 mb-4">
                  Chaque patient mérite d'être traité avec respect, dignité et compassion. Nous nous efforçons de rendre 
                  votre expérience aussi confortable et sans stress que possible.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Prise en charge personnalisée</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Communication claire et transparente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span>Écoute attentive de vos préoccupations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
