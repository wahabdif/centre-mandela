// pages/Services.tsx
import React from 'react';
import { services } from '@/lib/data/services';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">
        {t('services.title', 'Nos Services')}
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(service => (
          <div
            key={service.id}
            className="border rounded-lg shadow hover:shadow-lg transition bg-white overflow-hidden"
          >
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {t(`services.items.${service.id}.title`, service.title)}
              </h2>
              <p className="text-gray-600 text-sm">
                {t(`services.items.${service.id}.description`, '')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
