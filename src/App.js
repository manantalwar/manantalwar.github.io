import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';


export default function App() {
  return (
    <main className='text-gray-400 body-font bg-gray-900'>
      <Navbar />
      <Header />
      <About />
      <Experiences />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
