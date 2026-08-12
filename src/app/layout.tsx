import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/shared/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const baseUrl = 'https://www.ahadufinancial.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Ahadu Financial Solutions | Accounting, Tax & Advisory in Ethiopia',
    template: '%s | Ahadu Financial Solutions',
  },
  description: 'Ahadu Financial Solutions (አሐዱ) is an Ethiopia-based accounting, financial management, payroll administration, tax support, and business advisory firm founded by Arsema Habtamu.',
  keywords: [
    'Ahadu Financial Solutions',
    'Accounting firm Ethiopia',
    'Addis Ababa accounting services',
    'Tax support services Ethiopia',
    'Payroll administration Addis Ababa',
    'Bookkeeping services Ethiopia',
    'Financial reporting SMEs Ethiopia',
    'Cash flow management Addis Ababa',
    'Business advisory Ethiopia',
    'Arsema Habtamu',
    'አሐዱ',
  ],
  authors: [{ name: 'Ahadu Financial Solutions', url: baseUrl }],
  creator: 'Ahadu Financial Solutions',
  publisher: 'Ahadu Financial Solutions',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'Ahadu Financial Solutions | Empowering Businesses Through Financial Excellence',
    description: 'Ethiopia-based accounting, financial management, payroll administration, tax support, and business advisory firm. Built on the Amharic principle of Ahadu (አሐዱ — Unity).',
    url: baseUrl,
    siteName: 'Ahadu Financial Solutions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/icon.svg',
        width: 512,
        height: 512,
        alt: 'Ahadu Financial Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahadu Financial Solutions | Accounting & Advisory in Ethiopia',
    description: 'Empowering businesses in Ethiopia through financial management, tax support, payroll, and cash flow advisory.',
    images: ['/icon.svg'],
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
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'Ahadu Financial Solutions',
  alternateName: 'አሐዱ Financial Solutions',
  url: baseUrl,
  logo: `${baseUrl}/icon.svg`,
  image: `${baseUrl}/icon.svg`,
  description: 'Ethiopia-based accounting, financial management, payroll administration, tax support, and business advisory firm.',
  telephone: '+251901049961',
  email: 'ahadufinancial@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Addis Ababa',
    addressCountry: 'ET',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 9.03,
    longitude: 38.74,
  },
  founder: {
    '@type': 'Person',
    name: 'Arsema Habtamu',
    jobTitle: 'Managing Director & Founder',
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '17:30',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Financial & Advisory Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bookkeeping Services',
          description: 'Accurate daily financial recording & ledger management in Ethiopia.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Financial Reporting',
          description: 'Income statements, balance sheets, and management report packages.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Payroll Administration',
          description: 'Timely employee salary calculations and statutory deductions.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tax Support Services',
          description: 'Tax record preparation and compliance risk management.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cash Flow Management',
          description: '90-day liquidity forecasting and working capital optimization.',
        },
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] dark:bg-[#071228] text-[#111827] dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
