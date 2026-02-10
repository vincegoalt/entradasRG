import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://entradasrolandgarros.com'),
  title: {
    default: 'Roland Garros 2026: Guía Completa en Español',
    template: '%s | Roland Garros Guía 2026'
  },
  description: 'Guía definitiva de Roland Garros 2026 en español. Calendario, entradas, precios, cómo llegar y todo lo que necesitas saber para tu visita.',
  keywords: [
    'roland garros 2026',
    'entradas roland garros 2026',
    'calendario roland garros 2026',
    'roland garros fechas',
    'roland garros entradas',
    'tickets roland garros 2026',
    'ground pass roland garros',
    'roland garros precio entradas',
    'como llegar roland garros',
    'estadio roland garros'
  ],
  authors: [{ name: 'Roland Garros Guía' }],
  creator: 'Roland Garros Guía',
  publisher: 'Roland Garros Guía',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://entradasrolandgarros.com',
    siteName: 'Roland Garros Guía 2026',
    title: 'Roland Garros 2026: Guía Completa en Español',
    description: 'Guía definitiva de Roland Garros 2026 en español. Calendario, entradas, precios y todo lo que necesitas saber.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Roland Garros 2026 Guía Completa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roland Garros 2026: Guía Completa en Español',
    description: 'Todo sobre Roland Garros 2026: calendario, entradas, precios y consejos prácticos',
    images: ['/images/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://entradasrolandgarros.com',
    languages: {
      'es': 'https://entradasrolandgarros.com',
      'x-default': 'https://goaltickets.com/es/collections/entradas-roland-garros-2026',
    },
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={lexend.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className="font-display bg-background-light antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
