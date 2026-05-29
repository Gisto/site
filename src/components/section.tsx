import { ReactNode } from 'react';
import { cn } from '../lib/utils.ts';

export const Section = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <div
      className={cn('m-0 sm:my-16 max-w-6xl px-4 sm:px-8 mx-auto w-full box-border', className)}
      {...props}
    >
      {children}
    </div>
  );
};
