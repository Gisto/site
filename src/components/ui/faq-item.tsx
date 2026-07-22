import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils.ts';

interface FAQItemProps {
  q: string;
  a: React.ReactNode;
  defaultOpen?: boolean;
}

export const FAQItem = ({ q, a, defaultOpen = false }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={cn(
        'group glass-panel bg-card border border-border/80 hover:border-primary/45 rounded-2xl overflow-hidden transition-all duration-300',
        isOpen && 'border-primary/45 shadow-lg'
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 cursor-pointer font-bold text-sm sm:text-base flex justify-between items-center select-none text-foreground hover:text-primary transition-colors focus:outline-none text-left"
        aria-expanded={isOpen}
      >
        <span>{q}</span>
        <ChevronDown
          className={cn(
            'size-4 text-muted-foreground transition-transform duration-300 group-hover:text-primary',
            isOpen && 'rotate-180 text-primary'
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
          <div className="p-6 pt-0 text-sm leading-relaxed text-muted-foreground border-t border-border/60 bg-muted/20 [&_h2]:text-sm [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-4 [&_h2]:mb-2 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-3 [&_h3]:mb-1.5 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_p]:mb-2 [&_code]:text-xs [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_hr]:my-4 [&_hr]:border-border/60">
            {a}
          </div>
        </div>
      </div>
    </div>
  );
};
