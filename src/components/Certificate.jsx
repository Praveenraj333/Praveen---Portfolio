import React, { useState } from "react";
import "./Certificate.css";

// Import images
import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";
import cert3 from "../assets/cert3.jpg";
import cert4 from "../assets/cert4.jpg";
import cert5 from "../assets/cert5.jpg";

export default function Certificate() {
  const certificates = [
    { id: 1, title: "Internship 1", image: cert1, desc: "Completed web development internship." },
    { id: 2, title: "Technical Quiz", image: cert2, desc: "Attended a technical quiz at J.P College and won 1st prize." },
    { id: 3, title: "Android Development", image: cert3, desc: "One week VAC Course on IBM AIX, and Android Technologies" },
    { id: 4, title: "Aptitude", image: cert4, desc: "Attended an aptitude workshop at National Engineering College." },
    { id: 5, title: "Advanced Python", image: cert5, desc: "Completed Advanced Python course at Our College." }
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="certificate-container">
      <h2>Achievements & Certificates</h2>

      <div className="certificate-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-box">
            <img src={cert.image} alt={cert.title} />
            <h4>{cert.title}</h4>
            <p>{cert.desc}</p>
            <button onClick={() => setSelected(cert.image)}>View Certificate</button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <span className="close" onClick={() => setSelected(null)}>✕</span>
          <img src={selected} alt="certificate" className="modal-img animate-modal" />
        </div>
      )}
    </div>
  );
}
