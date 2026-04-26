const AboutPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>👋 Hi, I'm Vishnu</h1>

      <p style={styles.text}>
        I'm a passionate <span style={styles.highlight}>Software Developer</span> and 
        <span style={styles.highlight}> Tech Enthusiast</span> who loves building modern, 
        scalable, and user-friendly web applications.
      </p>

      <p style={styles.text}>
        I enjoy working with technologies like React, Next.js, Node.js, and MongoDB. 
        My focus is on creating clean UI/UX experiences and writing efficient backend logic.
      </p>

      <p style={styles.text}>
        🚀 I love solving real-world problems through code, collaborating on exciting projects, 
        and continuously learning new technologies.
      </p>

      <p style={styles.text}>
        When I'm not coding, you’ll find me exploring new tech, improving my skills, 
        or working on innovative side projects.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "700px",
    margin: "2rem auto",
    padding: "1rem",
    lineHeight: "1.7",
    color: "#ccc",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#fff",
  },
  text: {
    marginBottom: "1rem",
    fontSize: "1rem",
  },
  highlight: {
    color: "#38bdf8",
    fontWeight: "600",
  },
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
