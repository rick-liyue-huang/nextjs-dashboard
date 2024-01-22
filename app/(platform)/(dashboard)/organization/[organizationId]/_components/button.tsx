'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

export const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant={'login'} disabled={pending}>
      Submit
    </Button>
  );
};
