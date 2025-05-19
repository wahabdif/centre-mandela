import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  // Map of icon names to their unicode values (Font Awesome)
  const iconMap: Record<string, string> = {
    "x-ray": "\uf497",
    "magnet": "\uf076",
    "laptop-medical": "\uf812",
    "search": "\uf002",
    "users": "\uf0c0",
    "cog": "\uf013",
    "clock": "\uf017",
    "user-md": "\uf0f0",
    "certificate": "\uf0a3"
  };

  return (
    <Card className="bg-light hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="text-4xl text-primary mb-4">
          <i className={`fas fa-${icon}`} style={{ fontFamily: "'Font Awesome 5 Free'", fontWeight: 900 }}>
            {/* Fallback if Font Awesome is not loaded */}
            {iconMap[icon] || ""}
          </i>
        </div>
        <h3 className="text-xl font-bold mb-3 font-heading">{title}</h3>
        <p className="text-dark">{description}</p>
      </CardContent>
    </Card>
  );
}
