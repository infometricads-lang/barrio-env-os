// Services data with slugs for individual pages

import moneyTransferImg from '@/assets/services/money-transfer.jpg';
import mobileRechargeImg from '@/assets/services/mobile-recharge.jpg';
import billPaymentImg from '@/assets/services/bill-payment.jpg';
import currencyExchangeImg from '@/assets/services/currency-exchange.jpg';

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
  icon: string;
  color: string;
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'envios-de-dinero',
    title: 'Envíos de Dinero',
    shortDescription: 'Envía dinero a tus seres queridos de forma rápida y segura a cualquier parte del mundo.',
    fullDescription: 'Realizamos envíos de dinero a más de 200 países con las mejores tarifas del mercado. Trabajamos con las principales operadoras como Western Union, Ria y MoneyGram para garantizar que tu dinero llegue de forma segura y rápida.',
    features: [
      'Envíos a más de 200 países',
      'Western Union, Ria, MoneyGram',
      'Recepción en minutos',
      'Tarifas competitivas',
      'Atención personalizada',
      'Seguimiento de envíos',
    ],
    image: moneyTransferImg,
    icon: 'Send',
    color: 'bg-primary/10 text-primary',
  },
  {
    id: '2',
    slug: 'recargas-moviles',
    title: 'Recargas Móviles',
    shortDescription: 'Recarga tu móvil o el de tus familiares en cualquier operador nacional e internacional.',
    fullDescription: 'Ofrecemos recargas para todos los operadores nacionales e internacionales. Recarga el móvil de tus familiares en el extranjero de forma rápida y sencilla desde nuestros locales.',
    features: [
      'Todos los operadores nacionales',
      'Recargas internacionales',
      'Recarga instantánea',
      'Precios sin comisiones ocultas',
      'Promociones especiales',
      'Recarga desde 5€',
    ],
    image: mobileRechargeImg,
    icon: 'Smartphone',
    color: 'bg-success/10 text-success',
  },
  {
    id: '3',
    slug: 'pago-de-facturas',
    title: 'Pago de Facturas',
    shortDescription: 'Paga tus facturas de servicios de forma cómoda y segura en nuestros locales.',
    fullDescription: 'Te facilitamos el pago de tus facturas de servicios básicos como luz, agua, gas, teléfono y más. Sin necesidad de hacer colas en bancos, paga cómodamente en nuestros locales.',
    features: [
      'Facturas de luz, agua, gas',
      'Telefonía y servicios',
      'Pago inmediato',
      'Justificante de pago',
      'Sin citas previas',
      'Atención en tu idioma',
    ],
    image: billPaymentImg,
    icon: 'Receipt',
    color: 'bg-warning/10 text-warning',
  },
  {
    id: '4',
    slug: 'cambio-de-divisas',
    title: 'Cambio de Divisas',
    shortDescription: 'Cambia tu dinero con tipos de cambio competitivos y sin comisiones ocultas.',
    fullDescription: 'Ofrecemos servicio de cambio de divisas con tipos de cambio actualizados y competitivos. Cambia euros por dólares, soles, pesos y muchas más monedas.',
    features: [
      'Tipos de cambio competitivos',
      'Sin comisiones ocultas',
      'Principales divisas disponibles',
      'Cotización en el momento',
      'Grandes cantidades disponibles',
      'Servicio rápido',
    ],
    image: currencyExchangeImg,
    icon: 'Coins',
    color: 'bg-accent text-accent-foreground',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
