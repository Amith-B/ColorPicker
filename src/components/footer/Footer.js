import React from "react";

function Footer(props) {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#cccccc",
        height: "70px",
        bottom: 0,
        position: "relative",
        fontWeight: "bold",
        paddingTop: "10px",
        paddingLeft: "30px",
      }}
    >
      <div className="row">Developed By Amith</div>
      <div className="row">amithbr6@gmail.com</div>
    </div>
  );
}

export default Footer;
