# Launch Dream — Website

High-conviction AI venture studio website built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email**: Resend API
- **Deployment**: Vercel (recommended)
- **Fonts**: Cormorant Garamond + Syne + JetBrains Mono (Google Fonts)

---

## Project Structure

```
launch-dream/
├── app/
│   ├── layout.tsx          # Root layout with metadata & fonts
│   ├── page.tsx            # Main page assembling all sections
│   ├── globals.css         # Global styles, CSS variables, animations
│   └── api/
│       └── apply/
│           └── route.ts    # Form submission API (Resend)
├── components/
│   ├── Navigation.tsx      # Sticky nav with blur
│   ├── Hero.tsx            # Full-screen hero
│   ├── WhySmall.tsx        # The thesis
│   ├── WhatWeBuild.tsx     # Five company types (interactive)
│   ├── WhyWeWin.tsx        # Contrast table
│   ├── Founder.tsx         # Nitin Pradhan section
│   ├── OurModel.tsx        # How we structure ventures
│   ├── WhoWereLookingFor.tsx # Profiles + equity ranges
│   ├── Portfolio.tsx       # Three ventures
│   ├── Resources.tsx       # Filterable tools grid
│   ├── ApplicationForm.tsx # Working form with Resend
│   ├── FinalCTA.tsx        # Closing statement
│   └── Footer.tsx          # Minimal footer
├── data/
│   └── resources.ts        # Resource/tool data
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── .env.local.example
```

---

## Quick Start

### 1. Install dependencies

```bash
cd launch-dream
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```env
RESEND_API_KEY=re_your_api_key_here
NOTIFICATION_EMAIL=pradhan@gmail.com
```

**Getting your Resend API key:**
1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys → Create API Key
3. Paste it into `.env.local`

**Domain setup for Resend:**
1. In Resend, go to Domains → Add Domain
2. Add `launchdream.com` and follow DNS verification
3. Update the `from:` addresses in `app/api/apply/route.ts` to use your verified domain

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Vercel Deployment

### Option A: CLI (fastest)

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option B: GitHub Integration (recommended for production)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY` → your Resend API key
   - `NOTIFICATION_EMAIL` → where to receive applications

5. Deploy

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for email delivery | Yes |
| `NOTIFICATION_EMAIL` | Email to receive application notifications | Yes |

---

## Customization

### Adding resources
Edit `data/resources.ts` — add new objects to the array following the existing schema.

### Updating portfolio
Edit `components/Portfolio.tsx` — update the `ventures` array.

### Changing the founder section
Edit `components/Founder.tsx` — update credentials and copy.

### Colors & typography
All design tokens are in `tailwind.config.ts`. Core colors:
- `gold`: `#C9A84C` — primary accent
- `background`: `#080808`
- `text-primary`: `#F0EDE6`

---

## Design Notes

- **Dark-first** with warm gold accents
- **Typography**: Cormorant Garamond (display/editorial serif) + Syne (geometric UI sans) + JetBrains Mono (data labels)
- **Motion**: Framer Motion with `useInView` scroll triggers — all animations run once
- **Grain texture**: CSS SVG filter in `globals.css` body::before — very subtle
- **No external UI libraries** — all components are custom built

---

## License

Private — Launch Dream LLC
