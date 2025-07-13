import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Algobean',
  description: 'Algobean is a technology consultancy and SaaS platform provider, specializing in architecting scalable multi‑tenant applications, delivering real‑time analytics, custom reporting, and tenant‑centric solutions to help businesses grow efficiently',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}