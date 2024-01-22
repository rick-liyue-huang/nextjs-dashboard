import { title } from 'process';
import { z } from 'zod';

export const CreateBoard = z.object({
  title: z
    .string({
      required_error: 'Board title required',
      invalid_type_error: 'Board title required',
    })
    .min(3, {
      message: 'Board title required 3 or more characters',
    }),
});
