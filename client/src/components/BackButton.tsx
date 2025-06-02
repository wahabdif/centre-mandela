import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

interface BackButtonProps {
  className?: string;
}

export default function BackButton({ className = '' }: BackButtonProps) {
  const [_, navigate] = useLocation();

  return (
    <Button
      variant="outline"
      size="sm"
      className={`rounded-full ${className}`}
      onClick={() => window.history.back()}
      aria-label="Retour"
    >
      <ArrowLeft className="h-4 w-4 mr-1" />
      Retour
    </Button>
  );
}
