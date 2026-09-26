function Skills() {
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
      maxWidth: "680px",
      marginTop: "18px",
      fontSize: "16px",
      lineHeight: "1.8",
      color: "#6B7280",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "18px",
    },

    card: {
      backgroundColor: "#FFFFFF",
      border: "1px solid #E5E7EB",
      borderRadius: "12px",
      padding: "28px",
      transition: "all 0.25s ease",
    },

    number: {
      fontSize: "12px",
      color: "#9CA3AF",
      marginBottom: "22px",
      fontWeight: "600",
      letterSpacing: "1px",
    },

    cardTitle: {
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "16px",
      color: "#111827",
    },

    skills: {
      display: "flex",
      flexWrap: "wrap",
      gap: "9px",
    },

    skill: {
      padding: "8px 11px",
      backgroundColor: "#F7F8FA",
      border: "1px solid #E5E7EB",
      borderRadius: "5px",
      fontSize: "13px",
      color: "#4B5563",
    },

    responsiveStyle: `
      @media (max-width: 750px) {
        .skills-grid {
          grid-template-columns: 1fr !important;
        }

        .skills-section {
          padding: 80px 6% !important;
        }
      }

      @media (max-width: 500px) {
        .skills-section {
          padding: 70px 5% !important;
        }
      }
    `,
  };

  const skillGroups = [
    {
      number: "01",
      title: "Languages",
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "SQL",
      ],
    },

    {
      number: "02",
      title: "Backend & APIs",
      skills: [
        "Spring Boot",
        "Flask",
        "REST APIs",
        "JSON",
        "API Design",
      ],
    },

    {
      number: "03",
      title: "Frontend",
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
      ],
    },

    {
      number: "04",
      title: "Databases",
      skills: [
        "MySQL",
        "SQLite",
        "Database Design",
        "SQL Queries",
        "Normalization",
      ],
    },

    {
      number: "05",
      title: "Machine Learning & AI",
      skills: [
        "Machine Learning",
        "Classification",
        "Regression",
        "OpenCV",
        "AI Fundamentals",
        "LLM Fundamentals",
      ],
    },

    {
      number: "06",
      title: "Software Engineering",
      skills: [
        "System Design",
        "SDLC",
        "Agile",
        "OOP",
        "Design Principles",
        "Debugging",
        "Unit Testing",
        "Code Review",
      ],
    },

    {
      number: "07",
      title: "Development Tools",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
      ],
    },

    {
      number: "08",
      title: "Problem Solving",
      skills: [
        "Data Structures",
        "Algorithms",
        "Problem Solving",
        "Logical Thinking",
      ],
    },
  ];

  return (
    <>
      <style>{styles.responsiveStyle}</style>

      <section
        id="skills"
        className="skills-section"
        style={styles.section}
      >
        <div style={styles.container}>

          {/* SECTION HEADER */}
          <div style={styles.header}>
            <div style={styles.label}>
              Skills
            </div>

            <h2 style={styles.title}>
              My technical
              <br />
              toolkit.
            </h2>

            <p style={styles.subtitle}>
              A combination of programming languages, frontend
              and backend technologies, databases, AI and
              machine learning, software engineering practices,
              and development tools.
            </p>
          </div>

          {/* SKILL CARDS */}
          <div
            className="skills-grid"
            style={styles.grid}
          >
            {skillGroups.map((group) => (
              <div
                key={group.number}
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-4px)";

                  e.currentTarget.style.boxShadow =
                    "0 15px 35px rgba(17, 24, 39, 0.07)";

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

                <div style={styles.number}>
                  {group.number}
                </div>

                <div style={styles.cardTitle}>
                  {group.title}
                </div>

                <div style={styles.skills}>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      style={styles.skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default Skills;