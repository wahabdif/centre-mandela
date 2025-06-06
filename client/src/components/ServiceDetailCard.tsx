import { CheckCircle } from 'lucide-react';
import type { ServiceProps, ServiceDetail } from '../types';

interface ServiceDetailCardProps {
  service: ServiceProps;
  detail: ServiceDetail;
}

export function ServiceDetailCard({ service, detail }: ServiceDetailCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <img
        src={detail.image}
        alt={`Illustration du service ${service.title}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-primary mb-3">{service.title}</h3>
        <p className="text-gray-700 mb-4">{detail.fullDescription}</p>

        <h4 className="font-bold text-primary mb-2">Utilisations principales :</h4>
        <ul className="space-y-1 mb-4">
          {detail.uses.map((use: string, i: number) => (
            <li key={i} className="flex items-center text-gray-700">
              <CheckCircle className="text-primary w-5 h-5 mr-2" />
              {use}
            </li>
          ))}
        </ul>

        <h4 className="font-bold text-primary mb-2">Préparation :</h4>
        <p className="text-gray-700">{detail.preparation}</p>
      </div>
    </div>
  );
}
