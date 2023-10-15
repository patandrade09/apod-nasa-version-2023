import React from "react";
import "./App.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <a className="anchor">Universe of the day</a>
      <div>
        <a className="anchor" href={'/'}>
          TODAY
        </a>{" "}
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
