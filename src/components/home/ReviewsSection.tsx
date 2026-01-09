import { Star, Quote } from 'lucide-react';
import { t } from '@/lib/i18n';

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'María G.',
    location: 'La Torrassa',
    rating: 5,
    text: 'Siempre envío a Ecuador desde aquí. Muy rápido y el dinero llega el mismo día. El personal es muy amable.',
    service: 'Western Union',
    date: 'Hace 2 semanas',
  },
  {
    id: '2',
    name: 'Carlos R.',
    location: 'Collblanc',
    rating: 5,
    text: 'Llevo años usando este local para enviar a Colombia. Nunca he tenido ningún problema, muy profesionales.',
    service: 'Transferencia internacional',
    date: 'Hace 1 mes',
  },
  {
    id: '3',
    name: 'Fatima B.',
    location: 'Miraflores',
    rating: 5,
    text: 'Muy buen servicio. Me explicaron todo el proceso para enviar a Marruecos. El dinero llegó sin problemas.',
    service: 'Ria Money Transfer',
    date: 'Hace 3 semanas',
  },
  {
    id: '4',
    name: 'Jorge L.',
    location: 'La Torrassa',
    rating: 4,
    text: 'Buen horario, están abiertos hasta tarde. Muy conveniente para los que trabajamos.',
    service: 'MoneyGram',
    date: 'Hace 1 semana',
  },
  {
    id: '5',
    name: 'Ana P.',
    location: 'Collblanc',
    rating: 5,
    text: 'Excelente atención. Me ayudaron cuando tuve un problema con un envío. Lo resolvieron enseguida.',
    service: 'Western Union',
    date: 'Hace 2 meses',
  },
  {
    id: '6',
    name: 'Luis M.',
    location: 'Miraflores',
    rating: 5,
    text: 'Local de confianza. Envío dinero a Bolivia cada mes y nunca falla. Muy recomendable.',
    service: 'Transferencia internacional',
    date: 'Hace 1 mes',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'fill-star text-star' : 'fill-star-muted text-star-muted'
          }`}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="section-padding bg-muted/40 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 space-y-3">
          <h2 className="opacity-0 animate-fade-in">
            {t.reviews.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-100">
            {t.reviews.subtitle}
          </p>
          
          {/* Overall rating summary */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 opacity-0 animate-fade-in animation-delay-200">
            <div className="flex items-center gap-1.5">
              <Star className="h-5 sm:h-6 w-5 sm:w-6 fill-star text-star" />
              <span className="text-xl sm:text-2xl font-bold text-foreground">4.7</span>
            </div>
            <span className="text-sm sm:text-base text-muted-foreground">basado en +180 reseñas</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review, index) => (
            <article
              key={review.id}
              className="bg-card rounded-2xl p-5 sm:p-6 shadow-sm border border-border opacity-0 animate-fade-in relative"
              style={{ animationDelay: `${(index + 3) * 80}ms` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 h-6 sm:h-8 w-6 sm:w-8 text-primary/10" />

              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-semibold text-sm">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-foreground truncate">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-3">
                <StarRating rating={review.rating} />
              </div>

              {/* Review text */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                "{review.text}"
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-lg">
                  {review.service}
                </span>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-0 animate-fade-in animation-delay-700">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-star/10 rounded-full flex items-center justify-center">
              <Star className="h-4 sm:h-5 w-4 sm:w-5 fill-star text-star" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground text-sm">Google Reviews</p>
              <p className="text-xs">Verificadas</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-xs sm:text-sm">WU</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground text-sm">Western Union</p>
              <p className="text-xs">Agente oficial</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-accent/10 rounded-full flex items-center justify-center">
              <span className="text-accent font-bold text-xs sm:text-sm">Ria</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground text-sm">Ria Money</p>
              <p className="text-xs">Autorizado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
