'use client';

import React from 'react';
import { createBoard } from '@/actions/create-board';
import { useFormState } from 'react-dom';
import { FormInput } from './input';
import { FormButton } from './button';

export const Form = () => {
  const initialState = {
    errors: {
      title: [''],
    },
    message: '',
  };
  const [state, dispatch] = useFormState(createBoard, initialState);

  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={state?.errors} />
      </div>
      <FormButton />
    </form>
  );
};
