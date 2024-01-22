'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import { Input } from '@/components/ui/input';

interface InputProps {
  errors?: {
    title?: string[];
  };
}
export const FormInput = ({ errors }: InputProps) => {
  const { pending } = useFormStatus();

  return (
    <div>
      <Input
        id="title"
        name="title"
        required
        placeholder="enter the title..."
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className="text-rose-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};
