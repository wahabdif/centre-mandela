import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { CheckCircle } from "lucide-react";
import { 
  services, 
  testimonials, 
  features,
  equipmentBenefits,
  teamBenefits
} from "@/lib/constants";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Excellence en imagerie médicale à Oran
            </h1>
            <p className="text-xl mb-8">
              Des diagnostics précis pour une meilleure santé.
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
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
              alt="Centre d'imagerie médicale moderne"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary font-heading mb-4">
              Nos Services
            </h2>
            <p className="text-lg text-dark max-w-2xl mx-auto">
              Nous proposons une gamme complète de services d'imagerie médicale avec des équipements de dernière génération.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-between bg-light rounded-lg shadow-lg overflow-hidden">
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-primary font-heading mb-4">
                Des équipements de pointe
              </h3>
              <p className="text-dark mb-4">
                Notre centre est équipé des technologies d'imagerie médicale les plus récentes pour garantir des diagnostics précis et fiables.
              </p>
              <ul className="space-y-2">
                {equipmentBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-secondary h-5 w-5 mt-1 mr-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Équipement d'imagerie médicale moderne"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Équipe médicale professionnelle du Centre Benameur"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-primary font-heading mb-6">
                Une équipe médicale expérimentée
              </h2>
              <p className="text-dark mb-6">
                Le Centre D'Imagerie Benameur réunit des radiologues et des professionnels de santé hautement qualifiés pour vous offrir des services d'imagerie médicale exceptionnels.
              </p>
              <p className="text-dark mb-6">
                Notre équipe s'engage à fournir des diagnostics précis dans un environnement accueillant, en plaçant le bien-être du patient au cœur de nos préoccupations.
              </p>
              <div className="flex flex-wrap gap-4">
                {teamBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow">
                    <i className={`fas fa-${benefit.icon} text-secondary text-2xl mr-3`} style={{ fontFamily: "'Font Awesome 5 Free'", fontWeight: 900 }}>
                      {benefit.icon === "user-md" ? "👨‍⚕️" : "🏅"}
                    </i>
                    <div>
                      <h4 className="font-bold">{benefit.title}</h4>
                      <p className="text-sm">{benefit.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary font-heading mb-4">
              Témoignages de patients
            </h2>
            <p className="text-lg text-dark max-w-2xl mx-auto">
              Découvrez ce que nos patients disent de notre centre et de nos services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
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

      {/* Why Choose Us */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary font-heading mb-4">
              Pourquoi nous choisir
            </h2>
            <p className="text-lg text-dark max-w-2xl mx-auto">
              Nous nous engageons à fournir des services d'imagerie médicale de haute qualité avec une attention particulière à chaque patient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl text-primary mb-4 flex justify-center">
                    <i className={`fas fa-${feature.icon}`} style={{ fontFamily: "'Font Awesome 5 Free'", fontWeight: 900 }}>
                      {feature.icon === "users" ? "👥" : feature.icon === "cog" ? "⚙️" : "⏱️"}
                    </i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading">{feature.title}</h3>
                  <p className="text-dark">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
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
      </section>
    </div>
  );
}
