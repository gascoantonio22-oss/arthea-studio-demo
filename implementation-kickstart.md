# LUMARE Medical Institute – Implementation Kickstart

## Project Overview
Premium medical aesthetic clinic in Madrid. Front-end only prototype with a luxury dark aesthetic that feels **medical excellence wrapped in quiet luxury**—not a beauty salon, medspa template, or generic cosmetic clinic.

**Language:** Spanish (all copy)  
**Stack:** Next.js 16, Tailwind CSS, Lucide React, Framer Motion  
**Key Constraint:** Single CTA across entire site: *"Solicitar una consulta privada"*

---

## 1. Component Hierarchy & Page Structure

### Directory Structure
```
app/
├── layout.tsx                 (root layout with Spanish lang, dark theme setup)
├── page.tsx                   (landing page)
├── contact/
│   └── page.tsx              (contact page)
├── globals.css               (design tokens, typography, base styles)
└── metadata.ts               (SEO config for both pages)

components/
├── layout/
│   ├── Header.tsx            (sticky nav, burger menu on mobile)
│   ├── Footer.tsx            (minimalist footer with Madrid/Marbella, trust line)
│   └── SectionWrapper.tsx     (reusable container for 9 landing sections)
│
├── landing/
│   ├── Hero.tsx              (cinematic dark luxury intro)
│   ├── Filosofia.tsx         (editorial + Dr. Elena de Santis intro)
│   ├── Tratamientos.tsx      (4 elegant cards: Arquitectura Facial, Skin Longevity, etc.)
│   ├── LaExperiencia.tsx      (visual-first privacy & environment focus)
│   ├── ProbasDeAutoridad.tsx  (editorial testimonials + soft credibility)
│   ├── Metodologia.tsx        (clean numbered vertical timeline)
│   ├── FAQ.tsx               (refined collapsible section)
│   └── FinalCTA.tsx          (minimalist high-impact call-to-action)
│
├── contact/
│   ├── ContactIntro.tsx       (concise premium intro)
│   ├── ConsultationForm.tsx   (front-end only form: nombre, email, tratamiento, mensaje)
│   └── LocationSection.tsx    (grayscale map placeholder)
│
├── modal/
│   ├── ConsultationModal.tsx  (refined centered/full-screen modal)
│   └── ConsultationFormContent.tsx (form fields for modal & contact page)
│
├── ui/
│   ├── PremiumButton.tsx      (custom button with premium hover, CTA-specific variant)
│   ├── SectionDivider.tsx     (subtle line or negative space separator)
│   └── [standard shadcn components] (dialog, accordion, input, form, etc.)
└── hooks/
    └── useConsultationModal.ts (modal state management)
```

---

## 2. Design Tokens & Styling System

### Color Palette (3 Colors Only)
```css
/* Premium Dark Medical Aesthetic */
--color-charcoal: #1A1A1A;         /* Deep charcoal – main background */
--color-alabaster: #F9F8F6;        /* Warm alabaster – primary text, accents */
--color-champagne: #D4AF9F;        /* Muted champagne – subtle accent, hovers */
```

### Typography Tokens
```css
/* Headings: Elegant Serif (Cormorant Garamond or equivalent) */
--font-serif: 'Cormorant Garamond', 'Georgia', serif;
--font-weight-heading-regular: 400;
--font-weight-heading-semibold: 600;
--font-size-h1: clamp(2.5rem, 6vw, 4rem);      /* Hero & section titles */
--font-size-h2: clamp(2rem, 4vw, 3rem);        /* Section headings */
--font-size-h3: clamp(1.5rem, 2.5vw, 2rem);    /* Component titles */
--font-size-h4: 1.25rem;                        /* Card titles */

/* Body: Refined Sans-Serif (Inter or Montserrat) */
--font-sans: 'Inter', 'Montserrat', 'Helvetica Neue', sans-serif;
--font-weight-body: 400;
--font-weight-body-medium: 500;
--font-size-body-lg: 1.125rem;                  /* Editorial copy */
--font-size-body-base: 1rem;                    /* Standard body text */
--font-size-body-sm: 0.875rem;                  /* Secondary text, labels */
--line-height-relaxed: 1.6;                     /* Body text line height */
```

### Spacing System
```css
/* Use Tailwind spacing scale consistently */
--gap-xs: 0.5rem;      /* 8px */
--gap-sm: 1rem;        /* 16px */
--gap-md: 1.5rem;      /* 24px */
--gap-lg: 2rem;        /* 32px */
--gap-xl: 3rem;        /* 48px */
--gap-2xl: 4rem;       /* 64px */
--gap-3xl: 6rem;       /* 96px */

/* Section padding (abundant negative space) */
--padding-section-mobile: 2rem;     /* 32px on mobile */
--padding-section-tablet: 3rem;     /* 48px on tablet */
--padding-section-desktop: 4rem;    /* 64px on desktop */
```

### Tailwind Config Overrides
```js
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1A1A',
        alabaster: '#F9F8F6',
        champagne: '#D4AF9F',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Montserrat', 'Helvetica Neue', 'sans-serif'],
      },
      spacing: {
        'section-mobile': '2rem',
        'section-tablet': '3rem',
        'section-desktop': '4rem',
      },
    },
  },
}
```

### globals.css Additions
Replace default theme with LUMARE-specific tokens:
```css
:root {
  --background: #1A1A1A;              /* Deep charcoal */
  --foreground: #F9F8F6;              /* Warm alabaster */
  --accent: #D4AF9F;                  /* Muted champagne */
  --border: #2D2D2D;                  /* Subtle dividers */
  --muted: #4A4A4A;                   /* Muted text */
  --muted-foreground: #B8B8B8;        /* Muted foreground */
  --radius: 0.375rem;                 /* 6px: minimal rounding for medical feel */
}

/* Font imports */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Inter:wght@400;500;600&display=swap');

body {
  font-family: var(--font-sans);
  background-color: var(--background);
  color: var(--foreground);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-serif);
  font-weight: 400;
  letter-spacing: 0.02em;             /* Subtle elegance */
}

/* Premium button reset */
button {
  letter-spacing: 0.05em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 3. Component Architecture Details

### Layout Components

#### Header.tsx
- Sticky header with minimal logo/clinic name
- Navigation hidden on mobile (burger menu via Sheet)
- Links: Home, Servicios (anchor), Metodología (anchor), Contacto
- CTA button: "Solicitar consulta" → opens ConsultationModal
- **Desktop:** Always visible, flex horizontal
- **Mobile:** Hamburger toggle nav, stacked vertical

#### Footer.tsx
- Minimalist: clinic name, "Madrid | Marbella", "Discreción garantizada" trust line
- Legal links: Privacidad, Términos
- No social icons
- Background: slightly lighter charcoal (#2D2D2D) for subtle separation

#### SectionWrapper.tsx (Reusable Container)
```tsx
// Provides consistent padding, max-width, and dark background
<SectionWrapper id="section-id" className="optional-classes">
  {children}
</SectionWrapper>
```
- Max-width: 1200px
- Padding: responsive (2rem mobile, 3rem tablet, 4rem desktop)
- Margin: auto (centered)

---

### Landing Page Sections

#### 1. Hero.tsx
- **Copy:** "La arquitectura del rejuvenecimiento invisible"
- **Body:** 2-3 sentences about medicina regenerativa, natural results, skin longevity
- **CTA:** "Solicitar una consulta privada"
- **Motion:** Fade-in-up staggered for title → subtitle → CTA
- **Visual:** Dark cinematic background (solid dark or very subtle texture, NOT obvious stock photo)
- **Responsive Risk:** Ensure H1 doesn't break awkwardly on mobile; use text-balance
- **Missing:** Hero image placeholder (needs premium aesthetic image, not a beauty model)

#### 2. Filosofia.tsx (Philosophy & Dr. Introduction)
- **Layout:** 2 columns (desktop), 1 column (mobile)
- **Left:** Editorial text about clinic philosophy, approach to regenerative medicine
- **Right:** Introduction of Dr. Elena de Santis, "LUMARE Bespoke Protocol" explanation
- **Copy Tone:** Medical yet accessible, emphasizing personalization & discretion
- **Motion:** Fade-in-up when in viewport
- **Image Placeholder:** Professional portrait of Dr. Elena or clinic interior (NOT generic beauty shot)
- **Responsive Risk:** Column stack on tablet, ensure readability

#### 3. Tratamientos.tsx (4 Treatment Cards)
- **Layout:** Grid (2x2 on desktop, 1 column on mobile)
- **Card Design:** Minimal borders, abundant padding, hover state with champagne accent
- **Cards:**
  1. Arquitectura Facial
  2. Skin Longevity
  3. Protocolos Regenerativos
  4. Reequilibrio de Volumen
- **Copy:** Medical-focused, premium, NOT promotional
- **Motion:** Staggered fade-in for each card
- **Hover:** Subtle background shift to dark-champagne, slight scale (1.02x)
- **Missing:** Icon or minimal visual per card (medical symbols, not beauty clichés)

#### 4. LaExperiencia.tsx (Visual Experience Section)
- **Focus:** Clinic environment, privacy, discretion, premium patient journey
- **Layout:** 60/40 image-text (desktop), stacked (mobile)
- **Copy:** Emphasize architectural details, privacy, calm ambiance
- **Image Placeholder:** Clinic interior, stone textures, minimalist aesthetics
- **Motion:** Parallax or fade-in for image, text fades separately
- **Responsive Risk:** Image aspect ratio must not distort; use aspect-ratio container

#### 5. ProbasDeAutoridad.tsx (Social Proof & Authority)
- **No fake metrics:** Avoid "Top-rated," "100% satisfaction," unverifiable claims
- **Soft Credibility:**
  - "Más de 15 años de dirección médica estética"
  - "Protocolos personalizados"
  - "Enfoque regenerativo y natural"
- **Testimonials:** 2-3 restrained editorial testimonials (not gushing, not with photos if possible)
- **Layout:** Centered, minimal styling, lots of whitespace
- **Motion:** Fade-in staggered for each testimonial
- **Missing:** Actual testimonial text (placeholder copy needed)

#### 6. Metodologia.tsx (Consultation & Treatment Process)
- **Layout:** Vertical numbered timeline (desktop), linear (mobile)
- **Steps:** 
  1. Consulta Privada Inicial
  2. Análisis Personalizado
  3. Plan de Tratamiento
  4. Seguimiento Discreto
- **Copy:** Calm, luxury tone, emphasize privacy
- **Styling:** Numbers in champagne, text in alabaster, subtle dividers
- **Motion:** Number fades in, text slides up with stagger
- **Missing:** Step descriptions/copy for each phase

#### 7. FAQ.tsx (Refined Collapsible)
- **Topics:** Discretion, first consultation, recovery, personalization, long-term care
- **Component:** Accordion (Radix UI)
- **Copy:** Medical accuracy, calm reassurance, no hard-sell
- **Styling:** Minimal, dark background, champagne accent on open state
- **Motion:** Smooth height expansion, no bounce
- **Missing:** Actual Q&A copy

#### 8. FinalCTA.tsx (Minimalist High-Impact)
- **Layout:** Centered, large negative space
- **Copy:** Strong closing statement about consultation
- **Button:** "Solicitar una consulta privada" (same CTA, opens modal)
- **Motion:** Subtle fade-in-up
- **Styling:** Elegant typography, high contrast

---

### Contact Page Components

#### ContactIntro.tsx
- Brief intro explaining the consultation process
- Tone: calm, discreet, premium
- Layout: centered, max-width 800px

#### ConsultationForm.tsx
- **Fields:**
  - nombre (required)
  - email (required, validated)
  - tratamiento o interés principal (required, dropdown or text)
  - mensaje opcional (optional textarea)
- **Front-End Only:** No API submission
- **Styling:** Premium minimal, labels above inputs, generous spacing
- **Validation:** Real-time, subtle error messaging in champagne
- **Motion:** Form elements fade-in-up staggered on mount
- **Missing:** Form submission handling (front-end only confirmation message or redirect)

#### LocationSection.tsx
- **Placeholder:** Grayscale map or map-style section (NOT live map)
- **Copy:** Locations in Madrid and Marbella
- **Styling:** Minimal, no bright colors, fits dark aesthetic

---

### Modal Components

#### ConsultationModal.tsx
- **Trigger:** Any "Solicitar consulta" button across site
- **State:** useConsultationModal hook (context or Zustand)
- **Styling:** Centered, overlay with subtle dark blur (opacity: 0.7)
- **Motion:** Scale fade-in (0.95 → 1), gentle ease-out
- **Content:** ConsultationFormContent
- **Close:** Escape key, outside click, X button
- **Responsive:** Full-screen on mobile, centered modal on desktop

#### ConsultationFormContent.tsx
- Same form fields as contact page
- Reusable between modal & contact page
- No submission logic (front-end only)

---

### Shared UI Components (Custom)

#### PremiumButton.tsx
- **Variants:** primary (CTA), secondary (navigation)
- **Primary:** Charcoal background, alabaster text, champagne border on hover
- **Secondary:** Transparent, alabaster border, alabaster text
- **Styling:** 
  - Padding: px-6 py-3
  - Letter-spacing: 0.05em
  - Rounded: rounded-sm (minimal)
  - Hover: scale 1.02, shadow shift, transition 0.3s ease-out
- **Motion:** Hover state with Framer Motion or CSS transition

#### SectionDivider.tsx
- Subtle 1px line in champagne or muted
- Or: generous negative space as divider
- Usage between major sections

---

## 4. Motion & Animation Rules (Framer Motion)

### Animation Principles
- **No bounce:** cubic-bezier(0.4, 0, 0.2, 1) (standard ease-out)
- **No flashy animations:** Only subtle, purposeful motion
- **Nothing game-like:** Medical aesthetic demands restraint
- **Fade-in-up:** Standard entrance for major sections
- **Staggered children:** 0.1s offset between child elements
- **Hover effects:** Gentle scale 1.02–1.05, shadow shift

### Standard Animations
```tsx
// Fade-in-up on scroll into viewport
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
>

// Staggered children (for cards, list items)
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>

// Hover effect on buttons
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.3 }}
>

// Accordion expansion (smooth height)
<motion.div
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: "auto", opacity: 1 }}
  exit={{ height: 0, opacity: 0 }}
  transition={{ duration: 0.3 }}
>
```

### Motion Risks
- **Stagger timing:** Ensure stagger doesn't exceed ~0.5s total (feels sluggish)
- **Viewport triggers:** `once: true` prevents re-animation; use `amount: 0.2–0.3` for early trigger
- **Mobile performance:** Avoid overly complex animations on low-end devices; test on actual mobile

---

## 5. Responsive Design Risks & Mitigation

### Mobile-First Breakpoints
```
Mobile: < 640px (base)
Tablet: 640px–1024px (md: prefix)
Desktop: > 1024px (lg: prefix)
```

### Specific Risks & Solutions

| Risk | Component | Mitigation |
|------|-----------|-----------|
| H1 hero text wraps awkwardly | Hero.tsx | Use `clamp()` for font size, `text-balance` class |
| Multi-column grid breaks | Tratamientos.tsx | Start 1 col (mobile), 2 col (md), 2×2 (lg) |
| Image aspect ratio distorts | LaExperiencia.tsx | Use `aspect-video` or fixed ratio container |
| Modal full-screen on mobile | ConsultationModal.tsx | Set `w-full h-screen md:w-[600px] md:h-auto` |
| Navigation bar cramped | Header.tsx | Burger menu on mobile, full nav on desktop |
| Padding inconsistency | SectionWrapper.tsx | Use responsive padding classes only |
| Button text overflows | PremiumButton.tsx | Set `whitespace-nowrap`, ensure padding scales |
| FAQ accordion width | FAQ.tsx | Set `max-w-2xl` centered, adjust on mobile |
| Form inputs too wide | ConsultationForm.tsx | Wrap in container with `max-w-md mx-auto` |
| Testimonial cards stack poorly | ProbasDeAutoridad.tsx | Use `grid md:grid-cols-2` for 2-up, not fixed widths |

### Testing Checklist
- [ ] Test viewport at 320px (iPhone SE), 768px (iPad), 1440px (desktop)
- [ ] Verify text readability (especially serif headings)
- [ ] Check image scaling without distortion
- [ ] Ensure buttons are >= 44px touch target
- [ ] Verify no horizontal overflow
- [ ] Test burger menu toggle smoothness

---

## 6. CTA Consistency (Cross-Site Alignment)

### Single CTA Rule
**Every instance of "Solicitar una consulta privada" must:**
1. Trigger the same ConsultationModal
2. Use the same PremiumButton styling
3. Open modal in a consistent, predictable way
4. Include the exact same form (via ConsultationFormContent)

### CTA Locations
1. **Hero.tsx** – Primary hero CTA
2. **Header.tsx** – Sticky nav button (all pages)
3. **FinalCTA.tsx** – Minimalist closing section
4. **ContactIntro.tsx** – Above contact form as alternative
5. **FAQ.tsx** – After last FAQ item (optional "ready to consult?")

### Modal State Management
Use a custom hook to avoid prop drilling:
```tsx
// hooks/useConsultationModal.ts
export function useConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return { isOpen, open, close };
}
```
Or use Context API / Zustand for global modal state.

---

## 7. Premium Dark Medical Aesthetic & Readability

### Key Principles for Premium Feel
- **Abundant negative space:** Don't fill every inch; trust whitespace
- **Minimal ornamentation:** No gradients, no glossy effects, no shadows unless subtle
- **Serif for hierarchy:** Cormorant Garamond conveys luxury & medical credibility
- **Sans-serif for clarity:** Inter/Montserrat keeps body readable & modern
- **Muted accent color:** Champagne (#D4AF9F) adds warmth without loudness
- **Subtle borders:** Use #2D2D2D for dividers, not stark white
- **Minimal rounding:** 6px (rounded-sm) for a clinical, sharp feel
- **High contrast text:** Alabaster (#F9F8F6) on charcoal (#1A1A1A) passes WCAG AAA

### Readability Safeguards
1. **Line Height:** Always 1.5–1.7 for body text (set globally)
2. **Font Sizes:** Min 16px for body, min 14px for secondary text
3. **Contrast Ratio:** Alabaster on charcoal = ~18:1 (excellent)
4. **Letter Spacing:** 0.02em for headings, 0 for body (default)
5. **Line Length:** Max-width 65–75 characters for editorial text (use max-w-2xl)
6. **Dark Mode Only:** Force dark theme; no light mode toggle (per design brief)

### Texture & Visual Depth (Without Excess)
- Background: Solid charcoal, optional very subtle noise texture (20% opacity)
- Cards: Charcoal with #2D2D2D border (1px), not floating shadows
- Hover states: Subtle background shift to #2D2D2D or champagne tint
- No gradients, no gloss, no glossy buttons
- Photos/images: Grayscale or desaturated for minimalism (optional)

---

## 8. Missing Information & Placeholders Needed

### Copy (Spanish Text) Needed
- [ ] Hero tagline & supporting copy (medicina regenerativa focus)
- [ ] Filosofía section text (Dr. Elena bio, LUMARE Protocol explanation)
- [ ] Treatment card copy (4 treatments with medical, non-promotional language)
- [ ] La Experiencia section (clinic, privacy, environment narrative)
- [ ] 2–3 testimonials (editorial, restrained tone)
- [ ] 4 metodología steps with descriptions
- [ ] 5–7 FAQ Q&A pairs
- [ ] Final CTA closing statement
- [ ] Contact intro text

### Visual Assets (Images) Needed
- [ ] Hero background image (premium, cinematic, dark, medical feel; NOT beauty model)
- [ ] Filosofía section: Dr. Elena portrait or clinic interior
- [ ] LaExperiencia image: Premium clinic interior, architectural details
- [ ] Testimonial avatars (optional; can omit for pure editorial feel)
- [ ] Location map section background (grayscale or placeholder)
- [ ] Favicon/logo for LUMARE branding

### Technical Placeholders
- [ ] Form submission behavior (front-end only: show success message, reset form, or redirect to thanks page)
- [ ] Modal close animation (confirm how it should exit)
- [ ] Metadata for SEO (title, description, og:image for both pages)
- [ ] Language attribute set to `lang="es"` in HTML tag
- [ ] Favicon and apple-touch-icon setup

---

## 9. Weak Points & Generic Risk Mitigation

### Potential Salon-Like Generic Feelings (RED FLAGS)
1. **Stock photos of smiling models touching their face** → Use textures, clinic interiors, silhouettes, abstract medical imagery instead
2. **Fake testimonials or fake metrics** → Keep soft ("15+ years," "personalized," "regenerative") or omit
3. **Obvious "copy-paste" template language** → Write bespoke medical-focused copy, not generic beauty blurbs
4. **Loud CTA buttons** → Use subtle champagne accents, minimal text, elegant design
5. **Generic gradient backgrounds** → Solid dark charcoal only
6. **Social proof overload** → Minimize testimonials to 2–3 restrained quotes max
7. **Cheap-looking modal or popup** → Premium centered modal with elegant styling, smooth motion

### Weak Points to Avoid
- ❌ "Join thousands of satisfied patients" (unverifiable, salon-like)
- ❌ "Transform your skin in 30 days" (false claims, not medical)
- ❌ "Expert dermatologists" (use actual names/credentials or omit)
- ❌ "Before & after galleries" (can feel cheap; omit or show only architectural/clinical details)
- ❌ "Special offer / limited time" (not premium, creates urgency clichés)
- ❌ "Trending treatments" (superficial; focus on medical philosophy instead)

### Strength Points to Emphasize
- ✅ **Regenerative medicine philosophy** (science-backed, not beauty-focused)
- ✅ **Personalization & bespoke protocols** (premium, medical)
- ✅ **Discretion & privacy** (medical ethics, luxury service)
- ✅ **Natural results & skin longevity** (realistic, medical, not radical transformation)
- ✅ **Years of medical expertise** (Dr. Elena's background)
- ✅ **Clinic architecture & environment** (elegant, medical, premium setting)

---

## 10. Component Dependencies & Data Flow

### State Management
- **ConsultationModal state:** Global hook or Context
- **Contact form data:** Local component state (no submission to backend)
- **Mobile burger menu:** Local state in Header component

### Prop Drilling Prevention
- Use custom hooks for modal state
- Use React Context for any cross-component data (e.g., modal trigger)
- Avoid deeply nested props; keep components flat

### No API Integration
- Forms do NOT submit to any backend
- Modal simply opens/closes with local state
- No email capture, no CRM logging
- Front-end only validation (email format check, required fields)

---

## 11. Typography System (Font Loading & Implementation)

### Font Setup
```tsx
// layout.tsx
import { Cormorant_Garamond, Inter } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
```

### CSS Variable Setup
```css
/* globals.css */
:root {
  --font-serif: var(--font-serif);  /* Cormorant Garamond */
  --font-sans: var(--font-sans);    /* Inter */
}

h1, h2, h3, h4 { font-family: var(--font-serif); }
body, p, span { font-family: var(--font-sans); }
```

---

## 12. SEO & Metadata

### Root Metadata (layout.tsx)
```tsx
export const metadata: Metadata = {
  title: 'LUMARE Medical Institute | Medicina Estética Regenerativa | Madrid',
  description: 'Consultas privadas en medicina estética regenerativa. Protocolos personalizados y resultados naturales con Dr. Elena de Santis en Madrid y Marbella.',
  keywords: ['medicina estética', 'rejuvenecimiento', 'protocolos regenerativos', 'Madrid', 'Marbella'],
  openGraph: {
    title: 'LUMARE Medical Institute',
    description: 'Medicina estética regenerativa con enfoque natural y discreto.',
    url: 'https://lumare-clinic.es',
    siteName: 'LUMARE',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://lumare-clinic.es',
  },
  robots: 'index, follow',
}
```

### Contact Page Metadata
```tsx
export const metadata: Metadata = {
  title: 'Solicitar Consulta | LUMARE Medical Institute',
  description: 'Contacta con LUMARE para una consulta privada personalizada.',
}
```

---

## 13. Implementation Order (Recommended)

1. **Setup:**
   - [ ] Update layout.tsx with Spanish lang, font imports, dark theme
   - [ ] Update globals.css with LUMARE design tokens
   - [ ] Create tailwind.config.ts with color/font extensions

2. **Core Components:**
   - [ ] Create SectionWrapper.tsx (reusable container)
   - [ ] Create PremiumButton.tsx (custom button)
   - [ ] Create Header.tsx (nav + burger menu)
   - [ ] Create Footer.tsx

3. **Modal:**
   - [ ] Create useConsultationModal.ts hook
   - [ ] Create ConsultationModal.tsx
   - [ ] Create ConsultationFormContent.tsx

4. **Landing Page Sections:**
   - [ ] Hero.tsx
   - [ ] Filosofia.tsx
   - [ ] Tratamientos.tsx
   - [ ] LaExperiencia.tsx
   - [ ] ProbasDeAutoridad.tsx
   - [ ] Metodologia.tsx
   - [ ] FAQ.tsx
   - [ ] FinalCTA.tsx

5. **Landing Page Assembly:**
   - [ ] Create app/page.tsx (import all sections)

6. **Contact Page:**
   - [ ] Create app/contact/page.tsx
   - [ ] Create ContactIntro.tsx
   - [ ] Create LocationSection.tsx
   - [ ] Assemble contact page

7. **Polish:**
   - [ ] Add Framer Motion animations to sections
   - [ ] Test responsive design at all breakpoints
   - [ ] Validate form inputs & error messages
   - [ ] Test modal open/close across all CTAs
   - [ ] Verify CTA consistency
   - [ ] Check contrast ratios for accessibility
   - [ ] Add metadata & SEO tags
   - [ ] Final dark aesthetic review

---

## 14. Final Architecture Summary

```
Landing Page Flow:
Header (nav + CTA) → Hero → Filosofia → Tratamientos → LaExperiencia 
→ ProbasDeAutoridad → Metodologia → FAQ → FinalCTA → Footer

Contact Page Flow:
Header (nav) → ContactIntro → ConsultationForm → LocationSection → Footer

Modal Trigger:
Any CTA button → useConsultationModal → ConsultationModal (centered, premium) 
→ ConsultationFormContent (form only, no submission)

Design System:
Charcoal + Alabaster + Champagne (3 colors only)
Serif (Cormorant) for headings, Sans (Inter) for body
Dark theme only, abundant negative space, minimal rounding
Framer Motion for fade-in-up + stagger (no bounce, no flashiness)
```

---

## 15. Quality Checklist Before Launch

- [ ] **Copy:** All Spanish text is medically credible, not promotional
- [ ] **Colors:** Only 3 colors used; no arbitrary gradients
- [ ] **Typography:** Serif for hierarchy, sans for clarity, proper sizing
- [ ] **Spacing:** Consistent use of spacing scale, abundant negative space
- [ ] **Motion:** All animations are subtle, purposeful, premium-feeling
- [ ] **Responsive:** Tested at 320px, 768px, 1440px (no horizontal scroll)
- [ ] **CTAs:** All "Solicitar consulta" buttons trigger the same modal
- [ ] **Modal:** Premium styling, smooth motion, easy close
- [ ] **Accessibility:** WCAG AAA contrast, semantic HTML, alt text on images
- [ ] **Performance:** Images optimized, no render-blocking scripts
- [ ] **SEO:** Metadata set, canonical URL, Spanish lang attribute
- [ ] **Dark Aesthetic:** Feels medical, not salon-like; no cheap clichés

---

## Notes for Developer

This is a **front-end only, premium medical prototype**. Focus on:
1. Elegant, restrained design (quiet luxury)
2. Medical credibility in language and visuals
3. Consistent dark aesthetic with high contrast
4. Smooth, purposeful motion (Framer Motion)
5. Modular, reusable component architecture
6. CTA consistency across all pages
7. Responsive design that doesn't sacrifice premium feel on mobile

The goal is **Vogue-meets-medicine**, sophisticated, discreet, and clinically precise—never generic, never salon-like.
