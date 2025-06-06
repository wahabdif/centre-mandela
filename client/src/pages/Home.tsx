import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/data/services';
import { iconmap } from '@/lib/data/iconmap'; // Correction ici : import depuis iconMap.ts
import { doctors } from '@/lib/data/doctors';
import { practicalInfo } from '@/lib/data/practicalInfo';
import { testimonials } from '@/lib/data/testimonials';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white px-6 text-center">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">{t('hero.title')}</h1>
          <p className="text-lg md:text-xl">{t('hero.description')}</p>
          <Link href="/contact">
            <Button size="lg" className="text-lg">
              {t('hero.cta')}
            </Button>
          </Link>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{t('services.section_title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map(({ icon, title, description, image, id }) => {
            const Icon = iconMap[icon] || iconMap['brain'];
            return (
              <div key={id} className="bg-white shadow-lg rounded-lg p-6 text-center space-y-4">
                <Icon className="w-12 h-12 mx-auto text-primary" />
                <img src={image} alt={title} className="w-full h-32 object-cover rounded" />
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRACTICAL INFO SECTION */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('practicalInfo.section_title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {practicalInfo.map(({ icon: Icon, titleKey, detailKey }, idx) => (
              <div key={idx} className="text-center space-y-4">
                <Icon className="w-10 h-10 mx-auto text-primary" />
                <h3 className="text-lg font-semibold">{t(`practicalInfo.items.${titleKey}`)}</h3>
                <p className="text-gray-700">{t(`practicalInfo.details.${detailKey}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS SECTION */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{t('doctors.section_title')}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {doctors.map(({ name, specialty, photo }, idx) => (
            <div key={idx} className="max-w-sm text-center space-y-4">
              <img
                src={photo}
                alt={t(`doctors.names.${name}`)}
                loading="lazy"
                className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold">{t(`doctors.names.${name}`)}</h3>
              <p className="text-gray-600">{t(`doctors.specialties.${specialty}`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('testimonials.section_title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(({ name, message }, idx) => (
              <div key={idx} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                <p className="italic mb-4">“{t(`testimonials.messages.${message}`)}”</p>
                <p className="font-semibold text-right">– {t(`testimonials.names.${name}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
