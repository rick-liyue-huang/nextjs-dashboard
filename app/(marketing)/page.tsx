import React from 'react';
import { ListTodo } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

const headerFont = localFont({ src: '../../public/fonts/font.woff2' });

const textFont = Poppins({
  subsets: ['latin-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          'flex items-center justify-center flex-col',
          headerFont.className
        )}
      >
        <div className="mb-4 flex items-start border shadow-sm p-4 bg-green-100 text-green-600 rounded-full uppercase">
          <ListTodo className="w-6 h-6 mr-2" />
          Task Management Dashboard
        </div>
        <h1 className="bg-gradient-to-b from-fuchsia-50 to-pink-100 text-2xl md:text-4xl text-center text-purple-500 rounded-md p-4 mb-6">
          We can manage your team tasks
        </h1>
        <div
          className={cn(
            'text-xl md:text-2xl text-blue-300 rounded-md py-2 w-fit',
            textFont.className
          )}
        >
          Efficient and Agile
        </div>
        <Button
          className="mt-6 text-slate-500"
          size="lg"
          asChild
          variant={'secondary'}
        >
          <Link href={'/signup'}>User it for FREE</Link>
        </Button>
      </div>
    </div>
  );
};

export default MarketingPage;
