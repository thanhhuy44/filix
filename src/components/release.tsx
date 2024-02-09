'use client';

import React from 'react';

interface Props {
  release?: string;
}

function Release({ release }: Props) {
  return release ? <p className="text-xs text-slate-300">{release}</p> : null;
}

export default Release;
