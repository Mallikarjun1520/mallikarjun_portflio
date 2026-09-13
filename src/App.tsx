import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Achievements />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
