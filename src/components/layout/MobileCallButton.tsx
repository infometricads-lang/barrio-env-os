import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileCallButtonProps {
  phone?: string;
  label?: string;
}

export function MobileCallButton({ 
  phone = '+34664573320', 
  label = 'Llamar ahora' 
}: MobileCallButtonProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-3 bg-background/95 backdrop-blur-md border-t border-border md:hidden z-50 safe-bottom">
      <Button 
        asChild 
        size="lg" 
        className="w-full rounded-xl gap-2 shadow-lg text-base font-medium"
      >
        <a href={`tel:${phone.replace(/\s/g, '')}`}>
          <Phone className="h-5 w-5" />
          {label}
        </a>
      </Button>
    </div>
  );
}
