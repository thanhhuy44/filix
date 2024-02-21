'use client';
import Api from '@/api';
import { IEpisode, ISeason, IServer, ISource } from '@/types/interface';
import { useClickAway } from '@uidotdev/usehooks';
import { usePathname } from 'next/navigation';
import React, { LegacyRef, useEffect, useRef, useState } from 'react';
import ReactHlsPlayer from 'react-hls-player';

interface Props {
  slug: string;
  cover: string;
  tvSeasons?: ISeason[];
}

function Player({ slug, cover, tvSeasons }: Props) {
  const ref = useRef();
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useClickAway(() => setOpen(false));
  const [sources, setSources] = useState<ISource>();
  const [servers, setServers] = useState<IServer[]>();
  const [currServer, setCurrServer] = useState<string>();
  const [currSeason, setCurrSeason] = useState<ISeason | undefined>(
    tvSeasons?.length ? tvSeasons[0] : undefined
  );
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [currEP, setCurrEP] = useState<IEpisode>(episodes[0]);

  const handleGetSource = async () => {
    const response: ISource = await Api.getSourceMovie(slug, currServer);
    if (response) {
      setSources(response);
    }
  };

  const handleGetServers = async () => {
    if (pathname.includes('/movie/')) {
      const response: IServer[] = await Api.getServersMovie(slug);
      if (response) {
        setServers(response);
      }
    }

    if (pathname.includes('/tv/')) {
      if (currEP) {
        const response: IServer[] = await Api.getTVServers(
          slug,
          currEP?.dataId
        );
        if (response) {
          setServers(response);
        }
      }
    }
  };

  const handleGetEpisodes = async () => {
    const response: IEpisode[] = await Api.getTVEpisodes(
      slug,
      currSeason?.id as string
    );
    if (response) {
      setEpisodes(response);
    }
  };

  useEffect(() => {
    if (pathname.includes('/tv/')) {
      handleGetEpisodes();
    }
    handleGetServers();
    if (pathname.includes('/movie/')) {
      handleGetSource();
    }
  }, [slug]);

  return (
    <div className="flex flex-col gap-y-4 md:gap-y-8 2xl:gap-y-12">
      <ReactHlsPlayer
        playerRef={ref as any}
        src={sources?.sources[sources.sources.length - 1].url || ''}
        poster={cover}
        controls
        width={'100%'}
        height={'auto'}
        className="aspect-video object-contain object-center"
      />

      <div className="container flex items-center justify-center gap-4">
        {servers?.length
          ? servers?.map((server, index) => {
              const isActive = currServer
                ? server.title === currServer
                : index === 0;
              return (
                <button
                  className={`px-4 py-2 rounded-full ${
                    isActive ? 'bg-sky-600' : 'bg-white text-slate-700'
                  }`}
                  onClick={() => {
                    if (!isActive) {
                      setCurrServer(server.title);
                      handleGetSource();
                    }
                  }}
                  key={index}>
                  {server.title}
                </button>
              );
            })
          : null}
      </div>
      {pathname.includes('/tv/') ? (
        <div className="container flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <p className="font-medium">Season: </p>
            <div
              ref={dropdownRef as LegacyRef<HTMLDivElement>}
              className="relative flex-1 max-w-[150px]">
              <div
                onClick={() => setOpen((prev) => !prev)}
                className="bg-white text-slate-800 text-sm p-2 rounded-lg select-none cursor-pointer">
                {currSeason?.name}
              </div>
              <div
                className={`
            absolute top-full mt-1 bg-white text-slate-800 w-full rounded-md overflow-hidden origin-top duration-200
            ${open ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
            `}>
                {tvSeasons?.map((season, index) => {
                  const isActive = season.id === currSeason?.id;
                  return (
                    <div
                      className={`select-none p-2 text-sm cursor-pointer ${
                        isActive
                          ? 'bg-slate-600 text-slate-50'
                          : 'hover:bg-slate-300'
                      }  duration-200`}
                      key={index}
                      onClick={() => {
                        setCurrSeason(season);
                        handleGetEpisodes();
                      }}>
                      {season.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-2">
            {episodes.length
              ? episodes.map((episode, index) => {
                  const isActive = currEP ? episode.id === currEP?.id : false;
                  return (
                    <div
                      onClick={() => {
                        setCurrEP(episode);
                        handleGetServers();
                        handleGetSource();
                      }}
                      className={`max-w-[200px] line-clamp-1 leading-8 font-light text-sm p-2 rounded-md border border-slate-300 cursor-pointer select-none ${
                        isActive
                          ? 'bg-slate-300 text-slate-800'
                          : 'text-slate-300'
                      }`}
                      key={index}>
                      {episode.title}
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Player;
