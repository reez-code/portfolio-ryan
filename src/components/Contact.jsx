import { useEffect, useRef, useState } from "react";
import "../css/contact-me.css";

const cardData = [
  {
    img: "/images/profile-image.jpg",
    caption: "I Miss London",
  },
  {
    img: "https://image.ibb.co/mmyvrc/anniversary_balloons_birthday_68369.jpg",
    caption: "Love balloons",
  },
  {
    img: "https://image.ibb.co/hQaarc/antique_blur_camera_828378.jpg",
    caption: "Vintage life",
  },
  {
    img: "https://image.ibb.co/crFarc/pexels_photo_100756.jpg",
    caption: "Summer Day",
  },
  {
    img: "https://image.ibb.co/fvekrc/action_adult_art_673649.jpg",
    caption: "Art",
  },
];

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showLetsTalk, setShowLetsTalk] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [notification, setNotification] = useState("");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start the sequential animations
          setTimeout(() => setShowCard(true), 400);
          setTimeout(() => setShowLetsTalk(true), 1200);
          setTimeout(() => setShowButtons(true), 1800);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
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

  // Show notification and auto-hide
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000);
  };

  // Fixed click handlers with preventDefault
  const handleEmailClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = "mailto:ryansila@gmail.com";
  };

  const handlePhoneClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const phoneNumber = "+254792530615";

    try {
      await navigator.clipboard.writeText(phoneNumber);
      showNotification("📱 Phone number copied to clipboard!");
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = phoneNumber;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand("copy");
        showNotification("📱 Phone number copied to clipboard!");
      } catch (err) {
        showNotification("❌ Failed to copy phone number");
      }

      document.body.removeChild(textArea);
    }
  };

  const handleBehanceClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open("https://www.behance.net/ryansila", "_blank");
  };

  const handleLinkedInClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open("https://www.linkedin.com/in/ryan-sila/", "_blank");
  };

  return (
    <section ref={sectionRef} className="contact-me-section">
      {/* Notification */}
      {notification && <div className="notification">{notification}</div>}

      <div className="contact-content">
        {/* Stacked Photo Card Section */}
        <div className={`card-section ${showCard ? "animate-in" : ""}`}>
          <div className="stack">
            <div className="card">
              <div className="image">
                <img
                  src={cardData[0].img}
                  alt="Ryan Sila - Graphic Designer"
                  className="card-image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Intro Text Section */}
        <div className={`intro-text ${isVisible ? "animate-in" : ""}`}>
          <h1 className="intro-title">Hello!</h1>

          <p className="intro-description">
            My name is <span className="name-highlight">Ryan Sila</span>,
            graphic designer with a keen eye for visual storytelling and a
            strong background in creating engaging, impactful designs. From
            branding to digital content, I love bringing ideas to life through
            bold, thoughtful design.
          </p>

          <p className="intro-experience">
            With 5 years+ experience in both editorial and digital media, I
            thrive in fast-paced environments and enjoy collaborating to craft
            visuals that not only look great but communicate effectively.
          </p>
        </div>

        <div className="contact-buttons-section">
          <h2 className={`lets-talk-title ${showLetsTalk ? "animate-in" : ""}`}>
            Let's Talk{" "}
            <img
              src="/icons/mail-outline.png"
              alt="Mail icon"
              className="mail-icon"
              style={{
                width: "30px",
                height: "30px",
                paddingLeft: "3px",
                top: "4px",
                position: "relative",
              }}
            />
          </h2>

          <div className="contact-buttons">
            <div className="contact-item">
              <button
                className={`contact-btn email-btn ${
                  showButtons ? "animate-in" : ""
                }`}
                style={{ animationDelay: "0.1s" }}
                onClick={handleEmailClick}
              >
                Email
              </button>
              {/* <span className="contact-text">ryansila@gmail.com</span> */}
            </div>

            <div className="contact-item">
              <button
                className={`contact-btn phone-btn ${
                  showButtons ? "animate-in" : ""
                }`}
                style={{ animationDelay: "0.3s" }}
                onClick={handlePhoneClick}
              >
                Phone
              </button>
            </div>

            <div className="contact-item">
              <button
                className={`contact-btn behance-btn ${
                  showButtons ? "animate-in" : ""
                }`}
                style={{ animationDelay: "0.5s" }}
                onClick={handleBehanceClick}
              >
                Behance
              </button>
              {/* <span className="contact-text">behance.net/ryansila</span> */}
            </div>

            <div className="contact-item">
              <button
                className={`contact-btn linkedin-btn ${
                  showButtons ? "animate-in" : ""
                }`}
                style={{ animationDelay: "0.7s" }}
                onClick={handleLinkedInClick}
              >
                LinkedIn
              </button>
              {/* <span className="contact-text">Ryan Sila</span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
