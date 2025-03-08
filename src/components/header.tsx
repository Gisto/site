import { useState, useEffect } from 'react';
import { cn, scrollToSection } from '../lib/utils';

import { Button } from './ui/button.tsx';
import { ThemeSwitcher } from './theme/theme-switcher.tsx';
import { useIsMobile } from '@/hooks/use-mobile.tsx';
import { useRouter } from 'dirty-react-router';

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

  return (
    <header
      className={cn(
        'py-4 px-6  lg:px-8 flex items-center justify-between sticky top-0 z-50 transition-all duration-200',
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      )}
    >
      <div>
        <a
          className="flex items-center gap-2 text-primary cursor-pointer"
          onClick={() => {
            navigate('/');
            scrollToSection('top');
          }}
        >
          <h1 className="font-semibold text-2xl p-0 m-0">{isMobile ? '{ G }' : '{ Gisto }'}</h1>
        </a>
      </div>
      <div className="ml-auto flex gap-2">
        <a>
          <Button
            variant="ghost"
            size={isMobile ? 'sm' : 'default'}
            onClick={() => scrollToSection('about-section')}
          >
            About
          </Button>
        </a>

        <a>
          <Button
            size={isMobile ? 'sm' : 'default'}
            onClick={() => scrollToSection('features-section')}
            variant="ghost"
          >
            Features
          </Button>
        </a>

        {/*<a>*/}
        {/*  <Button size={isMobile ? 'sm' : 'default'} variant="ghost">F.A.Q.</Button>*/}
        {/*</a>*/}

        <a>
          <Button
            size={isMobile ? 'sm' : 'default'}
            onClick={() => scrollToSection('downloads-section')}
            variant="ghost"
          >
            Downloads
          </Button>
        </a>

        <ThemeSwitcher />
      </div>
    </header>
  );
};
