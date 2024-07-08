import GeekyTechh from "../assets/img/project1.jpg";
import EventMind from "../assets/img/project2.png";
import Porfolio from "../assets/img/project3.png";
import Alvira from "../assets/img/project4.png";
import CodeEditor from "../assets/img/project5.png";
import Blog from "../assets/img/project6.png";

// Import the image correctly

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Geeky Techh",
      imageUrl: GeekyTechh, // Use the imported image directly
      link: "https://www.geekytechh.in",
    },
    {
      id: 2,
      title: "Event Management System",
      imageUrl: EventMind,
      link: "https://event-mind.vercel.app",
    },
    {
      id: 3,
      title: "Porfolio",
      imageUrl: Porfolio,
      link: "https://shaikhsameer18.github.io/DollarPortfolio",
    },
    {
      id: 4,
      title: "Alvira Bags",
      imageUrl: Alvira,
      link: "https://www.alvirabags.com",
    },
    {
      id: 5,
      title: "Code Editor",
      imageUrl: CodeEditor,
      link: "https://reflect-code.vercel.app",
    },
    {
      id: 6,
      title: "Blog Website",
      imageUrl: Blog,
      link: "https://reflect-360.vercel.app/account",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-description">Types of projects we have made</p>
        <div className="project-container">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-link-text">{project.title}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
