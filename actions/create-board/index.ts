'use server';

import { auth } from '@clerk/nextjs';
import { InputType } from './type';
import { OutputType } from './type';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { createSafeAction } from '../create-safe-action';
import { CreateBoard } from './schema';

const handler = async (data: InputType): Promise<OutputType> => {
  const { userId } = auth();

  if (!userId) {
    return {
      error: 'Not authenticated',
    };
  }

  const { title } = data;

  let board;

  try {
    board = await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      error: 'Database error, fail to create board',
    };
  }

  revalidatePath(`/board/${board.id}`);

  return {
    data: board,
  };
};

export const createBoard = createSafeAction(CreateBoard, handler);
