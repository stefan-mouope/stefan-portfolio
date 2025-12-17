import ThreeBackground from './components/common/ThreeBackground/ThreeBackground';

import Header from './components/layout/Header/Header';


import Hero from './components/sections/Hero/Hero';
import './App.css';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import Projects from './components/sections/Projects/Projects';

function App() {
  return (
    <div className="App">
      <ThreeBackground />
      <Header />
      
      <main>
        <Hero />
        <About />
        <Skills/>
        <Projects />
        {/* Les autres sections viendront ici */}
      </main>
    </div>
  );
}

export default App;