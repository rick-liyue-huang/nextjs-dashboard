import { OrganizationSwitcher, auth } from '@clerk/nextjs';
import React from 'react';
import { Organization } from '@clerk/nextjs/server';

const SingleOrganizationPage = ({
  params,
}: {
  params: { organizationId: string };
}) => {
  const { userId, orgId } = auth();
  return <div>Organization</div>;
};

export default SingleOrganizationPage;
