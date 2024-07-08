import "../App.css"; // Import the CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPalette,
  faUsers,
  faBroadcastTower,
  faPaintBrush,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

// JSON data for services
const servicesData = [
  {
    id: 1,
    title: "Website Development",
    description: "We don't just sell websites, we create websites that SELL.",
    icon: faGlobe,
  },
  {
    id: 2,
    title: "Graphic Designing",
    description: "Make it simple, but significant.",
    icon: faPalette,
  },
  {
    id: 3,
    title: "Career Guidance & Counselling",
    description: "If it scares you, it might be a good thing to try.",
    icon: faUsers,
  },
  {
    id: 4,
    title: "IoT Project Development",
    description: "Everything that can be automated will be automated.",
    icon: faBroadcastTower,
  },
  {
    id: 5,
    title: "UI/UX Designing",
    description: "Design isn't finished until somebody is using it.",
    icon: faPaintBrush,
  },
  {
    id: 6,
    title: "Online Business Handling",
    description:
      "When you change the way you look at things, the things you look at change.",
    icon: faBriefcase,
  },
];

export default function Services() {
  return (
    <div className="services-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="title">Services We Provide:</h2>
          <p className="description">
            We are specialized in all kinds of services mentioned below
          </p>
        </div>
        <div className="services-grid">
          {/* Map through servicesData to render service cards */}
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <FontAwesomeIcon icon={service.icon} className="service-icon" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
