function Contact() {
  const email = "arunnkp0207@gmail.com";
  const phone = "7483415428";
  const linkedin =
    "https://www.linkedin.com/in/arun-kp-93766b371/";
  const github = "https://github.com/arunkp153";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);

      const button = document.getElementById("copy-email-button");

      if (button) {
        button.innerText = "Copied!";

        setTimeout(() => {
          button.innerText = "Copy Email";
        }, 2000);
      }
    } catch (error) {
      window.prompt("Copy this email address:", email);
    }
  };

  const styles = {
    section: {
      backgroundColor: "#111827",
      color: "#FFFFFF",
      padding: "120px 8%",
    },

    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },

    label: {
      fontSize: "12px",
      fontWeight: "600",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "#60A5FA",
      marginBottom: "18px",
    },

    title: {
      fontSize: "clamp(42px, 6vw, 72px)",
      lineHeight: "1.05",
      letterSpacing: "-3px",
      fontWeight: "700",
      margin: "0",
      maxWidth: "800px",
    },

    description: {
      maxWidth: "600px",
      fontSize: "17px",
      lineHeight: "1.8",
      color: "#9CA3AF",
      marginTop: "25px",
    },

    contactInfo: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginTop: "35px",
    },

    infoLink: {
      display: "inline-flex",
      alignItems: "center",
      width: "fit-content",
      fontSize: "16px",
      color: "#FFFFFF",
      textDecoration: "none",
      transition: "color 0.25s ease",
    },

    links: {
      display: "flex",
      flexWrap: "wrap",
      gap: "14px",
      marginTop: "35px",
    },

    primaryButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "14px 20px",
      backgroundColor: "#FFFFFF",
      color: "#111827",
      border: "none",
      borderRadius: "7px",
      fontSize: "14px",
      fontWeight: "600",
      textDecoration: "none",
      cursor: "pointer",
      transition: "all 0.25s ease",
    },

    outlineButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "14px 20px",
      backgroundColor: "transparent",
      color: "#FFFFFF",
      border: "1px solid #374151",
      borderRadius: "7px",
      fontSize: "14px",
      fontWeight: "600",
      textDecoration: "none",
      cursor: "pointer",
      transition: "all 0.25s ease",
    },

    bottom: {
      marginTop: "90px",
      paddingTop: "25px",
      borderTop: "1px solid #374151",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "15px",
    },

    bottomText: {
      fontSize: "13px",
      color: "#6B7280",
    },

    responsiveStyle: `
      @media (max-width: 600px) {
        .contact-section {
          padding: 85px 6% !important;
        }

        .contact-bottom {
          flex-direction: column !important;
        }
      }

      @media (max-width: 500px) {
        .contact-section {
          padding: 75px 5% !important;
        }
      }
    `,
  };

  return (
    <>
      <style>{styles.responsiveStyle}</style>

      <section
        id="contact"
        className="contact-section"
        style={styles.section}
      >
        <div style={styles.container}>

          {/* LABEL */}
          <div style={styles.label}>
            Contact
          </div>

          {/* TITLE */}
          <h2 style={styles.title}>
            Let's build
            <br />
            something useful.
          </h2>

          {/* DESCRIPTION */}
          <p style={styles.description}>
            I'm open to software development opportunities,
            backend roles, internships, and interesting
            projects. Feel free to reach out.
          </p>

          {/* CONTACT INFORMATION */}
          <div style={styles.contactInfo}>

            {/* EMAIL */}
            <a
              href={`mailto:${email}`}
              style={styles.infoLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#60A5FA";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#FFFFFF";
              }}
            >
              {email}
            </a>

            {/* PHONE */}
            <a
              href={`tel:${phone}`}
              style={styles.infoLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#60A5FA";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#FFFFFF";
              }}
            >
              +91 {phone}
            </a>

          </div>

          {/* BUTTONS */}
          <div style={styles.links}>

            {/* EMAIL */}
            <a
              href={`mailto:${email}`}
              style={styles.primaryButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
              }}
            >
              Email Me →
            </a>

            {/* COPY EMAIL */}
            <button
              id="copy-email-button"
              type="button"
              style={styles.outlineButton}
              onClick={copyEmail}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "#60A5FA";
                e.currentTarget.style.color =
                  "#60A5FA";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "#374151";
                e.currentTarget.style.color =
                  "#FFFFFF";
              }}
            >
              Copy Email
            </button>

            {/* PHONE */}
            <a
              href={`tel:${phone}`}
              style={styles.outlineButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "#60A5FA";
                e.currentTarget.style.color =
                  "#60A5FA";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "#374151";
                e.currentTarget.style.color =
                  "#FFFFFF";
              }}
            >
              Call Me
            </a>

            {/* LINKEDIN */}
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              style={styles.outlineButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "#60A5FA";
                e.currentTarget.style.color =
                  "#60A5FA";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "#374151";
                e.currentTarget.style.color =
                  "#FFFFFF";
              }}
            >
              LinkedIn ↗
            </a>

            {/* GITHUB */}
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              style={styles.outlineButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "#60A5FA";
                e.currentTarget.style.color =
                  "#60A5FA";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "#374151";
                e.currentTarget.style.color =
                  "#FFFFFF";
              }}
            >
              GitHub ↗
            </a>

          </div>

          {/* BOTTOM */}
          <div
            className="contact-bottom"
            style={styles.bottom}
          >
            <div style={styles.bottomText}>
              © 2026 Arun K P
            </div>

            <div style={styles.bottomText}>
              Bengaluru, India
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;