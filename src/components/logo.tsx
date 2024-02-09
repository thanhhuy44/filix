import React from 'react';
import Image from 'next/image';
import { Lexend } from 'next/font/google';
import LogoImage from '@/assets/images/logo-white.png';

const lexend = Lexend({ subsets: ['latin'] });

function Logo() {
  return (
    <div className="flex items-center gap-x-2">
      <Image className="!h-6 !w-auto" src={LogoImage} alt="logo" />
      <p className={`${lexend.className}`}>
        <strong>Filix</strong>
      </p>
    </div>
  );
}

export default Logo;
