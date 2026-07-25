import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from './components/theme/theme-provider.tsx';

// GitHub Pages SPA redirect support:
// When a 404 occurs, 404.html redirects to index.html?/path
// This reads that query param and restores the real URL
(function () {
  var search = window.location.search;
  if (search && search.startsWith('?/')) {
    var path = search
      .slice(1)
      .replace(/~and~/g, '&')
      .replace(/~ques~/g, '?')
      .replace(/~hash~/g, '#');
    if (path !== location.pathname + location.search.slice(1)) {
      history.replaceState(null, '', path);
    }
  }
})();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
