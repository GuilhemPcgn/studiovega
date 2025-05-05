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

export const metadata: Metadata = {
  title: 'Portfolio Développeur Web Fullstack',
  description: 'Portfolio professionnel présentant mes projets et services de développement web fullstack',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Loader />
          <SmoothScroll>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </SmoothScroll>
          <Toaster />
          <Analytics /> {/* ← GA4 suivi des changements de page */}
        </ThemeProvider>
      </body>
    </html>
  );
}
