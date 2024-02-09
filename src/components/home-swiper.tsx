'use client';

import React, { useState } from 'react';
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Quality from './quality';
import Duration from './duration';
import { Play } from '@phosphor-icons/react/dist/ssr';
import Score from './score';
import Swiper from 'swiper';
import Release from './release';
import { IMovie } from '@/types/interface';
import Link from 'next/link';
import { Metadata } from 'next';

interface Props {
  movies: IMovie[];
}

export const metadata: Metadata = {
  title: 'Filix - Streaming movie website!',
  description: 'Website build by Thanh Huy!',
  authors: {
    name: 'Thanh Huy',
  },
};

function HomeSwiper({ movies }: Props) {
  const [swiper, setSwiper] = useState<Swiper>();

  return (
    <div className="container">
      <SwiperContainer
        onInit={(initSwiper) => {
          setSwiper(initSwiper);
        }}
        slidesPerView={3}
        spaceBetween={24}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}>
        {movies.map((movie, index) => (
          <SwiperSlide className="" key={index}>
            <div className="border border-slate-300 rounded-lg flex flex-col gap-y-2 overflow-hidden">
              <div className="relative group aspect-video overflow-hidden">
                <Image
                  src={movie.poster}
                  alt={`Filix - ${movie.name}`}
                  fill
                  className="aspect-video group-hover:scale-105 duration-300"
                />
                <Link
                  href={movie.link}
                  className="absolute opacity-0 group-hover:opacity-100 duration-300 cursor-pointer left-0 right-0 top-0 bottom-0 bg-slate-700/60 backdrop-blur-sm flex items-center justify-center">
                  <Play weight="fill" size={32} className="text-sky-300" />
                </Link>
              </div>
              <div className="flex flex-col gap-y-1 px-2 pb-2">
                <Link href={movie.link}>
                  <h3 className="text-lg font-semibold cursor-pointer hover:text-sky-300 duration-300 line-clamp-1">
                    {movie.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between gap-x-2">
                  <div className="flex items-center gap-x-4">
                    {/* <Score score="4.3" /> */}
                    <Release release={movie.time} />
                    <Duration duration={movie?.duration} />
                  </div>
                  <div>
                    <Quality quality={movie.quality} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </div>
  );
}

export default HomeSwiper;
