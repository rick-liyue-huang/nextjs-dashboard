import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';

const headerFont = localFont({ src: '../../public/fonts/font.woff2' });

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-65 transition items-center gap-x-2 hidden md:flex">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <p
          className={cn('text-lg text-neutral-500 pb-1', headerFont.className)}
        >
          Task Management
        </p>
      </div>
    </Link>
  );
};
