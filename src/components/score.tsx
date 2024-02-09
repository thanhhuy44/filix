'use client';

import { Star } from '@phosphor-icons/react';
import React from 'react';

interface Props {
  score?: string;
}

function Score({ score }: Props) {
  return score ? (
    <div className="flex items-center gap-x-[2px] text-xs text-slate-300">
      <Star weight="fill" className="text-sm text-yellow-600" />
      <p>{score}</p>
    </div>
  ) : null;
}

export default Score;
