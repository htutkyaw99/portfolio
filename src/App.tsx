import About from "./sections/About";
import Contact from "./sections/Contact";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <main className="p-5 relative">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
