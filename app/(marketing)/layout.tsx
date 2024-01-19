import React, { ReactNode } from 'react';

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full bg-emerald-50">
      {/* Navbar */}
      <main className="py-20 bg-sky-100">{children}</main>
      {/* Footer */}
    </div>
  );
};

export default MarketingLayout;
