import { useEffect } from "react";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
// import Services from "./component/Services/Services";
import Skills from "./component/Skills/Skills";
import About from "./component/About/About";
import Projects from "./component/Projects/Projects";
import Footer from "./component/Footer/Footer";
import Contact from "./component/Contact/Contact";
import Experience from "./component/Experience/experience";

function App() {
  // Always use dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900 text-white">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse bg-cyan-500"></div>
        <div className="absolute top-1/2 -right-40 w-80 h-80 rounded-full blur-3xl opacity-30 animate-pulse delay-700 bg-blue-500"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse delay-1000 bg-blue-600"></div>
      </div>
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        {/* <Services /> */}
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
