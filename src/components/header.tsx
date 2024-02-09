'use client';
import React, { LegacyRef, useState } from 'react';
import Logo from './logo';
import Link from 'next/link';
import Search from './search';
import { List, X } from '@phosphor-icons/react';
import { useClickAway } from '@uidotdev/usehooks';

const navs: Array<{
  text: string;
  link: string;
}> = [
  {
    text: 'Movies',
    link: '/movies',
  },
  {
    text: 'TV Shows',
    link: '/tv-shows',
  },
  {
    text: 'Top IMDB',
    link: '/top-imdb',
  },
];

function Header() {
  const [open, setOpen] = useState<boolean>(false);

  const dropdownRef = useClickAway(() => setOpen(false));

  return (
    <header className="bg-slate-800">
      <div ref={dropdownRef as LegacyRef<HTMLDivElement>} className="relative">
        <div className="container flex items-center justify-between gap-x-4 py-2 lg:py-4">
          <Logo />
          <div className="flex-1 max-w-xs">
            <Search />
          </div>
          <div className="hidden md:flex items-center gap-x-3">
            {navs.map((nav, index) => (
              <Link
                key={index}
                href={nav.link}
                className="text-sm font-medium hover:text-sky-300 duration-300">
                {nav.text}
              </Link>
            ))}
          </div>
          <button
            className="text-white text-lg font-bold block md:hidden"
            onClick={() => setOpen((prev) => !prev)}>
            {open ? <X /> : <List />}
          </button>
        </div>
        <div
          className={`absolute top-full left-0 right-0 bg-slate-800 z-10 duration-300 origin-top ${
            open ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`}>
          {navs.map((nav, index) => (
            <Link
              onClick={() => setOpen(false)}
              key={index}
              href={nav.link}
              className="text-sm font-medium hover:text-sky-300 duration-300 block text-right py-2">
              <p className="container">{nav.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
