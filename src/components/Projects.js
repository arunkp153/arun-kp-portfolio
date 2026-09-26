function Projects() {
  const styles = {
    section: {
      backgroundColor: "#F7F8FA",
      padding: "110px 8%",
      color: "#111827",
    },

    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },

    header: {
      marginBottom: "60px",
    },

    label: {
      fontSize: "12px",
      fontWeight: "600",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "#2563EB",
      marginBottom: "16px",
    },

    title: {
      fontSize: "clamp(36px, 5vw, 58px)",
      lineHeight: "1.1",
      letterSpacing: "-2px",
      margin: "0",
      fontWeight: "700",
    },

    subtitle: {
      maxWidth: "650px",
      marginTop: "18px",
      fontSize: "16px",
      lineHeight: "1.8",
      color: "#6B7280",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px",
    },

    card: {
      backgroundColor: "#FFFFFF",
      border: "1px solid #E5E7EB",
      borderRadius: "14px",
      padding: "30px",
      display: "flex",
      flexDirection: "column",
      minHeight: "330px",
      boxSizing: "border-box",
      transition: "all 0.25s ease",
    },

    cardTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "28px",
    },

    number: {
      fontSize: "12px",
      fontWeight: "600",
      letterSpacing: "1px",
      color: "#9CA3AF",
    },

    github: {
      fontSize: "13px",
      color: "#2563EB",
      textDecoration: "none",
      fontWeight: "600",
    },

    projectTitle: {
      fontSize: "25px",
      fontWeight: "600",
      letterSpacing: "-0.5px",
      margin: "0 0 12px",
      color: "#111827",
    },

    description: {
      fontSize: "15px",
      lineHeight: "1.8",
      color: "#6B7280",
      margin: "0",
    },

    technologies: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginTop: "25px",
    },

    technology: {
      padding: "7px 10px",
      backgroundColor: "#F7F8FA",
      border: "1px solid #E5E7EB",
      borderRadius: "5px",
      fontSize: "12px",
      color: "#4B5563",
    },

    cardBottom: {
      marginTop: "auto",
      paddingTop: "28px",
    },

    viewProject: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      color: "#111827",
      fontSize: "13px",
      fontWeight: "600",
      textDecoration: "none",
    },

    noLink: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      color: "#9CA3AF",
      fontSize: "13px",
      fontWeight: "500",
    },

    responsiveStyle: `
      @media (max-width: 800px) {
        .projects-grid {
          grid-template-columns: 1fr !important;
        }

        .projects-section {
          padding: 80px 6% !important;
        }
      }

      @media (max-width: 500px) {
        .projects-section {
          padding: 70px 5% !important;
        }

        .project-card {
          padding: 25px !important;
        }
      }
    `,
  };

  const projects = [
    {
      number: "01",
      title: "Gym Ledger",
      description:
        "A gym membership management system for managing members, memberships, and fee payment status.",
      technologies: [
        "JavaScript",
        "Web Development",
      ],
      github:
        "https://github.com/arunkp153/gym-ledger",
    },

    {
      number: "02",
      title: "Lean Bulk Tracker",
      description:
        "A personal calorie and nutrition tracking application designed to monitor daily food intake and fitness goals.",
      technologies: [
        "JavaScript",
        "Nutrition Tracking",
      ],
      github:
        "https://github.com/arunkp153/lean-bulk-tracker",
    },

    {
      number: "03",
      title: "AI Movie Companion",
      description:
        "A full-stack movie search application with AI-powered insights, trivia, and recommendations.",
      technologies: [
        "FastAPI",
        "Python",
        "React",
        "OMDb API",
      ],
      github:
        "https://github.com/arunkp153/ai-movie-companion",
    },

    {
      number: "04",
      title: "Prayana",
      description:
        "A ride booking web application focused on trip planning, cost estimation, user preferences, and map-based route visualization.",
      technologies: [
        "Python",
        "Flask",
        "REST APIs",
        "Leaflet.js",
        "OpenStreetMap",
      ],
      github: null,
    },

    {
      number: "05",
      title: "Diet Recommendation System",
      description:
        "A personalized diet recommendation application built with Python and Flask, using database-backed recommendations.",
      technologies: [
        "Python",
        "Flask",
        "MySQL",
        "REST APIs",
        "React",
      ],
      github: null,
    },
  ];

  return (
    <>
      <style>{styles.responsiveStyle}</style>

      <section
        id="projects"
        className="projects-section"
        style={styles.section}
      >
        <div style={styles.container}>

          {/* HEADER */}
          <div style={styles.header}>
            <div style={styles.label}>
              Projects
            </div>

            <h2 style={styles.title}>
              Things I've
              <br />
              built.
            </h2>

            <p style={styles.subtitle}>
              A selection of applications and projects I've
              worked on while developing my software engineering
              skills.
            </p>
          </div>

          {/* PROJECT GRID */}
          <div
            className="projects-grid"
            style={styles.grid}
          >
            {projects.map((project) => (
              <div
                key={project.number}
                className="project-card"
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-5px)";

                  e.currentTarget.style.boxShadow =
                    "0 18px 40px rgba(17, 24, 39, 0.08)";

                  e.currentTarget.style.borderColor =
                    "#D1D5DB";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";

                  e.currentTarget.style.boxShadow =
                    "none";

                  e.currentTarget.style.borderColor =
                    "#E5E7EB";
                }}
              >

                <div style={styles.cardTop}>
                  <span style={styles.number}>
                    {project.number}
                  </span>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.github}
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>

                <h3 style={styles.projectTitle}>
                  {project.title}
                </h3>

                <p style={styles.description}>
                  {project.description}
                </p>

                <div style={styles.technologies}>
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      style={styles.technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div style={styles.cardBottom}>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.viewProject}
                    >
                      View repository →
                    </a>
                  ) : (
                    <span style={styles.noLink}>
                      Project showcase
                    </span>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default Projects;