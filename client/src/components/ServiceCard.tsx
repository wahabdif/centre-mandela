import { Card, CardContent } from '@/components/ui/card';
import {
  Radio,
  Magnet,
  Scan,
  Search,
  Users,
  Settings,
  Clock,
  UserCircle,
  Award,
} from 'lucide-react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  image?: string;
}

export default function ServiceCard({ icon, title, description, image }: ServiceCardProps) {
  // Function to get the right Lucide icon based on icon name
  const getIcon = () => {
    switch (icon) {
      case 'x-ray':
        return <Radio className="h-8 w-8" />;
      case 'magnet':
        return <Magnet className="h-8 w-8" />;
      case 'laptop-medical':
        return <Scan className="h-8 w-8" />;
      case 'search':
        return <Search className="h-8 w-8" />;
      case 'users':
        return <Users className="h-8 w-8" />;
      case 'cog':
        return <Settings className="h-8 w-8" />;
      case 'clock':
        return <Clock className="h-8 w-8" />;
      case 'user-md':
        return <UserCircle className="h-8 w-8" />;
      case 'certificate':
        return <Award className="h-8 w-8" />;
      default:
        return <div className="h-8 w-8" />;
    }
  };

  return (
    <Card className="bg-white hover:shadow-lg transition-all duration-300 overflow-hidden h-full group">
      {image && (
        <div className="h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <CardContent className={`p-6 ${image ? 'pt-5' : ''}`}>
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
            {getIcon()}
          </div>
          <h3 className="text-xl font-bold font-heading">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <a
            href="#"
            className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
          >
            En savoir plus →
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
