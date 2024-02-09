import { Icon } from '@phosphor-icons/react';
import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React from 'react';

const socials: Array<{
  icon: Icon;
  link: string;
}> = [
  {
    icon: FacebookLogo,
    link: '',
  },
  {
    icon: InstagramLogo,
    link: '',
  },
  {
    icon: GithubLogo,
    link: '',
  },
  {
    icon: LinkedinLogo,
    link: '',
  },
];

function Footer() {
  return (
    <footer className="bg-slate-800">
      <div className="container py-8 grid grid-cols-3">
        <div>
          <h1>Filix</h1>
        </div>
        <div>
          <h5 className="text-base font-medium">Menu</h5>
          <div className="mt-2 flex flex-col gap-y-2">
            <Link
              className="text-sm font-light duration-300 hover:text-sky-300"
              href={'/movie'}>
              Movie
            </Link>
            <Link
              className="text-sm font-light duration-300 hover:text-sky-300"
              href={'/tv-show'}>
              TV Show
            </Link>
          </div>
        </div>
        <div>
          <h5>Contact us</h5>
          <div className="mt-2 flex items-center gap-x-2">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <Link key={index} href={social.link}>
                  <Icon size={24} weight="fill" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="py-4 container">
        <p className="text-xs text-slate-500 font-light text-center">
          Dự án chỉ mang tính chất học tập và rèn luyện kĩ năng. Không cổ súy
          cho việc vi phạm bản quyền và trục lợi cá nhân.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
