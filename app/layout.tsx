import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "../lib/context";
import { COMPANY_CONFIG } from "../lib/company-config";

export const metadata: Metadata = {
  title: `${COMPANY_CONFIG.name} - ${COMPANY_CONFIG.fullName}`,
  description: COMPANY_CONFIG.description,
  keywords: [
    'детейлинг',
    'автодетейлинг', 
    'тонировка',
    'керамическое покрытие',
    'полировка',
    'Шымкент',
    'S3 DETAILING',
    'премиум детейлинг',
    'защита кузова',
    'химчистка авто'
  ],
  authors: [{ name: COMPANY_CONFIG.name }],
  creator: COMPANY_CONFIG.name,
  publisher: COMPANY_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: COMPANY_CONFIG.fullName,
    description: COMPANY_CONFIG.description,
    url: 'https://s3detailing.kz',
    siteName: COMPANY_CONFIG.name,
    locale: 'ru_KZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: COMPANY_CONFIG.fullName,
    description: COMPANY_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
