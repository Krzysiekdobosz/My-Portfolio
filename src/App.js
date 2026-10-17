import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Hobby } from './components/Hobby';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Banner />
        <Skills />
        <Projects />
        <Hobby />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
