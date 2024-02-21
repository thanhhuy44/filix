'use client';

import { CircleNotch } from '@phosphor-icons/react';
import React from 'react';

function Page() {
  return (
    <main className="flex-1 w-full h-full items-center justify-center">
      <CircleNotch className="text-white text-2xl animate-spin" />
    </main>
  );
}

export default Page;
