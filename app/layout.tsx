import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Launch Dream — AI Venture Studio | Profitable AI Companies",
  description:
    "Launch Dream is an AI venture studio building focused, profitable AI-powered companies that generate $1M–$5M ARR with teams of 3–5 people. Founded by Nitin Pradhan, former Presidential Appointee and Federal CIO who managed a $3.5B IT portfolio.",
  keywords: [
    "AI venture studio",
    "AI startup studio",
    "profitable AI companies",
    "small AI teams",
    "domain expert equity",
    "AI engineer co-founder",
    "Nitin Pradhan",
    "Launch Dream",
    "federal CIO",
    "presidential appointee",
    "AI SaaS",
    "vertical AI",
    "B2B AI startup",
  ],
  authors: [{ name: "Nitin Pradhan" }],
  creator: "Nitin Pradhan",
  publisher: "Launch Dream LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Launch Dream — AI Venture Studio",
    description:
      "We build profitable AI companies. Small teams. Real revenue. $1M–$5M ARR. Profit-first, always.",
    type: "website",
    url: "https://launchdream.com",
    siteName: "Launch Dream",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Launch Dream — AI Venture Studio",
    description: "We build profitable AI companies. Small teams. Real revenue.",
    creator: "@nitinpradhan",
  },
  alternates: { canonical: "https://launchdream.com" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'><polygon points='18,2 34,28 2,28' fill='none' stroke='%23D4A843' stroke-width='2'/><circle cx='18' cy='14' r='3' fill='%23D4A843'/></svg>" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Launch Dream LLC",
              description: "AI Venture Studio building profitable AI-powered companies",
              url: "https://launchdream.com",
              founder: {
                "@type": "Person",
                name: "Nitin Pradhan",
                jobTitle: "Founder & CEO",
                sameAs: "https://www.linkedin.com/in/nitinpradhan/",
              },
              foundingDate: "2025",
              areaServed: "United States",
            }),
          }}
        />
      </head>
      <body className="font-body bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
