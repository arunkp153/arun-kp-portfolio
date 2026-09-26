import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <style>{`

        /* =========================
           GLOBAL RESET
        ========================= */

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }

        body {
          margin: 0;

          padding: 0;

          background: #F7F8FA;

          color: #111827;

          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Helvetica,
            Arial,
            sans-serif;

          overflow-x: hidden;
        }

        button,
        input,
        textarea,
        select {
          font: inherit;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        img {
          max-width: 100%;
          height: auto;
        }

        a {
          color: inherit;
        }

        section {
          width: 100%;
          max-width: 100%;
        }

        /* =========================
           MOBILE FOUNDATION
        ========================= */

        @media (max-width: 768px) {

          html {
            overflow-x: hidden;
          }

          body {
            width: 100%;
            min-width: 0;
            overflow-x: hidden;
          }

        }

        @media (max-width: 480px) {

          body {
            font-size: 15px;
          }

        }

      `}</style>

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Education />

      <Contact />
    </>
  );
}

export default App;