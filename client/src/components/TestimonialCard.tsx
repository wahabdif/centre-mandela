import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star, StarHalf } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  author: string;
  role?: string;
  initials: string;
  rating: number;
  avatar?: string;
}

export default function TestimonialCard({
  text,
  author,
  role,
  initials,
  rating,
  avatar,
}: TestimonialCardProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <Card className="bg-white shadow-md h-full transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center mb-4 text-yellow-400">
          {[...Array(fullStars)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
          {hasHalfStar && <StarHalf className="h-5 w-5 fill-current" />}
        </div>
        <p className="text-gray-700 mb-6 italic leading-relaxed">"{text}"</p>
        <div className="flex items-center">
          <Avatar className="h-14 w-14 border-2 border-primary mr-4">
            {avatar ? <AvatarImage src={avatar} alt={author} /> : null}
            <AvatarFallback className="bg-primary text-white text-lg font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-bold text-gray-900">{author}</h4>
            {role && <p className="text-sm text-gray-600">{role}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
