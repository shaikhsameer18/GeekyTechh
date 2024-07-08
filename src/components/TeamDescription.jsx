
import Geeky from '../assets/img/logo.jpg'; // Import your logo image

const TeamDescription = () => {
  return (
    <div className="team-section">
      <div className="team-card">
        <div className="team-info">
          <h1 className="team-title">GEEKY TECHH</h1>
          <p className="team-subtitle">Team:</p>
          <ul className="team-members">
            <li>Sameer Ahmed</li>
            <li>Ali Shaikh</li>
            <li>Amanullah Shaikh</li>
            <li>Irfan Ansari</li>
          </ul>
          <p className="team-email">
            Email: <a href="mailto:geekytechh@gmail.com" className="team-email-link">geekytechh@gmail.com</a>, <a href="mailto:geekytechh@outlook.com" className="team-email-link">geekytechh@outlook.com</a>
          </p>
          <p className="team-message">Let the fun begin</p>
        </div>
        <img src={Geeky} alt="Geeky Techh Logo" className="team-logo" />
      </div>
    </div>
  );
}

export default TeamDescription;
