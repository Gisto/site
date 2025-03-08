import { Section } from '../section.tsx';
import { useTheme } from '../theme/theme-provider.tsx';
import { Button } from '../ui/button.tsx';
import { scrollToSection } from '@/lib/utils.ts';
import { useRouter } from 'dirty-react-router';

export const HeroMobile = () => {
  const { resolvedTheme } = useTheme();
  const { navigate } = useRouter();

  return (
    <Section className="relative overflow-hidden mt-20 sm:mt-32">
      <div className="text-center">
        <h1 className="mb-8 scroll-m-20 text-4xl text-primary font-extrabold lg:text-5xl">
          Snippets made awesome
        </h1>

        <p className="mb-8 text-xl text-muted-foreground">
          Gisto brings clarity to your snippet collection, making organization second nature
        </p>

        <small></small>
      </div>

      <div className="mt-8 gap-4 flex justify-center">
        <Button size="lg" onClick={() => scrollToSection('downloads-section')}>
          Downloads
        </Button>
        <Button size="lg" variant="outline" onClick={() => navigate('/documentation')}>
          Learn more
        </Button>
      </div>

      <div className="m-10 relative max-w-5xl mx-auto">
        <img
          alt="Gisto"
          src={resolvedTheme === 'light' ? '/app-light.png' : '/app-dark.png'}
          className="transition-all w-full h-auto rounded shadow-[0px_0px_45px_10px_rgba(186,186,186,1)] dark:shadow-[0px_0px_45px_10px_rgba(97,97,97,1)]"
        />
      </div>
    </Section>
  );
};
