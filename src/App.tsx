import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Mail,
  Phone,
  MapPin,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Award,
} from "lucide-react";
import profileImage from "./assets/IMG_20250709_142207.jpg";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading animation
    setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 2000);

    // Add page transition effect
    document.body.style.opacity = "0";
    setTimeout(() => {
      document.body.style.transition = "opacity 0.5s ease";
      document.body.style.opacity = "1";
    }, 100);

    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "education",
        "contact",
      ];
      const scrollY = window.scrollY;

      // Add scroll-triggered effects
      const scrollProgress =
        scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      document.documentElement.style.setProperty(
        "--scroll-progress",
        scrollProgress.toString()
      );

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollY >= offsetTop - 100 &&
            scrollY < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add haptic feedback simulation
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const skills = [
    "Flutter & Dart",
    "React Js",
    "JavaScript",
    "HTML & CSS",
    "Java (OOP, Data Structures)",
    "C++",
    "Python",
    "PHP Laravel",
    "MySQL",
    "Git & GitHub",
    "REST APIs",
    "AI basics and Machine Learning",
  ];

  const projects = [
    {
      title: "Sportify",
      description:
        "Full-featured mobile app and website to reserve stadiums and book sports events",
      technologies: ["Flutter", "React", "Laravel", "MySQL"],
      features: [
        "Cross-platform mobile app with Flutter",
        "React web interface",
        "Laravel backend with MySQL",
        "Tournament management",
        "Event creation and booking",
        "Stadium availability tracking",
        "Preparing for Play Store and Apple Store release",
      ],
      status: "In Development",
    },
    {
      title: "Flutter & React Projects",
      description: "Collection of UI clones, applications, and prototypes",
      technologies: ["Flutter", "React", "JavaScript", "Dart"],
      features: [
        "UI clones and responsive designs",
        "To-do applications",
        "Calculator implementations",
        "Small e-commerce prototypes",
        "State management practice",
        "Animations and transitions",
      ],
      status: "Multiple Projects",
    },
  ];

  const certificates = [
    "Flutter for beginners (Great Learning)",
    "Android Application Development (Great Learning)",
    "React 8 hours full course",
  ];

  return (
    <div>
      {/* Loading Screen */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="loading-screen"
        >
          <div className="loading-container">
            <div className="loading-logo holographic-text">AA</div>
            <div className="loading-text">Loading Portfolio...</div>
            <div className="loading-bar">
              <div className="loading-progress"></div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Floating Particles */}
      <div className="floating-particles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="floating-particle" />
        ))}
      </div>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <motion.div
            className="nav-logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            ALI AMMAR
          </motion.div>

          <div className="nav-links">
            {[
              "home",
              "about",
              "skills",
              "experience",
              "projects",
              "education",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${
                  activeSection === section ? "active" : ""
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="cyberpunk-grid"></div>
        <div className="particle-container">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="profile-photo-container"
            >
              <img
                src={profileImage}
                alt="Ali Mortadha Ammar"
                className="profile-photo"
              />
            </motion.div>

            <h1 className="hero-title">
              ALI MORTADHA
              <br />
              <span className="hero-name typing-animation holographic-text">
                AMMAR
              </span>
            </h1>
            <p className="hero-subtitle">
              <span className="holographic-text">
                Flutter Developer | Frontend React Developer
              </span>
            </p>

            <div className="hero-contact">
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Phone size={20} />
                +961 81 078 253
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Mail size={20} />
                aliammarjob@gmail.com
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <MapPin size={20} />
                Beirut, Lebanon
              </div>
            </div>

            <div className="hero-buttons">
              <motion.a
                href="https://github.com/AliAmmar2211"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary liquid-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                GitHub
              </motion.a>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="btn btn-primary liquid-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-reveal">About Me</h2>
            <div className="about-container">
              <p className="about-text">
                I am a Computer Science graduate with hands-on experience in
                Flutter mobile development, Web frontend Development and a solid
                foundation in Java, C++, Python, MySQL. Passionate about
                building user-focused apps with clean UI/UX. Skilled in REST
                APIs, state management, and agile teamwork. Fluent in Arabic and
                English.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title holographic-text">Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="skill-card"
                >
                  <div className="skill-icon">
                    <Code size={24} />
                  </div>
                  <div className="skill-name">{skill}</div>
                  <div className="skill-glow"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section section-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Work Experience</h2>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <div className="card holographic-card">
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div className="card-icon">
                    <Briefcase size={24} color="white" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="card-title">
                      Flutter Mobile Development Intern
                    </h3>
                    <p className="card-subtitle">Aladdin Company, Lebanon</p>
                    <p className="card-text" style={{ marginBottom: "1rem" }}>
                      April 2025 – July 2025
                    </p>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.5rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <span
                          style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: "#667eea",
                            borderRadius: "50%",
                            marginTop: "0.5rem",
                            flexShrink: 0,
                          }}
                        ></span>
                        <span className="card-text">
                          Developed cross-platform mobile applications using
                          Flutter and Dart
                        </span>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.5rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <span
                          style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: "#667eea",
                            borderRadius: "50%",
                            marginTop: "0.5rem",
                            flexShrink: 0,
                          }}
                        ></span>
                        <span className="card-text">
                          Collaborated on UI design and feature implementation
                        </span>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.5rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <span
                          style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: "#667eea",
                            borderRadius: "50%",
                            marginTop: "0.5rem",
                            flexShrink: 0,
                          }}
                        ></span>
                        <span className="card-text">
                          Integrated REST APIs and worked on debugging
                        </span>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.5rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <span
                          style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: "#667eea",
                            borderRadius: "50%",
                            marginTop: "0.5rem",
                            flexShrink: 0,
                          }}
                        ></span>
                        <span className="card-text">
                          Participated in agile sprints and daily stand-ups
                        </span>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.5rem",
                        }}
                      >
                        <span
                          style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: "#667eea",
                            borderRadius: "50%",
                            marginTop: "0.5rem",
                            flexShrink: 0,
                          }}
                        ></span>
                        <span className="card-text">
                          Improved code quality through real-world teamwork
                          experience
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section section-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Projects</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                gap: "2rem",
              }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.02,
                    rotateY: 5,
                    transition: { duration: 0.3 },
                  }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="card magnetic-card glow-effect"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      className="card-icon"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <Code size={20} color="white" />
                    </div>
                    <div>
                      <h3 className="card-title">{project.title}</h3>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "#667eea",
                          fontWeight: 600,
                        }}
                      >
                        {project.status}
                      </p>
                    </div>
                  </div>

                  <p className="card-text" style={{ marginBottom: "1rem" }}>
                    {project.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: "0.25rem 0.75rem",
                          backgroundColor: "#e0f2fe",
                          color: "#0369a1",
                          borderRadius: "9999px",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.5rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <span
                          style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: "#667eea",
                            borderRadius: "50%",
                            marginTop: "0.5rem",
                            flexShrink: 0,
                          }}
                        ></span>
                        <span className="card-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section section-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Education & Certificates</h2>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              {/* Education */}
              <div className="card" style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div className="card-icon">
                    <GraduationCap size={24} color="white" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="card-title">
                      Bachelor of Science in Computer Sciences
                    </h3>
                    <p className="card-subtitle">
                      Al Maaref University, Lebanon
                    </p>
                    <p className="card-text" style={{ marginBottom: "0.5rem" }}>
                      2022 – 2025
                    </p>
                    <p className="card-text">
                      <span style={{ fontWeight: 600 }}>GPA:</span> 3.3 / 4.0
                    </p>
                  </div>
                </div>
              </div>

              {/* Certificates */}
              <div className="card" style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div className="card-icon">
                    <Award size={24} color="white" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="card-title">Certificates</h3>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {certificates.map((cert, index) => (
                        <li
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.5rem",
                            marginBottom: "0.5rem",
                          }}
                        >
                          <span
                            style={{
                              width: "8px",
                              height: "8px",
                              backgroundColor: "#9333ea",
                              borderRadius: "50%",
                              marginTop: "0.5rem",
                              flexShrink: 0,
                            }}
                          ></span>
                          <span className="card-text">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="card">
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div className="card-icon">
                    <User size={24} color="white" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="card-title">Languages</h3>
                    <div className="language-grid">
                      <motion.div
                        className="language-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="language-flag">🇱🇧</div>
                        <div className="language-name">Arabic</div>
                        <div className="language-level">Native</div>
                        <div className="language-progress">
                          <div
                            className="language-bar"
                            style={{ width: "100%" }}
                          ></div>
                        </div>
                      </motion.div>
                      <motion.div
                        className="language-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <div className="language-flag">🇺🇸</div>
                        <div className="language-name">English</div>
                        <div className="language-level">Fluent</div>
                        <div className="language-progress">
                          <div
                            className="language-bar"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </motion.div>
                      <motion.div
                        className="language-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <div className="language-flag">🇫🇷</div>
                        <div className="language-name">French</div>
                        <div className="language-level">Basic</div>
                        <div className="language-progress">
                          <div
                            className="language-bar"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="cyberpunk-grid"></div>
        <div className="floating-particles">
          <div className="floating-particle"></div>
          <div className="floating-particle"></div>
          <div className="floating-particle"></div>
          <div className="floating-particle"></div>
          <div className="floating-particle"></div>
          <div className="floating-particle"></div>
          <div className="floating-particle"></div>
          <div className="floating-particle"></div>
          <div className="floating-particle"></div>
          <div className="floating-particle"></div>
        </div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center", position: "relative", zIndex: 2 }}
          >
            <h2 className="section-title text-reveal">Let's Work Together</h2>
            <p
              className="holographic-text"
              style={{
                fontSize: "1.25rem",
                marginBottom: "3rem",
                maxWidth: "600px",
                margin: "0 auto 3rem",
                lineHeight: 1.6,
                textShadow: "0 0 20px rgba(96, 165, 250, 0.3)",
              }}
            >
              I'm always open to discussing new opportunities and exciting
              projects. Let's create something amazing together!
            </p>

            <div className="contact-grid">
              <motion.div
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <h3 className="contact-title">Phone</h3>
                <p className="contact-text">+961 81 078 253</p>
                <div className="contact-action">
                  <a href="tel:+96181078253" className="contact-link">
                    Call Now
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <h3 className="contact-title">Email</h3>
                <p className="contact-text">aliammarjob@gmail.com</p>
                <div className="contact-action">
                  <a
                    href="mailto:aliammarjob@gmail.com"
                    className="contact-link"
                  >
                    Send Email
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <h3 className="contact-title">Location</h3>
                <p className="contact-text">Beirut, Lebanon</p>
                <div className="contact-action">
                  <a
                    href="https://maps.google.com?q=Beirut,Lebanon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    View Map
                  </a>
                </div>
              </motion.div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "4rem", // Added more spacing
              }}
            >
              <motion.a
                href="https://github.com/AliAmmar2211"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  backgroundColor: "white",
                  color: "#333",
                  padding: "1rem 2rem",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                View GitHub
              </motion.a>
              <motion.a
                href="mailto:aliammarjob@gmail.com"
                className="btn"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  padding: "1rem 2rem",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Send Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Ali Mortadha Ammar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
