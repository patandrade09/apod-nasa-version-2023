import React from "react";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <a className="anchor">Picture of the day</a>
      <div>
        <a className="anchor" href="https://apod.nasa.gov/apod/astropix.html">
          APOD
        </a>{" "}
        <a className="anchor" href="https://www.nasa.gov">
          NASA
        </a>{" "}
        <a className="anchor" href="https://www.linkedin.com/in/patrícia-andrade-09/">
          DEVELOPER
        </a>
      </div>
    </header>
  );
};

export default Header;
