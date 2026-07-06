import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="
        min-h-screen
        bg-[#050816]
        text-white
        overflow-x-hidden
        selection:bg-violet-500
        selection:text-white
      "
    >
      <Sidebar />

      <main
        className="
          w-full
          lg:ml-24
          lg:w-[calc(100%-6rem)]
          transition-all
          duration-300
        "
      >
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;