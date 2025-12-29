// Internationalization setup - prepared for multi-language support
// Add more languages by extending the translations object

export type Language = 'es' | 'ca' | 'en';

export const translations = {
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      locations: 'Ubicaciones',
      services: 'Servicios',
      contact: 'Contacto',
      findLocation: 'Encuentra tu local',
    },
    // Hero
    hero: {
      title: 'Envía dinero de forma fácil y segura',
      subtitle: 'Te ayudamos a enviar tu dinero sin complicaciones. Atención directa en tu barrio.',
      cta: 'Encuentra tu local',
      learnMore: 'Más información',
    },
    // Locations
    locations: {
      title: 'Nuestras ubicaciones',
      subtitle: 'Encuentra el local más cercano a ti',
      viewLocation: 'Ver local',
      call: 'Llamar',
      whatsapp: 'WhatsApp',
      directions: 'Cómo llegar',
      schedule: 'Horario',
      phone: 'Teléfono',
      address: 'Dirección',
      services: 'Servicios disponibles',
      openInMaps: 'Abrir en Maps',
    },
    // Services
    services: {
      title: 'Nuestros servicios',
      subtitle: 'Todo lo que necesitas para tus envíos',
      moneyTransfer: 'Envíos de Dinero',
      moneyTransferDesc: 'Envía dinero a tus seres queridos de forma rápida y segura a cualquier parte del mundo.',
      localTransfer: 'Transferencias Locales',
      localTransferDesc: 'Recibe y envía dinero dentro de España con las mejores tarifas del mercado.',
      billPayment: 'Pago de Servicios',
      billPaymentDesc: 'Paga tus facturas y realiza recargas de móvil de forma cómoda y sencilla.',
      currencyExchange: 'Cambio de Divisas',
      currencyExchangeDesc: 'Cambia tu dinero con tipos de cambio competitivos y sin comisiones ocultas.',
    },
    // Trust section
    trust: {
      title: 'Rápido, seguro y cercano',
      subtitle: 'Miles de familias confían en nosotros cada día para enviar dinero a sus seres queridos.',
      cta: 'Contáctanos',
    },
    // Contact
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes alguna pregunta? Escríbenos y te responderemos lo antes posible.',
      name: 'Nombre',
      email: 'Correo electrónico',
      phone: 'Teléfono (opcional)',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      success: '¡Mensaje enviado! Te responderemos pronto.',
      error: 'Error al enviar. Por favor, inténtalo de nuevo.',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      phonePlaceholder: '+34 600 000 000',
      messagePlaceholder: '¿En qué podemos ayudarte?',
    },
    // Footer
    footer: {
      description: 'Tu servicio de confianza para envíos de dinero. Atención cercana en tu barrio.',
      quickLinks: 'Enlaces rápidos',
      legal: 'Legal',
      privacy: 'Privacidad',
      terms: 'Términos',
      cookies: 'Cookies',
      rights: 'Todos los derechos reservados.',
    },
    // Common
    common: {
      loading: 'Cargando...',
      error: 'Error',
      close: 'Cerrar',
      back: 'Volver',
      seeAll: 'Ver todos',
    },
  },
};

// Default language
export const defaultLanguage: Language = 'es';

// Get translation function
export function useTranslation(lang: Language = defaultLanguage) {
  return translations[lang] || translations.es;
}

// Export current translations for direct use
export const t = translations.es;
