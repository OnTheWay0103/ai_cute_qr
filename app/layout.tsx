import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import PlausibleProvider from 'next-plausible';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

let title = 'AIqrCode - QR Code Generator';
let description = 'Generate your AI QR Code in seconds';
let url = 'https://aicuteqr.vercel.app';
let ogimage = 'https://aicuteqr.vercel.app/og-image.png';
let sitename = 'aicuteqr.vercel.app';

// TODO: Replace with your Google Analytics measurement ID
const GA_MEASUREMENT_ID = 'G-L3X3Y3XWEH';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="aicuteqr.vercel.app" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Analytics />
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
        <Footer />
      </body>
    </html>
  );
}
