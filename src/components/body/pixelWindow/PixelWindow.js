import React from "react";

function PixelWindow({ className, hex, pixelPosition }) {
  function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  function hexToRgbString(hex) {
    const rgb = hexToRgb(hex);
    return rgb.r + "," + rgb.g + "," + rgb.b;
  }

  function rgbToShortHex(rgb) {
    var hexR = Math.round(rgb.r / 17).toString(16);
    var hexG = Math.round(rgb.g / 17).toString(16);
    var hexB = Math.round(rgb.b / 17).toString(16);
    return "#" + hexR + "" + hexG + "" + hexB;
  }

  function getShortHexColorCode(code) {
    var rgb = hexToRgb(code);
    return rgbToShortHex(rgb);
  }

  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "200px",
        backgroundColor: "black",
        minWidth: "400px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "30px",
          backgroundColor: "#a3a3a2",
          paddingTop: "4px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            width: "15px",
            height: "15px",
            borderRadius: "7px",
            backgroundColor: "#f66",
            marginLeft: "10px",
            marginRight: "2px",
          }}
        ></div>
        <div
          style={{
            display: "inline-block",
            width: "15px",
            height: "15px",
            borderRadius: "7px",
            backgroundColor: "yellow",
            marginLeft: "2px",
            marginRight: "2px",
          }}
        ></div>
        <div
          style={{
            display: "inline-block",
            width: "15px",
            height: "15px",
            borderRadius: "7px",
            backgroundColor: "lightgreen",
            marginLeft: "2px",
            marginRight: "2px",
          }}
        ></div>
        <div
          style={{
            fontWeight: "bold",
            textAlign: "center",
            position: "relative",
            top: -25,
          }}
        >
          {pixelPosition + " pixel"}
        </div>
      </div>
      <div className="col" style={{ color: "white" }}>
        <div style={{ textAlign: "center" }}>hex(6 digit)</div>
        <div style={{ textAlign: "center" }}>{hex}</div>
      </div>
      <div className="col" style={{ color: "white" }}>
        <div style={{ textAlign: "center" }}>hex(3 digit)</div>
        <div style={{ textAlign: "center" }}>{getShortHexColorCode(hex)}</div>
      </div>
      <div className="col" style={{ color: "white" }}>
        <div style={{ textAlign: "center" }}>(R,G,B)</div>
        <div style={{ textAlign: "center" }}>{hexToRgbString(hex)}</div>
      </div>
    </div>
  );
}

export default PixelWindow;
