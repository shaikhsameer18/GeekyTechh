
const skills = [
  // Website Development
  { name: 'HTML5', icon: 'html5' },
  { name: 'CSS3', icon: 'css3' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'React.js', icon: 'react' },
  { name: 'Node.js', icon: 'nodedotjs' },
  { name: 'Express.js', icon: 'express' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'Git', icon: 'git' },
  { name: 'Github', icon: 'github' },

  // Graphic Designing
  { name: 'Adobe Photoshop', icon: 'adobephotoshop' },
  { name: 'Adobe Illustrator', icon: 'adobeillustrator' },
  { name: 'Figma', icon: 'figma' },
  { name: 'CorelDRAW', icon: 'coreldraw' },

  // IoT Project Development
  { name: 'Arduino', icon: 'arduino' },
  { name: 'Raspberry Pi', icon: 'raspberrypi' },
  { name: 'Python', icon: 'python' },
  { name: 'C++', icon: 'cplusplus' },

  { name: 'WordPress', icon: 'wordpress' },
  { name: 'Google Analytics', icon: 'googleanalytics' },
  { name: 'Google Ads', icon: 'googleads' },
];

const Skills = () => (
  <div className="skills-container" id="skills">
    <h2 className="skills-title">Skills</h2>
    <h6>Skills we are mastered in it.</h6>
    <div className="skills-grid">
      {skills.map(skill => (
        <div key={skill.name} className="skill-item">
          <img
            src={`https://cdn.simpleicons.org/${skill.icon}`}
            alt={skill.name}
            height="48"
            width="48"
          />
          <span className="skills-name">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
