// Location data with real store information

import collblancImg from '@/assets/locations/collblanc.png';
import laTorrassaImg from '@/assets/locations/la-torrassa.png';

export interface Location {
  id: string;
  slug: string;
  neighborhood: string;
  name: string;
  address: string;
  fullAddress: {
    street: string;
    postalCode: string;
    city: string;
    province: string;
    country: string;
  };
  phone: string;
  whatsapp?: string;
  web?: string;
  instagram?: string;
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
    notes?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  services: string[];
  image?: string;
  googleRating?: {
    score: number;
    reviews: number;
  };
}

export const locations: Location[] = [
  {
    id: '1',
    slug: 'la-torrassa',
    neighborhood: 'La Torrassa',
    name: 'Locutorio Globalexs Torrassa',
    address: 'Carrer Almeria, 8, Local 2, 08905 L\'Hospitalet de Llobregat',
    fullAddress: {
      street: 'Carrer Almeria, 8, Local 2',
      postalCode: '08905',
      city: 'L\'Hospitalet de Llobregat',
      province: 'Barcelona',
      country: 'España',
    },
    phone: '664 57 33 20',
    whatsapp: '664573320',
    web: 'https://globalexs.mgpsa.com',
    schedule: {
      weekdays: '10:00 – 21:30',
      saturday: '10:00 – 21:30',
      sunday: 'Cerrado',
      notes: 'El horario podría cambiar en festivos',
    },
    coordinates: {
      lat: 41.3596,
      lng: 2.1137,
    },
    services: [
      'Envíos de dinero Western Union',
      'Envíos de dinero Ria',
      'Envíos de dinero MoneyGram',
      'Servicios de locutorio',
    ],
    image: laTorrassaImg,
    googleRating: {
      score: 4.8,
      reviews: 134,
    },
  },
  {
    id: '2',
    slug: 'miraflores',
    neighborhood: 'Miraflores',
    name: 'Envíos Miraflores',
    address: 'Avinguda Miraflores, 33, Local 4, 08905 L\'Hospitalet de Llobregat',
    fullAddress: {
      street: 'Avinguda Miraflores, 33, Local 4',
      postalCode: '08905',
      city: 'L\'Hospitalet de Llobregat',
      province: 'Barcelona',
      country: 'España',
    },
    phone: '643 91 22 25',
    whatsapp: '643912225',
    schedule: {
      weekdays: 'Consultar en el local',
      saturday: 'Consultar en el local',
      sunday: 'Cerrado',
    },
    coordinates: {
      lat: 41.3650,
      lng: 2.1050,
    },
    services: [
      'Envíos de dinero',
      'Servicios de locutorio',
    ],
  },
  {
    id: '3',
    slug: 'collblanc',
    neighborhood: 'Collblanc',
    name: 'Western Union Agencia Oficial Collblanc',
    address: 'Carrer Progrés, 49, Local 2, 08904 L\'Hospitalet de Llobregat',
    fullAddress: {
      street: 'Carrer Progrés, 49, Local 2',
      postalCode: '08904',
      city: 'L\'Hospitalet de Llobregat',
      province: 'Barcelona',
      country: 'España',
    },
    phone: '634 09 49 68',
    whatsapp: '634094968',
    instagram: 'https://instagram.com',
    schedule: {
      weekdays: '10:00 – 21:00',
      saturday: '10:00 – 21:00',
      sunday: 'Cerrado',
      notes: 'El horario podría cambiar en festivos',
    },
    coordinates: {
      lat: 41.3750,
      lng: 2.1180,
    },
    services: [
      'Transferencias de dinero Western Union',
    ],
    image: collblancImg,
    googleRating: {
      score: 4.6,
      reviews: 48,
    },
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}

export function getLocationById(id: string): Location | undefined {
  return locations.find((loc) => loc.id === id);
}
