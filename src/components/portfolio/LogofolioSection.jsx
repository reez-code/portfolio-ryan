import { useEffect, useRef, useState } from "react";
import "../../css/logofolio.css";

function LogofolioSection() {
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

  // Placeholder data - replace with your actual logo data
  const logofolioData = [
    { id: 1, name: "Asset 1", image: "/logofolio-logos/Asset 1@2x.png" },
    { id: 2, name: "Classic Mart", image: "/logofolio-logos/Asset 2@2x.png" },
    {
      id: 3,
      name: "Khoi Beauty Studio",
      image: "/logofolio-logos/Asset 3@4x.png",
    },
    { id: 4, name: "TDL", image: "/logofolio-logos/Asset 5@4x.png" },
    {
      id: 5,
      name: "Blue Arc Computer Solutions",
      image: "/logofolio-logos/ba.png",
    },
    {
      id: 6,
      name: "Dawin Dry Cleaners and Laundromat",
      image: "/logofolio-logos/dawin.png",
    },
    {
      id: 7,
      name: "Jido Pipes and Water Solutions",
      image: "/logofolio-logos/JIDO 2-07.jpg",
    },
    {
      id: 8,
      name: "Maiyo Modern Design Construction",
      image: "/logofolio-logos/MAIYO.png",
    },
    { id: 9, name: "RNG Podcast", image: "/logofolio-logos/RNG.png" },
  ];

  return (
    <div className="logofolio-section" ref={sectionRef}>
      <div className="logofolio-container">
        <div className={`logofolio-grid ${isVisible ? "animate-up" : ""}`}>
          {logofolioData.map((logo, index) => (
            <div
              key={logo.id}
              className={`logo-card ${isVisible ? "animate-up" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="logo-image-container">
                <img src={logo.image} alt={logo.name} className="logo-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogofolioSection;
