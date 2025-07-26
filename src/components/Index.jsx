import { useEffect, useRef, useState } from "react";
import "../css/index.css";

function Index() {
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
      index: "/images/texts/index.png",
    },
  ];

  const portfolioCategories = [
    {
      number: "01.",
      title: "Logofolio",
      description:
        "Wordmark / Monogram / Letter Mark / Typography / Abstract etc.",
    },
    {
      number: "02.",
      title: "Posters",
      description:
        "Campaign Posters / Typographic Posters / Advertising Posters / Event Posters / Fashion Posters",
    },
    {
      number: "03.",
      title: "Branding",
      description:
        "Business Card / ID Card / Letter Head / Envelope / Flyer / Brochure",
    },
    {
      number: "04.",
      title: "Retouch",
      description:
        "Portrait Retouch / Color Correction / Fodge & Burn / High End Retouch / Frequency Separation",
    },
    {
      number: "05.",
      title: "Photo Manipulation",
      description: "",
    },
    {
      number: "06.",
      title: "Web Design",
      description: "",
    },
  ];

  return (
    <section className="index-section" ref={sectionRef}>
      <div className="index-container">
        <div className={`index-content ${isVisible ? "animate-up" : ""}`}>
          <div className="index-header">
            <img src={text[0].index} alt="Index" className="index-title" />
          </div>

          <div className="portfolio-categories">
            {portfolioCategories.map((category, index) => (
              <div
                key={index}
                className={`portfolio-category ${
                  isVisible ? "animate-up" : ""
                }`}
                style={{ animationDelay: `${(index + 1) * 0.2}s` }}
              >
                <div className="category-left">
                  <span className="category-number">{category.number}</span>
                  <h2 className="category-title">
                    <b>{category.title}</b>
                  </h2>
                </div>
                <div className="category-right">
                  <p className="category-description">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
