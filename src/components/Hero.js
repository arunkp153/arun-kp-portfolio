function Hero() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <section className="hero">
        <div className="hero-container">

          {/* Left Content */}
          <div className="hero-content">

            <div className="availability">
              <span className="availability-dot"></span>
              AVAILABLE FOR SOFTWARE ROLES
            </div>

            <h1>
              Hi, I'm
              <br />
              <span>Arun K P.</span>
            </h1>

            <h2>Software Developer</h2>

            <p className="hero-description">
              I build practical software applications with a focus on
              backend development, REST APIs, databases, and problem solving.
            </p>

            {/* Technology Tags */}
            <div className="tech-tags">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Python</span>
              <span>REST APIs</span>
              <span>SQL</span>
            </div>

            {/* Buttons */}
            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={scrollToProjects}
              >
                View My Work
                <span>→</span>
              </button>

              <a
                href="/Arun_K_P_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                Resume
                <span>↗</span>
              </a>

              <a
                href="https://github.com/arunkp153"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                GitHub
                <span>↗</span>
              </a>

            </div>
          </div>

          {/* Right Visual */}
          <div className="hero-visual">

            <div className="visual-header">
              <span>BACKEND DEVELOPMENT</span>

              <div className="status">
                <span></span>
                Building
              </div>
            </div>

            <div className="visual-line"></div>

            {/* Technology Grid */}
            <div className="stack-grid">

              <div className="stack-item">
                <div className="stack-number">01</div>

                <div>
                  <strong>Java</strong>
                  <small>Programming</small>
                </div>
              </div>

              <div className="stack-item">
                <div className="stack-number">02</div>

                <div>
                  <strong>Spring Boot</strong>
                  <small>Backend</small>
                </div>
              </div>

              <div className="stack-item">
                <div className="stack-number">03</div>

                <div>
                  <strong>Python</strong>
                  <small>Development</small>
                </div>
              </div>

              <div className="stack-item">
                <div className="stack-number">04</div>

                <div>
                  <strong>REST APIs</strong>
                  <small>Integration</small>
                </div>
              </div>

              <div className="stack-item">
                <div className="stack-number">05</div>

                <div>
                  <strong>SQL</strong>
                  <small>Databases</small>
                </div>
              </div>

              <div className="stack-item">
                <div className="stack-number">06</div>

                <div>
                  <strong>Git</strong>
                  <small>Version Control</small>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <style>{`

        /* =========================
           HERO
        ========================= */

        .hero {
          min-height: calc(100vh - 72px);

          background: #F7F8FA;

          display: flex;
          align-items: center;

          padding: 90px 24px;

          overflow: hidden;
        }

        .hero-container {
          width: 100%;
          max-width: 1180px;

          margin: 0 auto;

          display: grid;

          grid-template-columns: 1.1fr 0.9fr;

          gap: 80px;

          align-items: center;
        }


        /* =========================
           LEFT CONTENT
        ========================= */

        .hero-content {
          max-width: 680px;
        }

        .availability {
          display: flex;
          align-items: center;

          gap: 10px;

          margin-bottom: 28px;

          font-family: monospace;

          font-size: 12px;

          font-weight: 600;

          letter-spacing: 2px;

          color: #2563EB;
        }

        .availability-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #2563EB;

          box-shadow: 0 0 0 5px rgba(37, 99, 235, 0.1);

          animation: pulse 2s infinite;
        }

        @keyframes pulse {

          0% {
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.25);
          }

          70% {
            box-shadow: 0 0 0 7px rgba(37, 99, 235, 0);
          }

          100% {
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
          }

        }


        /* =========================
           HEADING
        ========================= */

        .hero h1 {
          margin: 0;

          font-family: Georgia, "Times New Roman", serif;

          font-size: clamp(60px, 7vw, 96px);

          line-height: 0.95;

          letter-spacing: -4px;

          font-weight: 700;

          color: #111827;
        }

        .hero h1 span {
          color: #2563EB;
        }


        /* =========================
           ROLE
        ========================= */

        .hero h2 {
          margin: 30px 0 20px;

          font-family: Georgia, "Times New Roman", serif;

          font-size: clamp(28px, 3vw, 38px);

          font-weight: 400;

          letter-spacing: -1px;

          color: #374151;
        }


        /* =========================
           DESCRIPTION
        ========================= */

        .hero-description {
          max-width: 650px;

          margin: 0;

          font-size: 17px;

          line-height: 1.8;

          color: #6B7280;
        }


        /* =========================
           TECHNOLOGY TAGS
        ========================= */

        .tech-tags {
          display: flex;

          flex-wrap: wrap;

          gap: 10px;

          margin-top: 28px;
        }

        .tech-tags span {
          padding: 9px 14px;

          background: #FFFFFF;

          border: 1px solid #E5E7EB;

          border-radius: 7px;

          font-size: 13px;

          color: #374151;

          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease;
        }

        .tech-tags span:hover {
          transform: translateY(-2px);

          border-color: #2563EB;

          color: #2563EB;
        }


        /* =========================
           BUTTONS
        ========================= */

        .hero-buttons {
          display: flex;

          flex-wrap: wrap;

          gap: 12px;

          margin-top: 38px;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 10px;

          min-height: 52px;

          padding: 0 22px;

          border-radius: 7px;

          font-size: 14px;

          font-weight: 600;

          text-decoration: none;

          cursor: pointer;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .primary-button {
          border: 1px solid #2563EB;

          background: #2563EB;

          color: #FFFFFF;
        }

        .primary-button:hover {
          transform: translateY(-2px);

          box-shadow:
            0 10px 25px rgba(37, 99, 235, 0.2);
        }

        .secondary-button {
          border: 1px solid #D1D5DB;

          background: #FFFFFF;

          color: #111827;
        }

        .secondary-button:hover {
          transform: translateY(-2px);

          border-color: #2563EB;

          color: #2563EB;
        }


        /* =========================
           RIGHT VISUAL
        ========================= */

        .hero-visual {
          position: relative;

          padding: 32px;

          background: #FFFFFF;

          border: 1px solid #E5E7EB;

          border-radius: 18px;

          box-shadow:
            0 25px 60px rgba(17, 24, 39, 0.07);

          animation: visualAppear 0.8s ease both;
        }

        @keyframes visualAppear {

          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }


        /* =========================
           VISUAL HEADER
        ========================= */

        .visual-header {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 20px;
        }

        .visual-header > span {
          font-family: monospace;

          font-size: 12px;

          font-weight: 600;

          letter-spacing: 2px;

          color: #6B7280;
        }

        .status {
          display: flex;

          align-items: center;

          gap: 7px;

          font-size: 11px;

          color: #6B7280;
        }

        .status span {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #22C55E;
        }


        /* =========================
           DIVIDER
        ========================= */

        .visual-line {
          height: 1px;

          margin: 24px 0;

          background: #E5E7EB;
        }


        /* =========================
           TECHNOLOGY GRID
        ========================= */

        .stack-grid {
          display: grid;

          grid-template-columns: 1fr 1fr;
        }

        .stack-item {
          display: flex;

          align-items: center;

          gap: 15px;

          min-height: 82px;

          padding: 12px 10px;

          border-bottom: 1px solid #F0F1F3;

          transition:
            background 0.25s ease,
            transform 0.25s ease;
        }

        .stack-item:nth-child(odd) {
          border-right: 1px solid #F0F1F3;

          padding-right: 20px;
        }

        .stack-item:nth-child(even) {
          padding-left: 20px;
        }

        .stack-item:hover {
          background: #F8FAFF;

          transform: translateX(3px);
        }

        .stack-number {
          font-family: monospace;

          font-size: 11px;

          color: #9CA3AF;

          min-width: 22px;
        }

        .stack-item strong {
          display: block;

          margin-bottom: 4px;

          font-family: Georgia, "Times New Roman", serif;

          font-size: 17px;

          font-weight: 500;

          color: #111827;
        }

        .stack-item small {
          display: block;

          font-size: 11px;

          color: #9CA3AF;
        }


        /* =========================
           TABLET
        ========================= */

        @media (max-width: 950px) {

          .hero-container {
            grid-template-columns: 1fr;

            gap: 60px;
          }

          .hero-content {
            max-width: 760px;
          }

          .hero-visual {
            max-width: 650px;

            width: 100%;

            margin: 0 auto;
          }

        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {

          .hero {
            min-height: auto;

            padding: 70px 20px;
          }

          .hero-container {
            gap: 50px;
          }

          .hero h1 {
            font-size: clamp(52px, 16vw, 72px);

            letter-spacing: -3px;
          }

          .hero h2 {
            margin-top: 24px;

            font-size: 28px;
          }

          .hero-description {
            font-size: 15px;

            line-height: 1.7;
          }

          .tech-tags {
            gap: 8px;
          }

          .tech-tags span {
            padding: 8px 11px;

            font-size: 12px;
          }

          .hero-buttons {
            flex-direction: column;

            align-items: stretch;
          }

          .primary-button,
          .secondary-button {
            width: 100%;
          }

          .hero-visual {
            padding: 22px;

            border-radius: 14px;
          }

          .visual-header {
            align-items: flex-start;

            flex-direction: column;

            gap: 10px;
          }

          .stack-grid {
            grid-template-columns: 1fr;
          }

          .stack-item:nth-child(odd) {
            border-right: none;

            padding-right: 10px;
          }

          .stack-item:nth-child(even) {
            padding-left: 10px;
          }

          .stack-item {
            min-height: 70px;
          }

        }

      `}</style>
    </>
  );
}

export default Hero;