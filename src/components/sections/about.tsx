import { Section } from '../section.tsx';

export const About = () => {
  return (
    <Section>
      <h1 className="mb-8 scroll-m-20 text-4xl text-muted-foreground font-light lg:text-4xl text-center">
        <span className="font-extrabold text-primary" id="about-section">
          About
        </span>{' '}
        Gisto
      </h1>
      <div>
        <p className="mb-8">
          Gisto is a Cross-platform snippets management application that allows you and/or your team
          share code snippets fast and easily.
        </p>
        <p className="mb-8">
          Gisto is a code snippet manager that runs on <strong>GitHub Gists</strong>,{' '}
          <strong>GitLab Snippets</strong>,{' '}
          <strong>
            <a
              href="https://github.com/sanusart/snippet-bin"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-primary/30 hover:decoration-primary"
            >
              Snippet-Bin
            </a>
          </strong>{' '}
          (self-hosted), and <strong>local in-browser database</strong> and adds additional features
          such as searching, tagging and sharing snippets while including a rich code editor. You
          can also use local storage to save snippets directly in your browser.
        </p>

        <p className="mb-8">
          The current version (2.x.x) is a complete rewrite of the original Gisto. The project
          started in order to fulfill a lack of a syntax highlighted and cloud synchronized code
          snippet solution, since then it had several iterations.
        </p>
        <p className="mb-8">
          Gisto is built using open web technologies. The current version uses{' '}
          <strong>Tauri</strong> instead of Electron, which significantly reduces the file size,
          along with React, Monaco Editor, Tailwind CSS, Vite and many more.
        </p>
      </div>
    </Section>
  );
};
