import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header container-fluid">
      <div className="heading container d-flex justify-content-between">
        <div>
          <span style={{ color: "black" }}>C</span>
          <span style={{ color: "lightblue" }}>o</span>
          <span style={{ color: "lightgreen" }}>l</span>
          <span style={{ color: "grey" }}>o</span>
          <span style={{ color: "white" }}>r</span>
          <span style={{ color: "black" }}>P</span>
          <span style={{ color: "white" }}>i</span>
          <span style={{ color: "pink" }}>c</span>
          <span style={{ color: "grey" }}>k</span>
          <span style={{ color: "yellow" }}>e</span>
          <span style={{ color: "lightblue" }}>r</span>
        </div>

        <a href="https://github.com/Amith-B/ColorPicker" target="_blank">
          <img
            alt="github"
            src="./github.svg"
            style={{ height: "48px", width: "48px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
