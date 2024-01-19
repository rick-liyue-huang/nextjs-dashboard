import React from 'react';
import { Logo } from '@/components/self-defined/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-16 px-6 border-b shadow-sm bg-purple-100 flex items-center justify-stretch">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button variant={'login'} size="lg" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant={'free-use'} size="lg" asChild>
            <Link href="/signup">Use it for Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
