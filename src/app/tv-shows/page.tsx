import Api from '@/api';
import Section from '@/components/section';
import { IMovie } from '@/types/interface';
import Link from 'next/link';
import React from 'react';

async function getData(page: string) {
  const movies: IMovie[] = await Api.getTVShows(page);
  if (movies.length) {
    return movies;
  }
}

async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const page: string = searchParams?.page ? (searchParams.page as string) : '1';
  const movies = await getData(page);
  return (
    <main className="flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 lg:gap-y-12 2xl:gap-y-20 my-4 sm:my-6 md:my-8 lg:my-12 2xl:my-20">
      {movies?.length ? (
        <>
          <Section
            title={`TV Shows - Page ${page}`}
            movies={movies as IMovie[]}
          />
          <div className="flex items-center justify-center">
            <Link
              href={`/tv-shows?page=${parseInt(page) + 1}`}
              className="text-lg font-bold text-center hover:text-sky-300 duration-300">
              See more
            </Link>
          </div>
        </>
      ) : (
        <h1 className="text-center text-sm text-slate-700 font-light">
          No data
        </h1>
      )}
    </main>
  );
}

export default Page;
