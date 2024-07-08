import { useEffect, useState } from "react";
import companyImage from "../assets/img/logo.jpg";
import "./Preloader.css";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader-container ${isLoading ? "show" : "hide"}`}>
      <div className="preloader-content">
        <img
          src={companyImage}
          alt="Geeky Techh Logo"
          className="logo"
        />
        <h1 className="title">
          GEEKY TECHH
        </h1>
      </div>
    </div>
  );
}
