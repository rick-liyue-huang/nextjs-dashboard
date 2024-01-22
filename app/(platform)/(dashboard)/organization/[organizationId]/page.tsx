import { OrganizationSwitcher, auth } from '@clerk/nextjs';
import React from 'react';
import { Organization } from '@clerk/nextjs/server';
import { Form } from './_components/form';
import { db } from '@/lib/db';
import { Board } from './_components/board';

const SingleOrganizationPage = async ({
  params,
}: {
  params: { organizationId: string };
}) => {
  // const { userId, orgId } = auth();
  // console.log('params');

  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-3">
      <Form />
      <div className="space-y-2">
        {boards.map((board) => (
          <Board key={board.id} title={board.title} id={board.id} />
        ))}
      </div>
    </div>
  );
};

export default SingleOrganizationPage;
