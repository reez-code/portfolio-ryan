import { useState } from "react";
import LogofolioSection from "./LogofolioSection";
import "../../css/portfolio.css";

function PortfolioSection() {
  const [activeSection, setActiveSection] = useState("logofolio");

  const sections = [
    { id: "logofolio", name: "Logofolio" },
    { id: "posters", name: "Posters" },
    { id: "branding", name: "Branding" },
    { id: "retouching", name: "Retouching" },
    { id: "photo-manipulation", name: "Photo Manipulation" },
    { id: "web-design", name: "Web Design" },
  ];

  // Dummy colors - replace with sampled hex from each section background
  const sectionColors = {
    logofolio: "#FF6B35", // orange
    posters: "#1A73E8", // blue
    branding: "#28A745", // green
    retouching: "#E83E8C", // pink
    "photo-manipulation": "#6F42C1", // purple
    "web-design": "#FD7E14", // amber/orange
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case "logofolio":
        return <LogofolioSection />;
      case "posters":
        return (
          <div className="section-placeholder">
            Posters Section - Coming Soon
          </div>
        );
      case "branding":
        return (
          <div className="section-placeholder">
            Branding Section - Coming Soon
          </div>
        );
      case "retouching":
        return (
          <div className="section-placeholder">
            Retouching Section - Coming Soon
          </div>
        );
      case "photo-manipulation":
        return (
          <div className="section-placeholder">
            Photo Manipulation Section - Coming Soon
          </div>
        );
      case "web-design":
        return (
          <div className="section-placeholder">
            Web Design Section - Coming Soon
          </div>
        );
      default:
        return <LogofolioSection />;
    }
  };

  return (
    <section className="portfolio-section">
      {/* Navigation Area */}
      <div className="portfolio-nav">
        <div className="portfolio-nav-container">
          <div className="portfolio-tabs">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`portfolio-tab ${
                  activeSection === section.id ? "active" : ""
                }`}
                style={
                  activeSection === section.id
                    ? {
                        backgroundColor: sectionColors[section.id],
                        color: "#fff",
                      }
                    : {}
                }
                onClick={() => setActiveSection(section.id)}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="portfolio-content">{renderActiveSection()}</div>
    </section>
  );
}

export default PortfolioSection;
