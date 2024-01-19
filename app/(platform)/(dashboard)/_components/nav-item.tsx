'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Activity, CreditCard, Layout, Settings2 } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export type OrganizationType = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
};

interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: OrganizationType;
  onExpanded: (id: string) => void;
}

export const NavItem = ({
  isActive,
  isExpanded,
  organization,
  onExpanded,
}: NavItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    {
      label: 'Boards',
      icon: <Layout className="w-4 h-4 mr-2" />,
      href: `/organization/${organization.id}`,
    },
    {
      label: 'Activity',
      icon: <Activity className="w-4 h-4 mr-2" />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: 'Settings',
      icon: <Settings2 className="w-4 h-4 mr-2" />,
      href: `/organization/${organization.id}/settings`,
    },
    {
      label: 'Billing',
      icon: <CreditCard className="w-4 h-4 mr-2" />,
      href: `/organization/${organization.id}/billing`,
    },
  ];

  const handleClick = (href: string) => {
    router.push(href);
  };

  return (
    <div>
      <AccordionItem value={organization.id} className="border-none">
        <AccordionTrigger
          onClick={() => onExpanded(organization.id)}
          className={cn(
            'flex items-center gap-x-2 p-1.5 text-neutral-600 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline',
            isActive && !isExpanded && 'bg-neutral-500/10'
          )}
        >
          <div className="flex items-center gap-x-2">
            <div className="w-7 h-7 relative">
              <Image
                fill
                src={organization.imageUrl}
                alt="Organization"
                className="rounded-sm object-cover"
              />
            </div>
            <span className="font-medium text-sm">{organization.name}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-1 text-neutral-800">
          {routes.map(({ href, icon, label }) => (
            <Button
              key={href}
              size="sm"
              onClick={() => handleClick(href)}
              className={cn(
                'w-full font-normal justify-start pl-10 mb-1',
                pathname === href && 'bg-purple-100 text-purple-600'
              )}
              variant={'ghost'}
            >
              {icon}
              {label}
            </Button>
          ))}
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};

NavItem.Skeleton = function SkeletonNavItem() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-10 h-10 relative shrink-0">
        <Skeleton className="h-full w-full absolute" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );
};
