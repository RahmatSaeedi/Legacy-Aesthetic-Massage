# Legacy Aesthetic Men's Spa — Website

Marketing site for **Legacy Aesthetic Men's Spa** (north Edmonton). Built with
[Astro](https://astro.build), output as a fast static site, hosted free on
**GitHub Pages** with **Cloudflare** DNS/CDN in front.

Engineered for local SEO: unique titles & meta descriptions on every page,
full structured data (LocalBusiness/DaySpa, Service, FAQ, Review, Breadcrumb),
an auto sitemap, optimized images (WebP/AVIF), and a blog for long-tail search.

---

## Quick start

```bash
npm install        # install dependencies (first time only)
npm run dev        # local preview at http://localhost:4321
npm run build      # production build into /dist
npm run preview    # preview the production build locally
npm run assets     # regenerate og-image, favicons & logo (after changing source art)
```

Requires Node 20+ (LTS recommended).

---

## Editing content (no deep coding needed)

Almost everything lives in **`src/data/`** — change it there and it updates across
the whole site (pages, menus, footer, and Google structured data stay in sync).

| To change… | Edit |
| --- | --- |
| Phone, address, hours, social links, map | `src/data/business.ts` |
| Services, prices, descriptions, FAQs | `src/data/services.ts` |
| Customer testimonials | `src/data/testimonials.ts` |
| Homepage FAQ | `src/data/faqs.ts` |
| Blog posts | add a `.md` file in `src/content/blog/` |
| Colors / fonts / spacing | `src/styles/global.css` (`:root` tokens) |
| Photos | `src/assets/images/` |

After editing, run `npm run dev` to preview, then commit & push to deploy.

### Adding a blog post
Create `src/content/blog/my-post.md`:

```markdown
---
title: 'Your headline'
description: 'One-sentence summary for search results.'
pubDate: 2026-07-01
heroImage: ../../assets/images/Massage_2.jpg
heroAlt: 'Describe the image for accessibility & SEO'
---

Your article in Markdown. Link to services like [deep-tissue massage](/services/deep-tissue-massage/).
```

---

## Project structure

```
public/                 CNAME, robots.txt, favicons, og-image, logo, manifest
scripts/                generate-assets.mjs (og image + icons via sharp)
src/
  assets/images/        photos (optimized at build by <Image>)
  data/                 business, services, testimonials, faqs  ← edit these
  components/           Header, Footer, ServiceCard, Faq, etc.
  components/seo/        Seo + JSON-LD schema (LocalBusiness, Service, FAQ, Breadcrumb)
  layouts/BaseLayout.astro
  content/blog/*.md     blog posts
  pages/                index, about, contact, reviews, 404,
                        services/[slug], blog/[...slug]
  styles/global.css     design tokens + base styles
.github/workflows/deploy.yml   auto build + deploy to GitHub Pages
astro.config.mjs        site URL + sitemap
```

---

## Deployment

### 1. Push to GitHub
Create a repository and push this project to the **`main`** branch.

### 2. Enable GitHub Pages
Repo **Settings → Pages → Build and deployment → Source = GitHub Actions**.
The included workflow (`.github/workflows/deploy.yml`) builds and deploys on every
push to `main`. `public/CNAME` keeps the custom domain pinned.

### 3. Point Cloudflare DNS at GitHub Pages
In Cloudflare DNS for `legacy-massage.ca`:

| Type | Name | Content |
| --- | --- | --- |
| CNAME | `www` | `<your-github-username>.github.io` |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

- Set **SSL/TLS → Overview → Full** (not Flexible) to avoid redirect loops.
- In GitHub **Settings → Pages**, set the custom domain to `legacy-massage.ca` and
  enable **Enforce HTTPS** once the certificate is issued.
- You can keep Cloudflare proxy (orange cloud) **on**; if HTTPS is slow to issue,
  temporarily switch to DNS-only (grey cloud) until GitHub provisions the cert.

### 4. Preserve old URLs (IMPORTANT for SEO)
The previous site used `.html` URLs that Google has already indexed. Add these
**301 redirects** in Cloudflare → **Rules → Redirect Rules** (or Bulk Redirects)
so existing ranking and links carry over:

| Old URL | → New URL |
| --- | --- |
| `/Relaxation-skin-moisturizing.html` | `/services/skin-moisturizing-massage/` |
| `/Deep-tissue-massage.html` | `/services/deep-tissue-massage/` |
| `/Full-body-exfoliation-massage.html` | `/services/full-body-exfoliation/` |
| `/Anti-aging-facial.html` | `/services/anti-aging-facial/` |
| `/Male-waxing.html` | `/services/male-waxing/` |
| `/Men-s-haircut.html` | `/services/mens-haircut/` |
| `/Cupping---Acne-Therapy--Dark-Patch-Removal.html` | `/services/cupping-therapy/` |

(Acne therapy and dark-patch removal now have their own dedicated pages at
`/services/acne-therapy/` and `/services/dark-patch-removal/`.)

Use status **301 (Permanent)**.

---

## Post-launch SEO checklist

Do these once the site is live — they drive the "show up everywhere on Google" goal:

1. **Google Search Console** — verify `legacy-massage.ca`, submit
   `https://legacy-massage.ca/sitemap-index.xml`. Confirm the old→new redirects.
2. **Google Business Profile** (biggest local-SEO lever):
   - Categories: *Massage therapist* (primary), *Day spa*, *Waxing hair removal
     service*, *Barber*.
   - Add every service + price, real photos, hours (9 AM–9 PM daily), and the
     phone `587-712-0719`.
   - Post weekly updates and answer the Q&A section.
   - Build a steady stream of reviews — this is what wins the Map Pack.
3. **Citations / NAP consistency** — make name, address & phone identical on
   Yelp, Facebook, Fresha, Bing Places, and Apple Business Connect.
4. **Analytics** — add free, cookieless **Cloudflare Web Analytics** (no consent
   banner needed) or Google Analytics 4.
5. **Bing Webmaster Tools** — submit the sitemap there too.

### Before-launch TODOs in the code
- `src/data/business.ts` → replace the **approximate `geo` lat/lng** with the exact
  coordinates from your Google Business Profile.
- `src/pages/reviews.astro` → swap `googleReviewUrl` for your GBP **"write a review"**
  short link once the profile is live.
- Add a real **email** in `business.ts` if you want one shown.

---

## Future phases (not built yet)

- **Online gift-card / prepaid-package shop** (Stripe checkout via a free Cloudflare
  Worker) + a **Google Merchant Center** feed — the legitimate path to **Google
  Shopping** listings, since bare appointments don't qualify as products.
- **Booking-request form** backed by a Cloudflare Worker that emails submissions.
