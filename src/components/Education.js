function Education() {
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

    list: {
      maxWidth: "950px",
    },

    item: {
      display: "grid",
      gridTemplateColumns: "180px 1fr",
      gap: "45px",
      padding: "30px 0",
      borderTop: "1px solid #E5E7EB",
    },

    year: {
      fontSize: "13px",
      fontWeight: "600",
      color: "#2563EB",
    },

    degree: {
      fontSize: "22px",
      fontWeight: "600",
      marginBottom: "8px",
      color: "#111827",
    },

    university: {
      fontSize: "15px",
      color: "#6B7280",
      marginBottom: "12px",
    },

    details: {
      fontSize: "14px",
      color: "#9CA3AF",
      lineHeight: "1.7",
    },

    responsiveStyle: `
      @media (max-width: 700px) {
        .education-section {
          padding: 80px 6% !important;
        }

        .education-item {
          grid-template-columns: 1fr !important;
          gap: 12px !important;
        }
      }

      @media (max-width: 500px) {
        .education-section {
          padding: 70px 5% !important;
        }
      }
    `,
  };

  const education = [
    {
      year: "2024 — 2026",
      degree: "Master of Computer Applications",
      university: "Presidency University, Bengaluru",
      details: "MCA • CGPA: 8.5",
    },

    {
      year: "2021 — 2024",
      degree: "Bachelor of Computer Applications",
      university: "RNS First Grade College, Bengaluru",
      details: "BCA • CGPA: 7.9",
    },

    {
      year: "2019 — 2021",
      degree: "Pre-University (PUC)",
      university: "Shardamba Independent PU College, Tumkur",
      details: "PCMB • 85%",
    },

    {
      year: "2018 — 2019",
      degree: "10th Standard",
      university: "Bangalore International Academy, Bengaluru",
      details: "State Board • 79.5%",
    },
  ];

  return (
    <>
      <style>{styles.responsiveStyle}</style>

      <section
        id="education"
        className="education-section"
        style={styles.section}
      >
        <div style={styles.container}>

          {/* HEADER */}
          <div style={styles.header}>
            <div style={styles.label}>
              Education
            </div>

            <h2 style={styles.title}>
              Academic
              <br />
              background.
            </h2>
          </div>

          {/* EDUCATION LIST */}
          <div style={styles.list}>
            {education.map((item, index) => (
              <div
                key={index}
                className="education-item"
                style={styles.item}
              >
                <div style={styles.year}>
                  {item.year}
                </div>

                <div>
                  <div style={styles.degree}>
                    {item.degree}
                  </div>

                  <div style={styles.university}>
                    {item.university}
                  </div>

                  <div style={styles.details}>
                    {item.details}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default Education;