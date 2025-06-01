import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/TestimonialCard";
import { useTranslation } from "react-i18next";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  const { t } = useTranslation();

  const extendedTestimonials = [
    ...testimonials,
    {
      id: 4,
      text: t("testimonials.extended.0.text"),
      author: t("testimonials.extended.0.author"),
      role: t("testimonials.extended.0.role"),
      initials: "SL",
      rating: 5
    },
    {
      id: 5,
      text: t("testimonials.extended.1.text"),
      author: t("testimonials.extended.1.author"),
      role: t("testimonials.extended.1.role"),
      initials: "MA",
      rating: 5
    },
    {
      id: 6,
      text: t("testimonials.extended.2.text"),
      author: t("testimonials.extended.2.author"),
      role: t("testimonials.extended.2.role"),
      initials: "FZ",
      rating: 5
    }
  ];

  return (
    <div className="pt-28">
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-heading mb-6">
            {t("testimonials.title")}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t("testimonials.intro")}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extendedTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                text={testimonial.text.toString()}
                author={testimonial.author.toString()}
                role={testimonial.role?.toString()}
                initials={testimonial.initials}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-light text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary font-heading mb-8">
            {t("testimonials.ctaTitle")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            {t("testimonials.ctaText")}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/contact">
              <Button
                className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg shadow-lg"
                size="lg"
              >
                {t("testimonials.ctaButton")}
              </Button>
            </Link>
            <Link href="/rendez-vous">
              <Button
                className="bg-accent hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg"
                size="lg"
              >
                📅 {t("testimonials.appointment")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary font-heading mb-8 text-center">
              {t("testimonials.commitmentTitle")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-light rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {t("testimonials.excellence.title")}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t("testimonials.excellence.text")}
                </p>
                <ul className="space-y-2">
                  {(t("testimonials.excellence.points", { returnObjects: true }) as string[]).map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-secondary font-bold mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-light rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {t("testimonials.care.title")}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t("testimonials.care.text")}
                </p>
                <ul className="space-y-2">
                  {(t("testimonials.care.points", { returnObjects: true }) as string[]).map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-secondary font-bold mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}