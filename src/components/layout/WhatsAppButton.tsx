import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '34664573320';
const WHATSAPP_MESSAGE = '¡Hola! Me gustaría obtener información sobre sus servicios de transferencias.';

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in"
    >
      <MessageCircle className="h-7 w-7 fill-current" />
    </a>
  );
}
