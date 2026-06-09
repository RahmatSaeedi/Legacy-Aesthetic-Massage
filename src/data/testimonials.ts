/**
 * Real client testimonials carried over from the previous site.
 * Marked up with Review / AggregateRating schema on the Reviews page.
 *
 * Note: Google rarely shows star rich-results from reviews self-hosted on a
 * business's own site — the real star driver is Google Business Profile reviews.
 * These are still valuable for trust + on-page conversion, and the markup is valid.
 */

export interface Testimonial {
  author: string;
  rating: number;
  quote: string;
  /** Short context line shown under the name. */
  context?: string;
}

export const testimonials: Testimonial[] = [
  {
    author: 'Jason',
    rating: 5,
    context: 'Massage client',
    quote:
      'Amazing experience and amazing massage. I would definitely recommend it to everyone, and I will be going back for more. She made me feel so comfortable and is very professional in what she does. She has changed my outlook on how a body should be taken care of.',
  },
  {
    author: 'Sousan',
    rating: 5,
    context: 'Skin & body client',
    quote:
      'Taz is well experienced and extremely knowledgeable — she is my spa lady! Anybody who knows me knows that since I put Taz in charge of my skin and body, there has been a 180-degree transformation in my complexion.',
  },
  {
    author: 'Hanoosh',
    rating: 5,
    context: 'Massage client',
    quote: 'Best massage therapist in Edmonton. Thank you for the great service!',
  },
];

export const aggregateRating = {
  ratingValue: (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1),
  reviewCount: testimonials.length,
  best: 5,
};
