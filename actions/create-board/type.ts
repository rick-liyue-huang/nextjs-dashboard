import { z } from 'zod';
import { Board } from '@prisma/client';
import { ActionState } from '../create-safe-action';
import { CreateBoard } from './schema';

export type InputType = z.infer<typeof CreateBoard>;
export type OutputType = ActionState<InputType, Board>;
