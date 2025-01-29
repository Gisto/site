import { Section } from '../section.tsx';

export const About = () => {
  return (
    <Section>
      <h1 className="mb-8 scroll-m-20 text-4xl text-muted-foreground font-light lg:text-4xl text-center">
        <span className="font-extrabold text-primary">About</span> Gisto
      </h1>
      <div>
        <p className="mb-8">
          Gisto is a Cross-platform snippets management application that allows you and/or your team
          share code snippets fast and easily. Based on GitHub Gists Infrastructure which means you
          can use all your existing snippets by connecting your GitHub account!
        </p>
        <p className="mb-8">
          The project has started in order to fulfill a lack of a syntax highlighted and cloud
          synchronized code snippet solution in about 2010, since then it had several iterations.
        </p>
        <p className="mb-8">
          Gisto is built using the open web technologies, current version uses several open source
          projects such as React, Tauri, Monaco Editor, Tailwind CSS, Vite and many more.
        </p>
      </div>
    </Section>
  );
};
