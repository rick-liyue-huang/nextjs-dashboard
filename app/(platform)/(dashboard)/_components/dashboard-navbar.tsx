import { Logo } from '@/components/self-defined/logo';
import { Button } from '@/components/ui/button';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import React from 'react';
import { MobileSidebar } from './mobile-sidebar';

export const DashboardNavbar = () => {
  return (
    <nav className="fixed z-20 top-0 w-full h-16 px-6 border-b shadow-sm bg-sky-100 flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        {/* mobile side bar */}
        <MobileSidebar />
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button
          size="lg"
          className="rounded-sm hidden md:block md:mr-2 h-auto py-2 px-3 text-gray-700"
          variant={'free-use'}
        >
          Create
        </Button>
        <Button
          size={'sm'}
          className="rounded-sm block md:hidden mr-2"
          variant={'free-use'}
        >
          <Plus />
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={'/organization/:id'}
          afterLeaveOrganizationUrl="/select-organization"
          afterSelectOrganizationUrl={'/organization/:id'}
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                width: '2.5rem',
                height: '2.5rem',
              },
            },
          }}
        />
      </div>
    </nav>
  );
};
