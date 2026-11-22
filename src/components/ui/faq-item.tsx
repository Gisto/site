import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils.ts';
import { Reveal } from '../reveal.tsx';

interface FAQItemProps {
  q: string;
  a: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export const FAQItem = ({ q, a, defaultOpen = false, className }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Reveal delay={100}>
      <div
        className={cn(
          'overflow-hidden rounded-xl border border-border bg-card transition-all duration-300',
          isOpen && 'border-primary/40 shadow-lg',
          className
        )}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full cursor-pointer select-none items-center justify-between p-6 text-left text-sm font-medium text-foreground transition-colors hover:text-primary focus:outline-none"
          aria-expanded={isOpen}
        >
          <span>{q}</span>
          <ChevronDown
            className={cn(
              'size-5 shrink-0 text-muted-foreground transition-transform duration-200',
              isOpen && 'rotate-180'
            )}
          />
        </button>
        <div
          className={cn(
            'grid transition-all duration-300 ease-in-out',
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          )}
        >
          <div className="overflow-hidden">
            <div className="border-t border-border px-6 py-4 text-sm leading-relaxed text-muted-foreground [&_h2]:mb-2 [&_h2]:mt-4 [&_h2]:text-sm [&_h2]:font-medium [&_h2]:text-foreground [&_h3]:mb-1.5 [&_h3]:mt-3 [&_h3]:text-sm [&_h3]:font-medium [&_h3]:text-foreground [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_p]:mb-2 [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-xs [&_hr]:my-4 [&_hr]:border-border">
              {a}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};
