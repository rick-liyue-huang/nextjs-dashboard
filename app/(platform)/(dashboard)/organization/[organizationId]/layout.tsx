import React, { ReactNode } from 'react';
import { OrganizationControl } from './_components/organization-control';

const SingleOrganizationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <OrganizationControl />
      {children}
    </>
  );
};

export default SingleOrganizationLayout;
