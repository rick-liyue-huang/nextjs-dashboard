import React, { ReactNode } from 'react';
import { Navbar } from './_components/navbar';
import { Footer } from './_components/footer';

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full bg-gradient-to-br from-sky-200 to-green-300 ">
      {/* Navbar */}
      <Navbar />
      <main className="py-20">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MarketingLayout;
