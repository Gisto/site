import { useState, useEffect } from 'react';
import { cn, scrollToSection, navigateAndScroll } from '../lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Menu } from 'lucide-react';

import { Button } from './ui/button.tsx';
import { ThemeSwitcher } from './theme/theme-switcher.tsx';
import { useIsMobile } from '@/hooks/use-mobile.tsx';
import { useRouter } from 'dirty-react-router';

const NAV_ITEMS: { label: string; section?: string; path?: string }[] = [
  { label: 'About', section: 'about-section' },
  { label: 'Use Cases', section: 'use-cases-section' },
  { label: 'Comparison', section: 'comparison-section' },
  { label: 'Features', section: 'features-section' },
  { label: 'Installation', section: 'quick-start-section' },
  { label: 'FAQ', section: 'faq-section' },
  { label: 'Downloads', section: 'downloads-section' },
  { label: 'Docs', path: '/documentation' },
];

export const Header = () => {
  const { navigate } = useRouter();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: (typeof NAV_ITEMS)[number]) => {
    if (item.path) {
      navigate(item.path);
    } else if (item.section) {
      navigateAndScroll(navigate, item.section);
    }
  };

  return (
    <header
      className={cn(
        'py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-50 transition-all duration-300 w-full box-border bg-background/40 backdrop-blur-sm border-b border-border/20',
        isScrolled && 'bg-background/80 backdrop-blur-md shadow-md shadow-black/5 border-border/40'
      )}
    >
      <div>
        <a
          className="flex items-center gap-2 text-primary cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => {
            navigate('/');
            scrollToSection('top');
          }}
        >
          <span className="font-extrabold text-2xl p-0 m-0 tracking-tight text-foreground font-mono">
            {'{'} <span className="text-gradient">Gisto</span> {'}'}
          </span>
        </a>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Navigation</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {NAV_ITEMS.map((item) => (
              <DropdownMenuItem key={item.label}>
                <Button
                  variant="ghost"
                  size={isMobile ? 'sm' : 'default'}
                  onClick={() => handleNavClick(item)}
                >
                  {item.label}
                </Button>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <ThemeSwitcher />
      </div>

      {/* Desktop menu */}
      <div className="ml-auto gap-1 hidden sm:flex items-center flex-wrap justify-end">
        {NAV_ITEMS.map((item) => (
          <Button
            key={item.label}
            size={isMobile ? 'sm' : 'default'}
            variant="ghost"
            onClick={() => handleNavClick(item)}
          >
            {item.label}
          </Button>
        ))}
        <ThemeSwitcher />
      </div>
    </header>
  );
};
