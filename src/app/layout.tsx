import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
//
import './globals.css';
import 'swiper/css';

const open_sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
