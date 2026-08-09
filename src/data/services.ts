import type { ImageMetadata } from 'astro';

// Existing photos pulled from the live site, optimized at build time via <Image>.
import imgSkinMoisturizing from '../assets/images/Moisturizing-massage.jpg';
import imgDeepTissue from '../assets/images/Deep-tissue-massage.jpg';
import imgExfoliation from '../assets/images/Full-body-exfoliation-massage.jpg';
import imgFacial from '../assets/images/Anti-aging-facial.jpg';
import imgHaircut from '../assets/images/Men-haircut.jpg';
import imgWaxing from '../assets/images/Male-waxing.jpg';
import imgCupping from '../assets/images/Cupping.jpg';

export type ServiceCategory = 'Massage' | 'Skin & Body' | 'Grooming';

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  order: number;
  navLabel: string;
  name: string;
  title: string;
  category: ServiceCategory;
  price: string;
  priceNote?: string;
  duration?: string;
  image: ImageMetadata;
  imageAlt: string;
  /** One-line summary for cards + meta-description seed. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  /** Lead paragraph on the service page. */
  intro: string;
  /** Main description paragraphs. */
  body: string[];
  benefits: string[];
  goodFor?: string[];
  /** Optional numbered "what to expect" steps. */
  process?: { step: string; text: string }[];
  faqs: ServiceFaq[];
  keywords: string[];
}

export const services: Service[] = [
  {
    slug: 'skin-moisturizing-massage',
    order: 1,
    navLabel: 'Skin-Moisturizing Massage',
    name: 'Skin-Moisturizing Massage',
    title: 'Relaxation & Skin-Moisturizing Massage',
    category: 'Massage',
    price: '$110',
    priceNote: 'per hour',
    duration: '60 min',
    image: imgSkinMoisturizing,
    imageAlt:
      'Warm aromatic oil being poured during a relaxing skin-moisturizing back massage at Legacy Aesthetic men’s spa in Edmonton',
    summary:
      'A soothing full-body massage with nourishing oils that melts away tension while deeply hydrating the skin.',
    metaTitle: 'Skin-Moisturizing Massage for Men — North Edmonton | Legacy Aesthetic',
    metaDescription:
      'Unwind with a relaxing skin-moisturizing massage at Legacy Aesthetic men’s spa in north Edmonton. Nourishing oils, soothing technique, hydrated skin — $110/hr. Call or text 587-712-0719.',
    intro:
      'Our signature relaxation massage pairs slow, soothing strokes with rich, skin-nourishing oils — so you leave with a calm mind and softer, deeply hydrated skin.',
    body: [
      'A skin-moisturizing massage combines the stress-melting benefits of traditional massage with the deep hydration of premium oils and creams. Warm, nourishing blends are worked into the skin using flowing techniques that ease muscle tension and quiet a busy mind.',
      'It is the perfect reset for men with dry, tired, or weather-worn skin — especially through Edmonton’s long, dry winters. You relax on a heated table in a private, candle-lit room while every knot is gently coaxed away and your skin is replenished from head to toe.',
      'Many clients book this treatment monthly as simple, restorative self-care. It is gentle enough to enjoy regularly, yet effective enough that you will feel the difference the moment you stand up.',
    ],
    benefits: [
      'Eases everyday stress and muscle tension',
      'Deeply hydrates dry, dull, or flaky skin',
      'Improves circulation and skin tone',
      'Promotes deeper, more restful sleep',
      'Leaves skin soft, smooth, and replenished',
    ],
    goodFor: [
      'Men with dry or dehydrated skin',
      'Anyone needing to unwind and de-stress',
      'First-time spa visitors who want something gentle',
    ],
    faqs: [
      {
        q: 'How long is a skin-moisturizing massage?',
        a: 'The standard session is a full 60 minutes at $110. Let us know if you would like to focus on a particular area such as the back, shoulders, or legs.',
      },
      {
        q: 'Is this massage relaxing or firm?',
        a: 'It’s a gentle, relaxing massage focused on calm and deep hydration rather than firm pressure. If you’d prefer deeper work, ask about our deep-tissue massage.',
      },
      {
        q: 'How often should I come?',
        a: 'Once a month is ideal for ongoing relaxation and skin hydration, but it is gentle enough to enjoy as often as you like.',
      },
    ],
    keywords: [
      'relaxation massage Edmonton',
      'mens massage Edmonton',
      'moisturizing massage',
      'mens spa north Edmonton',
    ],
  },

  {
    slug: 'deep-tissue-massage',
    order: 2,
    navLabel: 'Deep-Tissue Massage',
    name: 'Deep-Tissue Massage',
    title: 'Deep-Tissue Massage for Men',
    category: 'Massage',
    price: '$120',
    priceNote: 'per hour · 30 min $75',
    duration: '60 or 30 min',
    image: imgDeepTissue,
    imageAlt:
      'Firm, focused deep-tissue back massage relieving muscle tension at Legacy Aesthetic men’s spa in north Edmonton',
    summary:
      'Firm, focused pressure that targets deep muscle layers to release chronic tension, knots, and pain.',
    metaTitle: 'Deep-Tissue Massage for Men — North Edmonton | Legacy Aesthetic',
    metaDescription:
      'Therapeutic deep-tissue massage in north Edmonton for chronic tension, knots, and sore muscles. Ideal for active men and desk-bound backs. $120/hr ($75/30 min). Text 587-712-0719.',
    intro:
      'A therapeutic massage built to reach the deeper muscle layers — releasing the chronic tension, knots, and stiffness that a lighter massage simply can’t touch.',
    body: [
      'Deep-tissue massage uses slow, firm, targeted pressure to work into the deeper layers of muscle and connective tissue. It helps break down stubborn knots, ease scar tissue and adhesions, and reduce the inflammation behind nagging aches and stiffness.',
      'It is a favourite of active men, weekend athletes, and anyone whose neck, shoulders, and lower back pay the price of long hours at a desk or behind the wheel. Pressure is always matched to your comfort and tailored to your problem areas — tell us where it hurts and we focus there.',
      'Choose a full hour for whole-body relief, or a focused 30-minute session to target one trouble spot such as the upper back and shoulders.',
    ],
    benefits: [
      'Relieves chronic muscle tension and stiffness',
      'Targets stubborn knots and trigger points',
      'Supports faster recovery after training',
      'Eases lower-back and neck pain from desk work',
      'Improves mobility and range of motion',
    ],
    goodFor: [
      'Athletes and active men recovering from training',
      'Desk workers with neck, shoulder & back tension',
      'Anyone with persistent knots or chronic tightness',
    ],
    faqs: [
      {
        q: 'Will a deep-tissue massage hurt?',
        a: 'It should feel like a “good hurt” — firm and effective but never unbearable. We constantly adjust the pressure to your comfort, so always speak up and we will fine-tune it.',
      },
      {
        q: 'What is the difference between the 30 and 60 minute session?',
        a: 'The 30-minute session ($75) is perfect for one focused area like the upper back and shoulders. The 60-minute session ($120) allows full-body work or deeper attention to several areas.',
      },
      {
        q: 'Is it normal to feel sore afterward?',
        a: 'Mild soreness for a day is normal, much like after a workout. Drinking plenty of water and a warm shower afterward helps you feel your best.',
      },
    ],
    keywords: [
      'deep tissue massage Edmonton',
      'deep tissue massage north Edmonton',
      'sports massage Edmonton men',
      'back pain massage Edmonton',
    ],
  },

  {
    slug: 'full-body-exfoliation',
    order: 3,
    navLabel: 'Full-Body Exfoliation',
    name: 'Full-Body Exfoliation',
    title: 'Full-Body Exfoliation Massage (Body Scrub)',
    category: 'Skin & Body',
    price: '$170',
    duration: '60 min',
    image: imgExfoliation,
    imageAlt:
      'Mineral salt body scrub being massaged across the back during a full-body exfoliation treatment at Legacy Aesthetic, Edmonton',
    summary:
      'A luxurious body scrub that sloughs away dull, dead skin to reveal smoother, brighter, healthier skin underneath.',
    metaTitle: 'Full-Body Exfoliation & Body Scrub for Men — Edmonton | Legacy Aesthetic',
    metaDescription:
      'Reveal smoother, brighter skin with a full-body exfoliation massage and body scrub in north Edmonton. Removes dull, dead skin and boosts collagen. $170. Text 587-712-0719.',
    intro:
      'Also known as a body scrub, this indulgent treatment buffs away old, dull skin cells to uncover the soft, healthy, glowing skin underneath.',
    body: [
      'A full-body exfoliation massage combines gentle, mineral-rich scrubs with soothing massage technique. As dead surface cells are polished away, circulation is stimulated and skin renewal accelerates — encouraging collagen production for firmer, more youthful, more elastic skin.',
      'It is the ideal treatment before a special occasion, after a long winter of dry skin, or simply when your skin needs a fresh start. You will feel — and see — the difference immediately: noticeably smoother, brighter, and softer from shoulders to feet.',
      'Your comfort and privacy are always assured throughout the treatment.',
    ],
    benefits: [
      'Removes dull, dead, and flaky skin cells',
      'Reveals visibly smoother, brighter skin',
      'Stimulates circulation and collagen production',
      'Helps prevent ingrown hairs and rough patches',
      'Leaves skin silky-soft and deeply moisturized',
    ],
    process: [
      { step: 'Relax', text: 'Settle in on a warm, comfortable table with your privacy assured.' },
      { step: 'Exfoliate', text: 'Your aesthetician massages a mineral-rich scrub across the body to lift away dull, dead skin.' },
      { step: 'Rinse', text: 'The exfoliant is gently rinsed away, revealing fresh, renewed skin.' },
      { step: 'Moisturize', text: 'A nourishing lotion or oil is massaged in for silky-smooth, hydrated results.' },
    ],
    faqs: [
      {
        q: 'How is this different from a regular massage?',
        a: 'A regular massage focuses on muscle relaxation. A full-body exfoliation focuses on your skin — buffing away dead cells and deeply moisturizing — while still including soothing massage technique throughout.',
      },
      {
        q: 'Will my skin be irritated afterward?',
        a: 'No. We use gentle, quality scrubs and finish with a rich moisturizer, so skin feels soft and calm — not raw. It is suitable for most skin types.',
      },
      {
        q: 'How often should I exfoliate my whole body?',
        a: 'Every four to six weeks keeps skin smooth and renewed without over-exfoliating.',
      },
    ],
    keywords: [
      'body scrub Edmonton',
      'full body exfoliation Edmonton',
      'mens body exfoliation',
      'exfoliation massage Edmonton',
    ],
  },

  {
    slug: 'anti-aging-facial',
    order: 4,
    navLabel: 'Anti-Aging Facial',
    name: 'Anti-Aging Facial',
    title: "Men's Anti-Aging Facial",
    category: 'Skin & Body',
    price: '$150',
    duration: '60 min',
    image: imgFacial,
    imageAlt:
      'Relaxing professional anti-aging facial treatment for men at Legacy Aesthetic spa in north Edmonton',
    summary:
      'A targeted facial that smooths fine lines, boosts collagen, and leaves skin firmer, hydrated, and refreshed.',
    metaTitle: "Men's Anti-Aging Facial — North Edmonton | Legacy Aesthetic",
    metaDescription:
      'A men’s anti-aging facial in north Edmonton that softens fine lines, boosts collagen, and restores firm, hydrated skin. Tailored to men’s skin. $150. Call or text 587-712-0719.',
    intro:
      'A specialized facial designed to combat the visible signs of aging and rejuvenate tired skin — leaving your complexion firmer, smoother, and refreshed.',
    body: [
      'Our anti-aging facial uses advanced techniques and quality products to soften fine lines, boost collagen, and improve elasticity. Cleansing, exfoliation, targeted treatment, and hydration work together to restore a healthy, well-rested look.',
      'Men’s skin is thicker, oilier, and faces daily shaving — so this facial is tailored accordingly. It deep-cleans congested pores, calms shaving irritation, and rehydrates skin that environment and routine have left dull or rough.',
      'Whether you are tackling early signs of aging or simply want a clearer, healthier complexion, you will leave looking refreshed and feeling renewed.',
    ],
    benefits: [
      'Softens the look of fine lines and wrinkles',
      'Boosts collagen and skin elasticity',
      'Deep-cleans pores and calms shaving irritation',
      'Restores hydration and a healthy glow',
      'Tailored to the needs of men’s skin',
    ],
    goodFor: [
      'Men noticing early signs of aging',
      'Dull, tired, or sun-exposed skin',
      'Anyone wanting a clearer, healthier complexion',
    ],
    faqs: [
      {
        q: 'Do facials really benefit men?',
        a: 'Absolutely. Daily shaving, sun, and weather are hard on men’s skin. A facial deep-cleans, calms irritation, and rehydrates — leaving skin clearer, smoother, and healthier.',
      },
      {
        q: 'Is there any downtime?',
        a: 'None. Your skin may look a little flushed and refreshed for an hour or so, then settles into a clear, healthy glow. You can return to your day right away.',
      },
      {
        q: 'How often should I get a facial?',
        a: 'Every four to six weeks is ideal to keep skin clear and maintain anti-aging results, since it matches your skin’s natural renewal cycle.',
      },
    ],
    keywords: [
      'mens facial Edmonton',
      'anti aging facial Edmonton',
      'facial for men north Edmonton',
      'mens skincare Edmonton',
    ],
  },

  {
    slug: 'male-waxing',
    order: 5,
    navLabel: 'Male Waxing',
    name: 'Male Waxing',
    title: 'Male Waxing & Hair Removal',
    category: 'Grooming',
    price: 'From $99',
    priceNote: 'varies by area',
    image: imgWaxing,
    imageAlt:
      'Professional male chest waxing for smooth, clean hair removal at Legacy Aesthetic men’s spa in Edmonton',
    summary:
      'Professional waxing for chest, back, shoulders, and more — smooth, long-lasting, clean-groomed results.',
    metaTitle: 'Male Waxing & Hair Removal — North Edmonton | Legacy Aesthetic',
    metaDescription:
      'Professional male waxing in north Edmonton — chest, back, shoulders, legs and more. Smooth, long-lasting, clean results with minimal discomfort. From $99. Text 587-712-0719.',
    intro:
      'Professional male waxing that removes unwanted hair for a smooth, clean, well-groomed look — with quality wax and an efficient, comfortable technique.',
    body: [
      'Male waxing is a professional hair-removal service that uses high-quality wax to remove unwanted hair from the chest, back, shoulders, legs, and more. The result is smooth, long-lasting, and far cleaner than shaving — with no stubble and no daily upkeep.',
      'Our skilled, discreet technique keeps the process quick and as comfortable as possible, leaving skin soft and hair-free. Ideal for maintaining a clean, polished appearance, waxing also means slower, finer regrowth over time and fewer ingrown hairs than shaving.',
      'Pricing varies by the area treated. Text or call and we will happily quote your specific areas before you book.',
    ],
    benefits: [
      'Smooth, stubble-free results that last for weeks',
      'Finer, slower regrowth over time',
      'Fewer ingrown hairs than shaving',
      'Clean, polished, well-groomed appearance',
      'Discreet, professional, and efficient',
    ],
    goodFor: [
      'Chest, back, shoulders, and stomach',
      'Arms, legs, and underarms',
      'Brows and other detail areas',
    ],
    faqs: [
      {
        q: 'How much does male waxing cost?',
        a: 'Pricing starts at $99 and varies by the area treated. Just text or call 587-712-0719 with the areas you have in mind and we will give you an exact quote.',
      },
      {
        q: 'Does waxing hurt?',
        a: 'There is a brief moment of sensation, but our efficient technique and quality wax keep discomfort to a minimum — and it lessens with repeat visits as hair grows back finer.',
      },
      {
        q: 'How long should the hair be?',
        a: 'About a quarter-inch (roughly two to three weeks of growth) is ideal so the wax can grip the hair properly. Avoid shaving right before your appointment.',
      },
    ],
    keywords: [
      'male waxing Edmonton',
      'mens waxing Edmonton',
      'back waxing Edmonton',
      'chest waxing north Edmonton',
    ],
  },

  {
    slug: 'mens-haircut',
    order: 6,
    navLabel: "Men's Haircut",
    name: "Men's Haircut",
    title: "Men's Haircut & Styling",
    category: 'Grooming',
    price: '$55',
    duration: '45 min',
    image: imgHaircut,
    imageAlt:
      'Precise men’s haircut with comb and scissors creating a sharp, clean style at Legacy Aesthetic, Edmonton',
    summary:
      'Sharp, tailored cuts — classic or contemporary — finished in a relaxed, unhurried setting.',
    metaTitle: "Men's Haircut & Styling — North Edmonton | Legacy Aesthetic",
    metaDescription:
      'A precise men’s haircut tailored to your look — classic or contemporary — in a calm, private north Edmonton studio. Sharp, clean results. $55. Call or text 587-712-0719.',
    intro:
      'Discover the precision and style of a men’s haircut tailored to your look — sharp, clean results delivered in a relaxed, unhurried setting.',
    body: [
      'Whether you need a quick trim or a complete restyle, you will get a cut tailored to your face, hair type, and personal style. Expect clean lines, careful blending, and a finish that is easy to maintain at home.',
      'There is no rushed barbershop conveyor belt here — just focused attention in a calm, private room. Pair your cut with a facial or massage and turn a simple grooming appointment into a genuine reset.',
      'Leave feeling confident, polished, and looking your best. Book today for a fresh, stylish haircut that turns heads.',
    ],
    benefits: [
      'Classic and contemporary styles',
      'Tailored to your face shape and hair type',
      'Clean lines and careful blending',
      'A calm, private, unhurried experience',
      'Easy-to-maintain finish',
    ],
    faqs: [
      {
        q: 'Can I combine a haircut with another service?',
        a: 'Yes — many clients pair a haircut with a facial, massage, or waxing for a complete grooming reset. Mention it when you book so we can set aside enough time.',
      },
      {
        q: 'Do I need to book ahead?',
        a: 'Booking ahead is best to guarantee your time, but same-day appointments are often available. Just call or text 587-712-0719.',
      },
    ],
    keywords: [
      'mens haircut Edmonton',
      'mens haircut north Edmonton',
      'barber north Edmonton',
      'mens grooming Edmonton',
    ],
  },

  {
    slug: 'cupping-therapy',
    order: 7,
    navLabel: 'Cupping Therapy',
    name: 'Cupping Therapy',
    title: 'Cupping Therapy',
    category: 'Skin & Body',
    price: 'Varies',
    image: imgCupping,
    imageAlt:
      'Glass cupping therapy applied to the back to relieve muscle tension and improve circulation at Legacy Aesthetic, Edmonton',
    summary:
      'Ancient suction therapy that relieves muscle tension, boosts circulation, and supports overall well-being.',
    metaTitle: 'Cupping Therapy for Men — North Edmonton | Legacy Aesthetic',
    metaDescription:
      'Experience cupping therapy in north Edmonton — relieve muscle tension, improve circulation, and support recovery. Often paired with massage. Text 587-712-0719 to book.',
    intro:
      'Experience the time-honoured healing of cupping therapy — gentle suction that releases deep muscle tension, improves circulation, and promotes overall well-being.',
    body: [
      'Cupping uses special cups to create gentle suction on the skin, drawing blood flow to the area to release tight fascia and stubborn muscle tension that hands alone can’t always reach. Many men find it especially effective across the back and shoulders.',
      'It is a wonderful complement to deep-tissue massage for recovery, mobility, and relaxation. Cupping can leave temporary circular marks that fade within a few days — a normal part of the increased circulation the therapy creates.',
      'Cupping is often added to a massage session. Let us know you are interested and we will tailor your treatment and confirm pricing.',
    ],
    benefits: [
      'Releases deep muscle and fascia tension',
      'Improves local circulation and blood flow',
      'Supports recovery and mobility',
      'Pairs perfectly with deep-tissue massage',
      'Deeply relaxing',
    ],
    faqs: [
      {
        q: 'Do the cupping marks hurt or last long?',
        a: 'The round marks are not bruises and are not painful — they come from increased circulation and typically fade within a few days.',
      },
      {
        q: 'Can I add cupping to a massage?',
        a: 'Yes, that is the most popular way to enjoy it. Mention it when you book and we will build it into your session.',
      },
    ],
    keywords: [
      'cupping therapy Edmonton',
      'cupping massage Edmonton',
      'cupping north Edmonton',
    ],
  },

  {
    slug: 'acne-therapy',
    order: 8,
    navLabel: 'Acne Therapy',
    name: 'Acne Therapy',
    title: 'Acne Therapy & Clear-Skin Treatment',
    category: 'Skin & Body',
    price: 'Varies',
    image: imgFacial,
    imageAlt:
      'Targeted acne therapy facial treatment to calm breakouts and clear skin at Legacy Aesthetic men’s spa, Edmonton',
    summary:
      'Targeted treatments that reduce breakouts, calm inflammation, and help restore clearer, healthier skin.',
    metaTitle: 'Acne Therapy for Men — North Edmonton | Legacy Aesthetic',
    metaDescription:
      'Targeted acne therapy in north Edmonton to reduce breakouts, calm inflammation, and clear congested skin. Tailored to men’s skin. Text 587-712-0719 to book a consultation.',
    intro:
      'Achieve clearer, healthier skin with targeted acne therapy that reduces breakouts, soothes inflammation, and helps prevent future flare-ups.',
    body: [
      'Our acne treatments deep-clean congested pores, lift away the build-up that fuels breakouts, and calm the redness and inflammation that come with them. Each session is tailored to your skin and the areas giving you trouble — face, back, or shoulders.',
      'Men’s skin produces more oil and faces daily shaving, which can aggravate breakouts and cause irritation. Professional, consistent care helps bring it under control while keeping skin balanced rather than stripped and dry.',
      'For best results, acne therapy works as a short series of sessions. Text or call for a quick consultation and pricing tailored to your skin.',
    ],
    benefits: [
      'Reduces and helps prevent breakouts',
      'Deep-cleans and decongests pores',
      'Calms redness and inflammation',
      'Targets facial and body (back/shoulder) acne',
      'Keeps skin balanced, not stripped',
    ],
    goodFor: [
      'Persistent facial breakouts',
      'Back and shoulder (“bacne”) breakouts',
      'Congested or oily, shaving-irritated skin',
    ],
    faqs: [
      {
        q: 'Can you treat back and shoulder acne?',
        a: 'Yes. Body acne on the back and shoulders is common in men and responds well to professional deep-cleansing treatments.',
      },
      {
        q: 'How many sessions will I need?',
        a: 'Acne responds best to a short series of regular treatments paired with good home care. We will recommend a simple plan after assessing your skin.',
      },
    ],
    keywords: [
      'acne treatment Edmonton',
      'mens acne facial Edmonton',
      'back acne treatment Edmonton',
    ],
  },

  {
    slug: 'dark-patch-removal',
    order: 9,
    navLabel: 'Dark-Patch Removal',
    name: 'Dark-Patch Removal',
    title: 'Dark-Patch Removal & Skin-Tone Treatment',
    category: 'Skin & Body',
    price: 'Varies',
    image: imgExfoliation,
    imageAlt:
      'Skin-renewing treatment to even out dark patches and uneven tone at Legacy Aesthetic men’s spa in Edmonton',
    summary:
      'Specialized treatments that lighten dark patches and even out uneven skin tone for a clearer complexion.',
    metaTitle: 'Dark-Patch & Hyperpigmentation Treatment — Edmonton | Legacy Aesthetic',
    metaDescription:
      'Even out dark patches, hyperpigmentation, and uneven skin tone with specialized treatments in north Edmonton. For a clearer, more uniform complexion. Text 587-712-0719.',
    intro:
      'Say goodbye to dark patches and uneven skin tone. Our specialized treatments gently lighten discolouration and restore a clearer, more uniform complexion.',
    body: [
      'Dark patches and hyperpigmentation can come from sun exposure, shaving irritation, ingrown hairs, or old blemishes. Our treatments combine gentle exfoliation and brightening care to fade discolouration and encourage fresh, evenly toned skin to surface.',
      'Whether it is shadowing around the beard line, marks left by past breakouts, or sun-related spots, a tailored plan helps your skin look clearer and more even over time. Results build gradually and look natural.',
      'Because every case is different, this treatment starts with a short consultation so we can recommend the right approach and confirm pricing.',
    ],
    benefits: [
      'Fades dark patches and discolouration',
      'Evens out overall skin tone',
      'Smooths and renews skin texture',
      'Targets sun spots, post-acne marks & beard-line shadowing',
      'Natural, gradual, lasting results',
    ],
    goodFor: [
      'Uneven tone or hyperpigmentation',
      'Marks left behind by past breakouts',
      'Sun spots and beard-line discolouration',
    ],
    faqs: [
      {
        q: 'How long until I see results?',
        a: 'Skin renews gradually, so improvements build over a series of treatments. We will set realistic expectations and a plan during your consultation.',
      },
      {
        q: 'Is the treatment gentle?',
        a: 'Yes — we use a measured, professional approach that brightens and renews without harshly irritating the skin.',
      },
    ],
    keywords: [
      'dark spot removal Edmonton',
      'hyperpigmentation treatment Edmonton',
      'skin tone treatment men Edmonton',
    ],
  },
];

/** Lookup + grouping helpers used across pages and the nav. */
export const servicesByOrder = [...services].sort((a, b) => a.order - b.order);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceCategories: ServiceCategory[] = ['Massage', 'Skin & Body', 'Grooming'];

export function servicesInCategory(category: ServiceCategory): Service[] {
  return servicesByOrder.filter((s) => s.category === category);
}
