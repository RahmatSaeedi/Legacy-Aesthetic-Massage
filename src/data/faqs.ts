/** General business FAQs — rendered on the homepage and exposed as FAQPage schema. */
export interface Faq {
  q: string;
  a: string;
}

export const generalFaqs: Faq[] = [
  {
    q: 'Where is Legacy Aesthetic located?',
    a: 'We are a private studio in north Edmonton, near 106 Street & 180 Avenue — just off Anthony Henday Drive and 97 Street. The exact address is shared when you book.',
  },
  {
    q: 'What are your hours?',
    a: 'We are open every day, Monday through Sunday, from 9:00 AM to 9:00 PM. Same-day appointments are often available.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'The easiest way is to call or text 587-712-0719. Let us know the service you would like and your preferred time, and we will confirm your spot.',
  },
  {
    q: 'Is this a men’s spa?',
    a: 'Yes — Legacy Aesthetic specializes in massage, skin, and grooming services tailored to men, in a warm, professional, and discreet setting.',
  },
  {
    q: 'Do you offer same-day appointments?',
    a: 'Often, yes. Because we are open 9 AM to 9 PM every day, we can frequently fit you in the same day — just call or text to check availability.',
  },
  {
    q: 'Is the studio private?',
    a: 'Absolutely. Treatments take place one-on-one in a calm, private room, with your comfort and privacy assured throughout.',
  },
];
