import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Geeky from "../assets/img/logo.jpg"; // Import your logo image

const teamMembers = [
  {
    name: "Sameer Ahmed",
    linkedin: "https://www.linkedin.com/in/sameerahmed08",
  },
  { name: "Ali Shaikh", linkedin: "https://www.linkedin.com/in/mohdali0" },
  {
    name: "Amanullah Shaikh",
    linkedin: "https://www.linkedin.com/in/mohd-amanullah-1282a2242/",
  },
  {
    name: "Irfan Ansari",
    linkedin: "https://www.linkedin.com/in/ansari-irfan-",
  },
];

const TeamDescription = () => {
  return (
    <div className="team-section">
      <div className="team-card">
        <div className="team-info">
          <h1 className="team-title">GEEKY TECHH</h1>
          <p className="team-subtitle">Team:</p>
          <ul className="team-members">
            {teamMembers.map((member) => (
              <li key={member.name} className="team-member">
                {member.name}
                <a
                  href={member.linkedin}
                  className="team-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            ))}
          </ul>
          <p className="team-email">
            Email:{" "}
            <a href="mailto:geekytechh@gmail.com" className="team-email-link">
              geekytechh@gmail.com
            </a>
            ,{" "}
            <a href="mailto:geekytechh@outlook.com" className="team-email-link">
              geekytechh@outlook.com
            </a>
          </p>
          <p className="team-message">Let the fun begin</p>
        </div>
        <img src={Geeky} alt="Geeky Techh Logo" className="team-logo" />
      </div>
    </div>
  );
};

export default TeamDescription;
