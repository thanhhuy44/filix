import Api from '@/api';
import Player from '@/components/player';
import Quality from '@/components/quality';
import Section from '@/components/section';
import { IMovie } from '@/types/interface';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

async function getData(slug: string) {
  const movie = await Api.getDetailTV(slug);
  if (movie) {
    return movie;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const movie: IMovie = await Api.getDetailTV(slug);
  return {
    title: `Filix - Watch ${movie.name}`,
    description: movie.description,
    keywords: ['movie', 'stream', 'nextjs', 'Thanh Huy'],
    metadataBase: new URL('https://filix.vercel.app'),
    openGraph: {
      title: `Filix - Watch ${movie.name}`,
      description: movie.description,
      images: [
        {
          url: movie.cover as string,
          protocol: 'https',
          hostname: 'img.flixhq.to',
          pathname: '**',
          width: 400,
          height: 300,
        },
        {
          url: movie.cover as string,
          protocol: 'https',
          hostname: 'img.flixhq.to',
          pathname: '**',
          width: 800,
          height: 600,
        },
        {
          url: movie.cover as string,
          protocol: 'https',
          hostname: 'img.flixhq.to',
          pathname: '**',
          width: 1600,
          height: 1200,
        },
      ],
    },
    twitter: {
      title: `Filix - Watch ${movie.name}`,
      description: movie.description,
      images: [
        {
          url: movie.cover as string,
          protocol: 'https',
          hostname: 'img.flixhq.to',
          pathname: '**',
          width: 400,
          height: 300,
        },
        {
          url: movie.cover as string,
          protocol: 'https',
          hostname: 'img.flixhq.to',
          pathname: '**',
          width: 800,
          height: 600,
        },
        {
          url: movie.cover as string,
          protocol: 'https',
          hostname: 'img.flixhq.to',
          pathname: '**',
          width: 1600,
          height: 1200,
        },
      ],
    },
  };
}

async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const movie: IMovie = await getData(slug);

  return (
    <main className="flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 lg:gap-y-12 2xl:gap-y-20 mb-4 sm:mb-6 md:mb-8 lg:mb-12 2xl:mb-20">
      <section className="container">
        <Player
          cover={movie.cover as string}
          slug={slug}
          tvSeasons={movie.seasons}
        />
      </section>
      <section className="container">
        <div className="border border-slate-300 rounded-lg p-4 flex items-start gap-x-4 bg-slate-700">
          <div className="rounded-lg overflow-hidden">
            <Image src={movie.poster} alt={`Flix - ${movie.name}`} fill />
          </div>
          <div className="flex-1 flex flex-col gap-y-2 text-sm font-light">
            <h1 className="text-lg font-bold">{movie.name}</h1>
            <p className="">{movie.description}</p>
            <p>
              <strong>Country:</strong> {movie.country}
            </p>
            <p>
              <strong>Casts:</strong>{' '}
              {movie.casts?.map((cast, index) =>
                index ? `, ${cast}` : `${cast}`
              )}
            </p>
            <p>
              <strong>IMDB:</strong> {movie.IMDB || 'N/A'}
            </p>
            <p className="flex items-center gap-x-3">
              <strong>Quality : </strong>
              <Quality quality={movie.quality || 'N/A'} />
            </p>
          </div>
        </div>
      </section>
      <Section
        title="Related Movies"
        movies={movie.relatedMovies as IMovie[]}
      />
    </main>
  );
}

export default Page;
