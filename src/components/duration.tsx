'use client';

import React from 'react';

interface Props {
  duration?: string;
}

function Duration({ duration }: Props) {
  return <p className="font-light text-slate-300 text-xs">{duration}</p>;
}

export default Duration;
