'use client';

import React from 'react';
// import { createBoard } from '@/actions/create-board';
// import { useFormState } from 'react-dom';
import { FormInput } from './input';
import { FormButton } from './button';
import { createBoard } from '@/actions/create-board';
import { useAction } from '@/hooks/use-action';

export const Form = () => {
  /*
  const initialState = {
    errors: {
      title: [''],
    },
    message: '',
  };
  const [state, dispatch] = useFormState(createBoard, initialState);
  */

  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, 'Success');
    },
    onError: (error) => {
      console.log(error, 'Error');
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={fieldErrors} />
      </div>
      <FormButton />
    </form>
  );
};
