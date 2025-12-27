import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-card">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Praveen</h2>
          <p className="role">Web Developer</p>

          <div className="social-icons">
            <a href="https://www.instagram.com/3_praveen_3" target="_blank" rel="noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
              />
            </a>

            <a href="https://github.com/Praveenraj333" target="_blank" rel="noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                alt="GitHub"
              />
            </a>

            <a href="https://www.linkedin.com/in/praveen-raj-076177288" target="_blank" rel="noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
              />
            </a>

            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
              />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <h3>Contact Me</h3>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>

          <button>Send Message</button>
        </div>

      </div>
    </div>
  );
}

export default Contact;
