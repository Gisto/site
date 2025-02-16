import { Loader } from 'lucide-react';
import { cn } from '@/lib/utils.ts';

export const Loading = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex justify-center items-center w-full h-screen', className)}>
      <Loader className="size-8 animate-spin" />
    </div>
  );
};
