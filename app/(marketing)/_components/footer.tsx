import React from 'react';
import { Logo } from '@/components/self-defined/logo';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-2 border-t shadow-sm bg-slate-100 flex items-center justify-stretch">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        {/* <Logo /> */}
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button variant={'ghost'} size="sm" className="text-gray-500">
            Privacy Policy
          </Button>
          <Button variant={'ghost'} size="sm" className="text-gray-500">
            Terms of Use
          </Button>
        </div>
      </div>
    </div>
  );
};
