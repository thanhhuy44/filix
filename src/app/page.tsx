import Api from '@/api';
import HomeSwiper from '@/components/home-swiper';
import Section from '@/components/section';
import { IMovie } from '@/types/interface';
import { Metadata } from 'next';

async function getData() {
  const data: {
    topSlides: IMovie[];
    trending: {
      trendingMovies: IMovie[];
      trendingTV: IMovie[];
    };
    latestMovies: IMovie[];
    latestTV: IMovie[];
    coming: IMovie[];
  } = await Api.getHome();
  if (data !== null) {
    return data;
  }
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 lg:gap-y-12 2xl:gap-y-20 my-4 sm:my-6 md:my-8 lg:my-12 2xl:my-20">
      <section>
        <HomeSwiper movies={data?.topSlides as IMovie[]} />
      </section>
      <Section
        title={'Trending Movies'}
        movies={data?.trending.trendingMovies as IMovie[]}
      />
      <Section
        title={'Trending TV Shows'}
        movies={data?.trending.trendingTV as IMovie[]}
      />
      <Section
        title={'Latest Movies'}
        movies={data?.latestMovies as IMovie[]}
      />
      <Section title={'Latest TV Shows'} movies={data?.latestTV as IMovie[]} />
    </main>
  );
}
