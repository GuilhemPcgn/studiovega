import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import SmoothScroll from '@/components/smooth-scroll';
import Loader from '@/components/loader';
import Script from 'next/script'; // ← GA4
import Analytics from '@/components/analytics'; // ← GA4 (à créer)

const inter = Inter({ subsets: ['latin'] });

const siteUrl = 'https://studiovega.dev';
const siteName = 'Studio Vega';
const siteDescription =
  "Studio Vega, l'activité freelance de Guilhem Poincignon : sites vitrines, applications web et projets fullstack en Next.js, React et Node.js.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Développeur Web Fullstack`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'développeur web fullstack',
    'développeur web freelance',
    'Next.js',
    'React',
    'TypeScript',
    'création de site vitrine',
    'application web sur mesure',
  ],
  authors: [{ name: 'Guilhem Poincignon' }],
  creator: 'Guilhem Poincignon',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName,
    title: `${siteName} — Développeur Web Fullstack`,
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} — Développeur Web Fullstack`,
    description: siteDescription,
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Guilhem Poincignon',
  alternateName: 'Studio Vega',
  url: siteUrl,
  jobTitle: 'Développeur Web Fullstack',
  email: 'contact@studiovega.dev',
  sameAs: [
    'https://github.com/GuilhemPcgn',
    'https://www.linkedin.com/in/guilhempcgn/',
    'https://www.instagram.com/madcat_music/',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {/* Google Analytics script loader */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4R4Y4W8KJW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4R4Y4W8KJW', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
          <Loader />
          <SmoothScroll>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </SmoothScroll>
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
