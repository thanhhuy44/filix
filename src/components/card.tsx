'use client';

import { Play } from '@phosphor-icons/react';
import Image from 'next/image';
import React from 'react';
import Score from './score';
import Release from './release';
import Duration from './duration';
import Quality from './quality';
import { IMovie } from '@/types/interface';

interface Props {
  movie: IMovie;
}

function Card({ movie }: Props) {
  return (
    <div className="bg-slate-700 rounded-md overflow-hidden flex flex-col gap-y-2">
      <div className="overflow-hidden relative group">
        <Image
          fill
          src={movie?.poster as string}
          alt={`Filix - ${movie.name}`}
          className="group-hover:scale-105 duration-300 aspect-[250/400] object-cover object-center"
        />
        <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-slate-700/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 duration-300">
          <Play weight="fill" size={24} />
        </div>
      </div>
      <div className="flex flex-col gap-y-1 px-2 pb-2">
        <h5 className="hover:text-sky-300 text-lg font-semibold line-clamp-1">
          {movie.name}
        </h5>
        <div className="flex items-center justify-between gap-x-2">
          <div className="flex items-center gap-x-4">
            <Score score="4.3" />
            <Release release={movie.time} />
            <Duration duration={movie.duration} />
          </div>
          <div>
            <Quality quality={movie.quality} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
