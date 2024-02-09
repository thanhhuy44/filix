'use client';

import React from 'react';

interface Props {
  quality?: string;
}

function Quality({ quality }: Props) {
  return (
    <p className="px-1 border border-slate-400 rounded-lg font-semibold text-xs">
      {quality}
    </p>
  );
}

export default Quality;
