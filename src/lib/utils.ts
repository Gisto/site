interface FormatDateParams {
  dateTime: string | Date;
  locale?: string;
  withTime?: boolean;
}

export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export const scrollToSection = (id: string) => {
  const yOffset = -80;
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

export const upperCaseFirst = (text: string) => {
  const str = text.toLowerCase();
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
};

export const formatDate = ({ dateTime, locale = 'en-US', withTime = true }: FormatDateParams) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    ...(withTime ? { hour: '2-digit' } : null),
    ...(withTime ? { minute: '2-digit' } : null),
    ...(withTime ? { second: '2-digit' } : null),
  }).format(new Date(dateTime));
