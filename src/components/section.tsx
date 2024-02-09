import React from 'react';
import Card from './card';
import { IMovie } from '@/types/interface';

interface Props {
  title: string;
  movies: Array<IMovie>;
}

function Section({ title, movies }: Props) {
  return (
    <section className="container flex flex-col gap-y-4">
      <h1 className="text-2xl font-bold text-sky-300">{title}</h1>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
      gap-2
      ">
        {movies.map((movie, index) => (
          <Card movie={movie} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Section;
