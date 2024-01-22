import { deleteBoard } from '@/actions/delete-board';
import { Button } from '@/components/ui/button';
import React from 'react';
import { DeleteButton } from './delete-button';

interface BoardProps {
  title: string;
  id: string;
}

export const Board = ({ title, id }: BoardProps) => {
  const deleteBoardById = deleteBoard.bind(null, id);
  return (
    <form className="flex items-center gap-x-3" action={deleteBoardById}>
      <p>{title}</p>
      <DeleteButton />
    </form>
  );
};
