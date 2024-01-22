'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: 'Board title required 3 or more characters',
  }),
});

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

export async function createBoard(prevState: State, formData: FormData) {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get('title'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing required fields',
    };
  }

  const { title } = validatedFields.data;

  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      message: 'Database errors',
    };
  }

  // Revalidate the index page to show the new board
  revalidatePath('/organization/org_2b9lvrnzTwxdjzxqMYubYjUG2ee');
  redirect('/organization/org_2b9lvrnzTwxdjzxqMYubYjUG2ee');
}
