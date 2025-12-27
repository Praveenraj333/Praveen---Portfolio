import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML", img: "https://cdn-icons-png.flaticon.com/512/732/732212.png", desc: "I create structured and semantic web page layouts." },
    { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/732/732190.png", desc: "I design visually appealing and responsive websites." },
    { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", desc: "I add interactivity and dynamic features to web pages." },
    { name: "Python", img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", desc: "I develop scripts, automation, and backend logic efficiently." },
    { name: "React", img: "https://cdn-icons-png.flaticon.com/512/919/919851.png", desc: "I build fast, component-based, modern web applications." },
    { name: "Java", img: "https://cdn-icons-png.flaticon.com/512/226/226777.png", desc: "I implement object-oriented solutions and desktop/web apps." },
    { name: "MySQL", img: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png", desc: "I design and manage relational databases effectively." }
  ];

  return (
    <section className="skills-section slide-in" id="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.img} alt={skill.name} />
            <h3>{skill.name}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
