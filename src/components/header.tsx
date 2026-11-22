import { useState, useEffect } from 'react';
import { cn, navigateAndScroll } from '../lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Menu } from 'lucide-react';

import { ThemeSwitcher } from './theme/theme-switcher.tsx';
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
        'sticky top-0 z-50 w-full border-b transition-all duration-300',
        isScrolled
          ? 'border-border bg-background/90 backdrop-blur-md shadow-sm'
          : 'border-transparent bg-background/0'
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-8">
        <button
          className="font-mono text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70"
          onClick={() => {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="text-muted-foreground">{'{'}</span> Gisto{' '}
          <span className="text-muted-foreground">{'}'}</span>
        </button>

        <nav className="ml-auto hidden items-center gap-0.5 sm:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item);
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={cn(
                  'rounded-md px-3 py-1.5 text-sm transition-colors',
                  active
                    ? 'bg-muted text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.label}
              </button>
            );
          })}
          <div className="ml-2">
            <ThemeSwitcher />
          </div>
        </nav>

        <div className="flex items-center gap-1 sm:hidden">
          <ThemeSwitcher />
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              <Menu className="size-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {NAV_ITEMS.map((item) => (
                <DropdownMenuItem
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="cursor-pointer"
                >
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
