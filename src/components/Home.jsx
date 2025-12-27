import React, { useState } from "react";
import profile from "../assets/profile.jpg";
import { useNavigate } from "react-router-dom";



function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* HERO */}
      <section className="hero">
        <div className="hero-left slide-left">
          <h1>
            Hi There,<br />
            I'm <span>K. Praveen</span>
          </h1>

          <h3>
            I Am Into <span className="typing">Building Interactive & Responsive Websites</span>
          </h3>

          <button className="btn" onClick={() => setShowAbout(!showAbout)}>
            About Me
          </button>

          {/* About content */}
          {showAbout && (
            <p className="about-text">
             Hi, I’m K. Praveen, currently pursuing a Bachelor’s degree in Computer Science and Engineering at Einstein College of Engineering. I have a strong passion for web development and love building creative, responsive, and interactive websites. 
            <br />
            I have developed skills in HTML, CSS, JavaScript, and React JS, and I enjoy exploring advanced web technologies to enhance user experience. 
            <br />
             I am enthusiastic about solving problems, continuously learning, and collaborating with others to bring innovative ideas to life. My goal is to combine creativity and technical expertise to create visually appealing and high-performing web applications.

            </p>
          )}
        </div>

        <div className="hero-right slide-right">
          <img src={profile} alt="profile" className="profile-img" />
        </div>
      </section>
    </div>
  );
}

export default Home;
