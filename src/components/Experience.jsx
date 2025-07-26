import { useEffect, useRef, useState } from "react";
import "../css/experience.css";

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const text = [
    {
      experience: "/images/texts/experience.png",
    },
  ];

  const experiences = [
    {
      title: "Freelance Graphic Designer",
      duration: "Feb. 2024 - Present",
      description:
        "Created branding, social media graphics, and marketing materials for various clients, developing unique visual identities and motion graphics to meet diverse needs.",
    },
    {
      title: "Spreaders Media | Video Editor",
      duration: "Apr. 2024 - Nov. 2024",
      description:
        "Designed visuals and edited videos for news articles and digital platforms, collaborating with writers and editors to enhance storytelling in a fast-paced media environment.",
    },
    {
      title: "Pixelking Studios | Intern Graphic Designer",
      duration: "Feb. 2020 - Aug. 2023",
      description:
        "Created visual content for branding, marketing, and digital platforms, ensuring consistency and creativity.",
    },
  ];

  const technicalSkills = [
    "Social Media Design",
    "Visual Identity Design",
    "Branding",
    "Photo Manipulation",
    "Video Editing",
    "Motion Graphics",
    "Web Design",
  ];

  const softwareSkills = [
    {
      name: "Photoshop",
      logoUrl: "/logos/photoshop.png",
      alt: "Adobe Photoshop",
      src: "https://photoshop.adobe.com/discover?promoid=DHWC15GP&mv=other",
    },
    {
      name: "Illustrator",
      logoUrl: "/logos/illustrator.png",
      alt: "Adobe Illustrator",
      src: "https://www.adobe.com/products/illustrator.html",
    },
    {
      name: "Premiere Pro",
      logoUrl: "/logos/premiere.png",
      alt: "Adobe Premiere Pro",
      src: "https://www.adobe.com/products/premiere.html",
    },
    {
      name: "Figma",
      logoUrl: "/logos/figma.png",
      alt: "Figma",
      src: "https://www.figma.com/",
    },
    {
      name: "After Effects",
      logoUrl: "/logos/after-effects.png",
      alt: "Adobe After Effects",
      src: "https://www.adobe.com/products/aftereffects.html",
    },
    {
      name: "InDesign",
      logoUrl: "/logos/indesign.png",
      alt: "Adobe InDesign",
      src: "https://www.adobe.com/products/indesign.html",
    },
    {
      name: "Corel Draw",
      logoUrl: "/logos/corel-draw.png",
      alt: "Corel Draw",
      src: "https://www.coreldraw.com/",
    },
  ];

  return (
    <section className="experience-section" ref={sectionRef}>
      <div className="experience-container">
        <div className={`experience-content ${isVisible ? "animate-up" : ""}`}>
          <div className="experience-header">
            <img
              src={text[0].experience}
              alt="Experience"
              className="experience"
            />
          </div>

          <div className="main-content">
            <div className="left-content">
              <div
                className={`experience-cards ${isVisible ? "animate-up" : ""}`}
              >
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="experience-card"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="card-header">
                      <p className="job-title">{exp.title}</p>
                      <p className="job-duration">{exp.duration}</p>
                    </div>
                    <p className="job-description">{exp.description}</p>
                  </div>
                ))}
              </div>

              <div
                className={`software-skills ${isVisible ? "animate-up" : ""}`}
              >
                <div className="software-icons">
                  <h3>Software Skills</h3>
                  <div className="software-icons-grid">
                    {softwareSkills.map((software, index) => (
                      <div
                        key={index}
                        className="software-icon"
                        title={software.name}
                      >
                        <a
                          href={software.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={software.logoUrl}
                            alt={software.alt}
                            className="software-logo"
                            onError={(e) => {
                              // Fallback if logo doesn't load
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "block";
                            }}
                          />
                        </a>
                        <span
                          className="software-name"
                          style={{ display: "none" }}
                        >
                          {software.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="right-content">
              <div
                className={`technical-skills-card ${
                  isVisible ? "animate-up" : ""
                }`}
              >
                <h3 className="technical-skills-title">Technical Skills</h3>
                <div className="technical-skills-list">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="technical-skill-item">
                      + {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
