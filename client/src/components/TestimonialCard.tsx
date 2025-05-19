import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
  initials: string;
  rating: number;
}

export default function TestimonialCard({ text, author, role, initials, rating }: TestimonialCardProps) {
  return (
    <Card className="bg-light shadow-md h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4 text-yellow-400">
          {[...Array(rating)].map((_, i) => (
            <i key={i} className="fas fa-star" style={{ fontFamily: "'Font Awesome 5 Free'", fontWeight: 900 }}>
              ★
            </i>
          ))}
        </div>
        <p className="text-dark mb-6 italic">"{text}"</p>
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-xl text-primary font-bold mr-4">
            {initials}
          </div>
          <div>
            <h4 className="font-bold">{author}</h4>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
