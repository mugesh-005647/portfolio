import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <div
      className="
        min-h-screen
        overflow-x-hidden
        bg-[#07090B]
        text-[#F5F7F6]
      "
    >

      {/* =====================================================
          GLOBAL UI
      ====================================================== */}

      <CustomCursor />

      <ScrollProgress />


      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <Navbar />


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main>

        {/* =================================================
            HERO
        ================================================== */}

        <Hero />


        {/* =================================================
            ABOUT
        ================================================== */}

        <About />


        {/* =================================================
            SKILLS
        ================================================== */}

        <Skills />


        {/* =================================================
            EXPERIENCE
        ================================================== */}

        <Experience />


        {/* =================================================
            PROJECTS
        ================================================== */}

        <Projects />


        {/* =================================================
            CONTACT
        ================================================== */}

        <Contact />

      </main>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />

    </div>
  );
}

export default App;