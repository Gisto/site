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

type NavItem = {
  label: string;
  section?: string;
  path?: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: 'About', section: 'about-section' },
  { label: 'Use Cases', path: '/use-cases' },
  { label: 'Features', path: '/features' },
  { label: 'Install', path: '/installation' },
  { label: 'FAQ', section: 'faq-section' },
  { label: 'Docs', path: '/documentation' },
];

export const Header = () => {
  const { navigate, path } = useRouter();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: NavItem) => {
    if (item.path) {
      navigate(item.path);
    } else if (item.section) {
      navigateAndScroll(navigate, item.section);
    }
  };

  const isActive = (item: NavItem) => {
    if (item.path) return path === item.path;
    return false;
  };

  return (
    <header
      className={cn(
        'py-3 px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-50 transition-all duration-200 w-full box-border',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div>
        <a
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => {
            navigate('/');
            scrollToSection('top');
          }}
        >
          <span className="font-extrabold text-xl tracking-tight text-foreground">
            {'{'} Gisto {'}'}
          </span>
        </a>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu className="size-5 text-muted-foreground" />
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
      <div className="ml-auto gap-0.5 hidden sm:flex items-center">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item);
          return (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className={cn(
                'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors',
                active
                  ? 'text-primary bg-primary/8'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
              )}
            >
              {item.label}
            </button>
          );
        })}
        <div className="ml-1">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
