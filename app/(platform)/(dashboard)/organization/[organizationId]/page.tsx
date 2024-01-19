import { OrganizationSwitcher, auth } from '@clerk/nextjs';
import React from 'react';

const SingleOrganizationPage = ({
  params,
}: {
  params: { organizationId: string };
}) => {
  const { userId, orgId } = auth();
  return <div>{/* <OrganizationSwitcher hidePersonal /> */}</div>;
};

export default SingleOrganizationPage;
