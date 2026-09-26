function Experience() {
  const styles = {
    section: {
      backgroundColor: "#FFFFFF",
      padding: "110px 8%",
      color: "#111827",
    },

    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },

    header: {
      marginBottom: "65px",
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

    timeline: {
      position: "relative",
      maxWidth: "900px",
    },

    line: {
      position: "absolute",
      left: "7px",
      top: "8px",
      bottom: "8px",
      width: "1px",
      backgroundColor: "#E5E7EB",
    },

    item: {
      position: "relative",
      paddingLeft: "45px",
      marginBottom: "65px",
    },

    dot: {
      position: "absolute",
      left: "0",
      top: "6px",
      width: "15px",
      height: "15px",
      borderRadius: "50%",
      backgroundColor: "#FFFFFF",
      border: "3px solid #2563EB",
      boxSizing: "border-box",
      zIndex: "1",
    },

    date: {
      fontSize: "12px",
      fontWeight: "600",
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: "#2563EB",
      marginBottom: "10px",
    },

    role: {
      fontSize: "23px",
      fontWeight: "600",
      color: "#111827",
      marginBottom: "6px",
    },

    company: {
      fontSize: "15px",
      color: "#6B7280",
      marginBottom: "22px",
    },

    description: {
      fontSize: "15px",
      lineHeight: "1.8",
      color: "#6B7280",
      maxWidth: "750px",
      margin: "0 0 20px",
    },

    skills: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
    },

    skill: {
      padding: "7px 10px",
      backgroundColor: "#F7F8FA",
      border: "1px solid #E5E7EB",
      borderRadius: "5px",
      fontSize: "12px",
      color: "#4B5563",
    },

    responsiveStyle: `
      @media (max-width: 700px) {
        .experience-section {
          padding: 80px 6% !important;
        }

        .experience-item {
          padding-left: 35px !important;
        }

        .experience-role {
          font-size: 20px !important;
        }
      }

      @media (max-width: 500px) {
        .experience-section {
          padding: 70px 5% !important;
        }
      }
    `,
  };

  const experiences = [
    {
      date: "Aug 2024 — Oct 2024",
      role: "Full Stack Development Trainee",
      company: "Prawatech",
      description:
        "Worked on web application development using Flask and Django, building REST APIs, authentication flows, CRUD functionality, and frontend interfaces. Used GitHub for version control and collaborative development.",
      skills: [
        "Python",
        "Flask",
        "Django",
        "REST APIs",
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
      ],
    },

    {
      date: "Mar 2024 — Apr 2024",
      role: "IoT & ML Intern",
      company: "Loginware Softtech Pvt. Ltd.",
      description:
        "Worked with Raspberry Pi and environmental sensors, focusing on real-time sensor data processing and calibration. Explored machine learning and computer vision using Python and OpenCV.",
      skills: [
        "Python",
        "Raspberry Pi",
        "IoT",
        "Machine Learning",
        "OpenCV",
        "Sensor Processing",
      ],
    },
  ];

  return (
    <>
      <style>{styles.responsiveStyle}</style>

      <section
        id="experience"
        className="experience-section"
        style={styles.section}
      >
        <div style={styles.container}>

          {/* HEADER */}
          <div style={styles.header}>
            <div style={styles.label}>
              Experience
            </div>

            <h2 style={styles.title}>
              Where I've
              <br />
              worked.
            </h2>
          </div>

          {/* TIMELINE */}
          <div style={styles.timeline}>

            <div style={styles.line}></div>

            {experiences.map((experience, index) => (
              <div
                key={index}
                className="experience-item"
                style={styles.item}
              >

                <div style={styles.dot}></div>

                <div style={styles.date}>
                  {experience.date}
                </div>

                <div
                  className="experience-role"
                  style={styles.role}
                >
                  {experience.role}
                </div>

                <div style={styles.company}>
                  {experience.company}
                </div>

                <p style={styles.description}>
                  {experience.description}
                </p>

                <div style={styles.skills}>
                  {experience.skills.map((skill) => (
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

export default Experience;