// Location data - Replace with real data when available

export interface Location {
  id: string;
  slug: string;
  neighborhood: string;
  name: string;
  address: string;
  phone: string;
  whatsapp?: string;
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  services: string[];
  image?: string;
}

export const locations: Location[] = [
  {
    id: '1',
    slug: 'la-torrassa',
    neighborhood: 'La Torrassa',
    name: 'Locutorio Globalexs',
    address: 'Dirección pendiente, L\'Hospitalet de Llobregat',
    phone: '+34 600 000 001',
    whatsapp: '+34 600 000 001',
    schedule: {
      weekdays: '09:00 - 21:00',
      saturday: '10:00 - 14:00',
      sunday: 'Cerrado',
    },
    coordinates: {
      lat: 41.3596,
      lng: 2.1137,
    },
    services: ['Envíos de Dinero', 'Transferencias Locales', 'Pago de Servicios', 'Recargas'],
  },
  {
    id: '2',
    slug: 'miraflores',
    neighborhood: 'Miraflores',
    name: 'Envíos Miraflores',
    address: 'Dirección pendiente, L\'Hospitalet de Llobregat',
    phone: '+34 600 000 002',
    whatsapp: '+34 600 000 002',
    schedule: {
      weekdays: '09:00 - 21:00',
      saturday: '10:00 - 14:00',
      sunday: 'Cerrado',
    },
    coordinates: {
      lat: 41.3650,
      lng: 2.1050,
    },
    services: ['Envíos de Dinero', 'Transferencias Locales', 'Pago de Servicios', 'Cambio de Divisas'],
  },
  {
    id: '3',
    slug: 'collblanc',
    neighborhood: 'Collblanc',
    name: 'Western Union Collblanc',
    address: 'Dirección pendiente, L\'Hospitalet de Llobregat',
    phone: '+34 600 000 003',
    whatsapp: '+34 600 000 003',
    schedule: {
      weekdays: '09:00 - 20:00',
      saturday: '10:00 - 14:00',
      sunday: 'Cerrado',
    },
    coordinates: {
      lat: 41.3750,
      lng: 2.1180,
    },
    services: ['Envíos de Dinero', 'Transferencias Locales', 'Pago de Servicios', 'Recargas', 'Cambio de Divisas'],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}

export function getLocationById(id: string): Location | undefined {
  return locations.find((loc) => loc.id === id);
}
