import { Header } from './components/header.tsx';

import { Hero } from './components/sections/hero.tsx';
import { Features } from './components/sections/features.tsx';
import { About } from './components/sections/about.tsx';
import { Downloads } from './components/sections/downloads.tsx';
import { Hero2 } from './components/sections/hero2.tsx';
import { Github } from './components/sections/github.tsx';
import { Footer } from './components/sections/footer.tsx';

function App() {
  return (
    <div className="bg-light-pattern dark:bg-dark-pattern ">
      <Header />

      <div className="block sm:hidden overflow-hidden">
        <Hero />
        <div className="flex justify-center items-center mb-8">
          <Github />
        </div>
      </div>

      <div className="hidden sm:block overflow-hidden">
        <Hero2 />
      </div>

      <About />
      <Features />
      <Downloads />
      <Footer />
    </div>
  );
}

export default App;
