import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          {/* Logo / Name */}
          <button
            className="logo"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Arun K P
          </button>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="mobile-nav">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;

          background: rgba(247, 248, 250, 0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);

          border-bottom: 1px solid #E5E7EB;
        }

        .nav-container {
          max-width: 1180px;
          height: 72px;

          margin: 0 auto;
          padding: 0 24px;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Name */

        .logo {
          border: none;
          background: transparent;
          padding: 0;

          font-size: 23px;
          font-weight: 800;
          letter-spacing: -0.6px;

          color: #111827;

          cursor: pointer;

          transition: opacity 0.2s ease;
        }

        .logo:hover {
          opacity: 0.7;
        }

        /* Desktop Navigation */

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .desktop-nav button {
          position: relative;

          border: none;
          background: transparent;

          padding: 10px 13px;

          font-size: 14px;
          font-weight: 500;

          color: #6B7280;

          cursor: pointer;

          transition:
            color 0.25s ease,
            transform 0.25s ease;
        }

        .desktop-nav button::after {
          content: "";

          position: absolute;

          left: 13px;
          right: 13px;
          bottom: 3px;

          height: 2px;

          background: #2563EB;

          transform: scaleX(0);
          transform-origin: center;

          transition: transform 0.25s ease;
        }

        .desktop-nav button:hover {
          color: #111827;
          transform: translateY(-1px);
        }

        .desktop-nav button:hover::after {
          transform: scaleX(1);
        }

        /* Mobile Menu Button */

        .menu-button {
          display: none;

          width: 42px;
          height: 42px;

          border: 1px solid #E5E7EB;
          border-radius: 10px;

          background: #FFFFFF;

          cursor: pointer;

          padding: 9px;
        }

        .menu-button span {
          display: block;

          width: 100%;
          height: 2px;

          margin: 5px 0;

          background: #111827;

          border-radius: 2px;
        }

        /* Mobile Navigation */

        .mobile-nav {
          display: none;
        }

        /* Responsive */

        @media (max-width: 768px) {

          .nav-container {
            height: 66px;
            padding: 0 20px;
          }

          .desktop-nav {
            display: none;
          }

          .menu-button {
            display: block;
          }

          .mobile-nav {
            display: flex;

            flex-direction: column;

            padding: 10px 20px 18px;

            background: #F7F8FA;

            border-top: 1px solid #E5E7EB;
          }

          .mobile-nav button {
            width: 100%;

            padding: 14px 8px;

            text-align: left;

            border: none;
            border-bottom: 1px solid #E5E7EB;

            background: transparent;

            font-size: 15px;
            font-weight: 500;

            color: #374151;

            cursor: pointer;

            transition:
              color 0.2s ease,
              padding-left 0.2s ease;
          }

          .mobile-nav button:last-child {
            border-bottom: none;
          }

          .mobile-nav button:hover {
            color: #2563EB;
            padding-left: 14px;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;