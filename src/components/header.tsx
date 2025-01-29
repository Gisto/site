import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

import { Button } from './ui/button.tsx';
import { ThemeSwitcher } from './theme/theme-switcher.tsx';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'py-4 px-6  lg:px-8 flex items-center justify-between sticky top-0 z-50 transition-all duration-200',
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      )}
    >
      <div>
        <a className="flex items-center gap-2 text-primary">
          <h1 className="font-semibold text-2xl p-0 m-0">{'{ Gisto }'}</h1>
        </a>
      </div>
      <div className="ml-auto flex gap-2">
        <a>
          <Button variant="ghost">About</Button>
        </a>

        <a>
          <Button variant="ghost">Docs</Button>
        </a>

        <a>
          <Button variant="ghost">Features</Button>
        </a>

        <a>
          <Button variant="ghost">F.A.Q.</Button>
        </a>

        <a>
          <Button variant="ghost">Downloads</Button>
        </a>

        <ThemeSwitcher />
      </div>
    </header>
  );
};
