import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="header container-lg">
      <div className="heading">
        <div className="letter" style={{ color: "black" }}>
          C
        </div>
        <div className="letter" style={{ color: "red" }}>
          o
        </div>
        <div className="letter" style={{ color: "lightgreen" }}>
          l
        </div>
        <div className="letter" style={{ color: "grey" }}>
          o
        </div>
        <div className="letter" style={{ color: "white" }}>
          r
        </div>
        <div className="letter" style={{ color: "black" }}>
          P
        </div>
        <div className="letter" style={{ color: "white" }}>
          i
        </div>
        <div className="letter" style={{ color: "pink" }}>
          c
        </div>
        <div className="letter" style={{ color: "grey" }}>
          k
        </div>
        <div className="letter" style={{ color: "yellow" }}>
          e
        </div>
        <div className="letter" style={{ color: "lightblue" }}>
          r
        </div>
      </div>
    </div>
  );
}

export default Header;
