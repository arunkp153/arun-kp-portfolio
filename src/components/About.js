function About() {
  return (
    <>
      <section id="about" className="about">
        <div className="about-container">

          {/* Section Heading */}
          <div className="section-heading">
            <span>ABOUT ME</span>

            <h2>
              Building software with
              <br />
              purpose.
            </h2>
          </div>

          {/* Main Content */}
          <div className="about-content">

            <div className="about-text">

              <p className="intro">
                I'm Arun K P, a software developer focused on backend
                development and building practical applications.
              </p>

              <p>
                I work primarily with Java, Python, REST APIs, and SQL,
                while expanding my backend development skills with
                Spring Boot.
              </p>

              <p>
                I enjoy understanding how systems work, solving
                programming problems, and turning ideas into working
                software. My projects have given me hands-on experience
                with APIs, databases, frontend integration, and
                application development.
              </p>

            </div>

            {/* Focus Cards */}
            <div className="about-details">

              <div className="detail">
                <span className="detail-number">01</span>

                <div>
                  <h3>Backend Development</h3>

                  <p>
                    Java, Python, Flask, Spring Boot, REST APIs,
                    and SQL.
                  </p>
                </div>
              </div>

              <div className="detail">
                <span className="detail-number">02</span>

                <div>
                  <h3>Software Engineering</h3>

                  <p>
                    OOP, SDLC, Agile fundamentals, debugging,
                    testing, and system design fundamentals.
                  </p>
                </div>
              </div>

              <div className="detail">
                <span className="detail-number">03</span>

                <div>
                  <h3>Currently Building</h3>

                  <p>
                    Practical software projects while strengthening
                    Java and Spring Boot backend development.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <style>{`

        /* =========================
           ABOUT SECTION
        ========================= */

        .about {
          background: #FFFFFF;

          padding: 120px 24px;

          scroll-margin-top: 72px;
        }

        .about-container {
          max-width: 1180px;

          margin: 0 auto;
        }


        /* =========================
           SECTION HEADING
        ========================= */

        .section-heading {
          margin-bottom: 70px;
        }

        .section-heading > span {
          display: inline-block;

          margin-bottom: 18px;

          font-family: monospace;

          font-size: 12px;

          font-weight: 600;

          letter-spacing: 2px;

          color: #2563EB;
        }

        .section-heading h2 {
          margin: 0;

          font-family: Georgia, "Times New Roman", serif;

          font-size: clamp(42px, 5vw, 68px);

          line-height: 1.05;

          letter-spacing: -2.5px;

          font-weight: 600;

          color: #111827;
        }


        /* =========================
           CONTENT
        ========================= */

        .about-content {
          display: grid;

          grid-template-columns: 1.05fr 0.95fr;

          gap: 100px;

          align-items: start;
        }


        /* =========================
           TEXT
        ========================= */

        .about-text {
          max-width: 620px;
        }

        .about-text p {
          margin: 0 0 22px;

          font-size: 16px;

          line-height: 1.85;

          color: #6B7280;
        }

        .about-text .intro {
          margin-bottom: 28px;

          font-size: 21px;

          line-height: 1.65;

          color: #374151;
        }


        /* =========================
           DETAILS
        ========================= */

        .about-details {
          border-top: 1px solid #E5E7EB;
        }

        .detail {
          display: grid;

          grid-template-columns: 45px 1fr;

          gap: 20px;

          padding: 27px 0;

          border-bottom: 1px solid #E5E7EB;

          transition:
            padding-left 0.25s ease,
            background 0.25s ease;
        }

        .detail:hover {
          padding-left: 8px;
        }

        .detail-number {
          padding-top: 3px;

          font-family: monospace;

          font-size: 11px;

          color: #9CA3AF;
        }

        .detail h3 {
          margin: 0 0 8px;

          font-family: Georgia, "Times New Roman", serif;

          font-size: 19px;

          font-weight: 500;

          color: #111827;
        }

        .detail p {
          margin: 0;

          font-size: 14px;

          line-height: 1.7;

          color: #6B7280;
        }


        /* =========================
           TABLET
        ========================= */

        @media (max-width: 850px) {

          .about {
            padding: 90px 24px;
          }

          .about-content {
            grid-template-columns: 1fr;

            gap: 60px;
          }

          .about-text {
            max-width: 700px;
          }
        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {

          .about {
            padding: 80px 20px;
          }

          .section-heading {
            margin-bottom: 50px;
          }

          .section-heading h2 {
            font-size: 42px;

            letter-spacing: -1.8px;
          }

          .about-text .intro {
            font-size: 18px;
          }

          .about-text p {
            font-size: 15px;

            line-height: 1.75;
          }

          .about-content {
            gap: 45px;
          }

          .detail {
            grid-template-columns: 35px 1fr;

            gap: 12px;

            padding: 22px 0;
          }

          .detail h3 {
            font-size: 17px;
          }

          .detail p {
            font-size: 13px;
          }
        }

      `}</style>
    </>
  );
}

export default About;