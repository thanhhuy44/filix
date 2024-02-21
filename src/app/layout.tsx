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
  keywords: ['Filix', 'Stream', 'Movie online', 'TV Show online', 'Nextjs'],
  metadataBase: new URL('https://filix.vercel.app'),
  openGraph: {
    title: 'Flix - Movie Stream Website',
    description: 'Build by me!',
    images: [
      {
        url: metaImage.src,
        width: 400,
        height: 300,
      },
      {
        url: metaImage.src,
        width: 800,
        height: 600,
      },
      {
        url: metaImage.src,
        width: 1600,
        height: 1200,
      },
    ],
  },
  twitter: {
    title: 'Flix - Movie Stream Website',
    description: 'Build by me!',
    images: [
      {
        url: metaImage.src,
        width: 400,
        height: 300,
      },
      {
        url: metaImage.src,
        width: 800,
        height: 600,
      },
      {
        url: metaImage.src,
        width: 1600,
        height: 1200,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'flex flex-col min-h-screen ' + open_sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
