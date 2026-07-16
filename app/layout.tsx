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
  metadataBase: new URL('https://www.entradasrolandgarros.com/'),
  title: {
    default: 'Roland Garros 2027: Fechas, Entradas, Calendario y Guía Completa',
    template: '%s | Entradas Roland Garros 2027'
  },
  description: 'Guía definitiva de Roland Garros 2027 en español. Calendario, entradas, precios, cómo llegar y todo lo que necesitas saber para tu visita.',
  keywords: [
    'roland garros 2027',
    'entradas roland garros 2027',
    'calendario roland garros 2027',
    'roland garros fechas',
    'roland garros entradas',
    'tickets roland garros 2027',
    'ground pass roland garros',
    'roland garros precio entradas',
    'como llegar roland garros',
    'estadio roland garros'
  ],
  authors: [{ name: 'Entradas Roland Garros' }],
  creator: 'Entradas Roland Garros',
  publisher: 'Entradas Roland Garros',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.entradasrolandgarros.com/',
    siteName: 'Entradas Roland Garros 2027',
    title: 'Roland Garros 2027: Guía Completa en Español',
    description: 'Guía definitiva de Roland Garros 2027 en español. Calendario, entradas, precios y todo lo que necesitas saber.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Roland Garros 2027 Guía Completa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roland Garros 2027: Guía Completa en Español',
    description: 'Todo sobre Roland Garros 2027: calendario, entradas, precios y consejos prácticos',
    images: ['/images/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.entradasrolandgarros.com/',
    languages: {
      'es': 'https://www.entradasrolandgarros.com/',
      'x-default': 'https://goaltickets.com/es/products/chatrier-french-open-tickets-2027-may-23-sunday-day-session',
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
