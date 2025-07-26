import "../css/hero-section.css";
const text = [
  {
    img: "/images/texts/text-section1.png",
  },
];
function HeroSection() {
  return (
    <section className="ripped-paper-section">
      <div className="portfolio-text">Portfolio</div>
      <div className="button-container">
        {["CV", "Logofolio", "Branding", "Posters"].map((text) => (
          <div className="box-button" key={text}>
            <div className="button">
              <span>{text}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="name-tag">
        <img src={text[0].img} alt="Ryan Sila" className="text" />
      </div>
    </section>
  );
}

export default HeroSection;
