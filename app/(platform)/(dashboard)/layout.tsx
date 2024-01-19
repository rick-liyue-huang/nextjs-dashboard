import React, { ReactNode } from 'react';
import { DashboardNavbar } from './_components/dashboard-navbar';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <DashboardNavbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
