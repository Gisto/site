import React from 'react';
import './github-markdown.css';

export const MDXLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="markdown-body">
      <article className="prose lg:prose-xl">{children}</article>
    </div>
  );
};
