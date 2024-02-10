import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import metaImage from '../../public/meta-image.png';
//
import './globals.css';
import 'swiper/css';

const open_sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Flix - Movie Stream Website',
  description: 'Build by me!',
  authors: {
    name: 'Thanh Huy',
    url: 'https://github.com/thanhhuy44',
  },
  openGraph: {
    title: 'Flix - Movie Stream Website',
    description: 'Build by me!',
    images: [metaImage.src],
  },
  twitter: {
    title: 'Flix - Movie Stream Website',
    description: 'Build by me!',
    images: [metaImage.src],
  },
};

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
