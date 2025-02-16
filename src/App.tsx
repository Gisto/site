import { Header } from './components/header.tsx';

import { RouterProvider, Outlet } from 'dirty-react-router';

import { Footer } from './components/sections/footer.tsx';
import { Home } from './pages/home.tsx';
import { DocumentationPage } from '@/pages/documentation.tsx';
import { DocumentationArticlePage } from '@/pages/documentation-article.tsx';

const routes = [
  { path: '/', component: Home },
  { path: '/documentation', component: DocumentationPage },
  { path: '/documentation/:slug', component: DocumentationArticlePage },
];

function App() {
  return (
    <RouterProvider routes={routes}>
      <div id="top" className="bg-light-pattern dark:bg-dark-pattern ">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </RouterProvider>
  );
}

export default App;
