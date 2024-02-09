'use client';
import Api from '@/api';
import { ISource } from '@/types/interface';
import React, { useEffect, useRef, useState } from 'react';
import ReactHlsPlayer from 'react-hls-player';

interface Props {
  slug: string;
  cover: string;
}

function Player({ slug, cover }: Props) {
  const ref = useRef();
  const [sources, setSources] = useState<ISource>();

  const handleGetSource = async () => {
    const response: ISource = await Api.getSourceMovie(slug);
    if (response) {
      setSources(response);
    }
  };

  useEffect(() => {
    handleGetSource();
  }, [slug]);

  return (
    <div>
      <ReactHlsPlayer
        playerRef={ref}
        src={sources?.sources[sources.sources.length - 1].url || ''}
        poster={cover}
        controls
        width={'100%'}
        height={'auto'}
        className="aspect-video object-contain object-center"
      />
    </div>
  );
}

export default Player;
