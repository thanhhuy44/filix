'use client';
import React, { useRef, useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

function Search() {
  const router = useRouter();
  const [text, setText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center border py-1 pl-4 pr-2 rounded-full focus-within:border-slate-400 duration-200">
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        size={1}
        className="outline-none flex-1 text-sm"
        placeholder="Search..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (text.trim().length > 0) {
              router.push(`/search?keyword=${text.trim()}`);
            }
          }
        }}
      />
      <MagnifyingGlass
        className="cursor-pointer"
        onClick={() => {
          if (text.trim()) {
            router.push(`/search?keyword=${text.trim()}`);
          } else {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }
        }}
      />
    </div>
  );
}

export default Search;
