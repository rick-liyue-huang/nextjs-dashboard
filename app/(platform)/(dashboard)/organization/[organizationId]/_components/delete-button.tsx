'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

export const DeleteButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant={'destructive'} disabled={pending}>
      Delete
    </Button>
  );
};
