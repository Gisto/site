import { ReactNode } from 'react';
import { cn } from '../lib/utils.ts';

export const Section = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={cn('m-0 sm:m-16 max-w-6xl !px-8 sm:mx-auto', className)}>{children}</div>;
};
