import React from "react";
import "./PixelWindow.css";

const clipboard =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTE1Ljc3IDEyMi44OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTE1Ljc3IDEyMi44ODsgZmlsbDogd2hpdGU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7fTwvc3R5bGU+PGc+PHBhdGggY2xhc3M9InN0MCIgZD0iTTg5LjYyLDEzLjk2djcuNzNoMTIuMTloMC4wMXYwLjAyYzMuODUsMC4wMSw3LjM0LDEuNTcsOS44Niw0LjFjMi41LDIuNTEsNC4wNiw1Ljk4LDQuMDcsOS44MmgwLjAydjAuMDIgdjczLjI3djAuMDFoLTAuMDJjLTAuMDEsMy44NC0xLjU3LDcuMzMtNC4xLDkuODZjLTIuNTEsMi41LTUuOTgsNC4wNi05LjgyLDQuMDd2MC4wMmgtMC4wMmgtNjEuN0g0MC4xdi0wLjAyIGMtMy44NC0wLjAxLTcuMzQtMS41Ny05Ljg2LTQuMWMtMi41LTIuNTEtNC4wNi01Ljk4LTQuMDctOS44MmgtMC4wMnYtMC4wMlY5Mi41MUgxMy45NmgtMC4wMXYtMC4wMmMtMy44NC0wLjAxLTcuMzQtMS41Ny05Ljg2LTQuMSBjLTIuNS0yLjUxLTQuMDYtNS45OC00LjA3LTkuODJIMHYtMC4wMlYxMy45NnYtMC4wMWgwLjAyYzAuMDEtMy44NSwxLjU4LTcuMzQsNC4xLTkuODZjMi41MS0yLjUsNS45OC00LjA2LDkuODItNC4wN1YwaDAuMDJoNjEuNyBoMC4wMXYwLjAyYzMuODUsMC4wMSw3LjM0LDEuNTcsOS44Niw0LjFjMi41LDIuNTEsNC4wNiw1Ljk4LDQuMDcsOS44MmgwLjAyVjEzLjk2TDg5LjYyLDEzLjk2eiBNNzkuMDQsMjEuNjl2LTcuNzN2LTAuMDJoMC4wMiBjMC0wLjkxLTAuMzktMS43NS0xLjAxLTIuMzdjLTAuNjEtMC42MS0xLjQ2LTEtMi4zNy0xdjAuMDJoLTAuMDFoLTYxLjdoLTAuMDJ2LTAuMDJjLTAuOTEsMC0xLjc1LDAuMzktMi4zNywxLjAxIGMtMC42MSwwLjYxLTEsMS40Ni0xLDIuMzdoMC4wMnYwLjAxdjY0LjU5djAuMDJoLTAuMDJjMCwwLjkxLDAuMzksMS43NSwxLjAxLDIuMzdjMC42MSwwLjYxLDEuNDYsMSwyLjM3LDF2LTAuMDJoMC4wMWgxMi4xOVYzNS42NSB2LTAuMDFoMC4wMmMwLjAxLTMuODUsMS41OC03LjM0LDQuMS05Ljg2YzIuNTEtMi41LDUuOTgtNC4wNiw5LjgyLTQuMDd2LTAuMDJoMC4wMkg3OS4wNEw3OS4wNCwyMS42OXogTTEwNS4xOCwxMDguOTJWMzUuNjV2LTAuMDIgaDAuMDJjMC0wLjkxLTAuMzktMS43NS0xLjAxLTIuMzdjLTAuNjEtMC42MS0xLjQ2LTEtMi4zNy0xdjAuMDJoLTAuMDFoLTYxLjdoLTAuMDJ2LTAuMDJjLTAuOTEsMC0xLjc1LDAuMzktMi4zNywxLjAxIGMtMC42MSwwLjYxLTEsMS40Ni0xLDIuMzdoMC4wMnYwLjAxdjczLjI3djAuMDJoLTAuMDJjMCwwLjkxLDAuMzksMS43NSwxLjAxLDIuMzdjMC42MSwwLjYxLDEuNDYsMSwyLjM3LDF2LTAuMDJoMC4wMWg2MS43aDAuMDIgdjAuMDJjMC45MSwwLDEuNzUtMC4zOSwyLjM3LTEuMDFjMC42MS0wLjYxLDEtMS40NiwxLTIuMzdoLTAuMDJWMTA4LjkyTDEwNS4xOCwxMDguOTJ6Ii8+PC9nPjwvc3ZnPg==";

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

  function handleCopy(content) {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(content);
    }
  }

  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "200px",
        backgroundColor: "black",
        minWidth: "280px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "30px",
          backgroundColor: "var(--header-bg)",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div className="window__dummy-button-group">
          <div className="window__dummy-button"></div>
          <div className="window__dummy-button"></div>
          <div className="window__dummy-button"></div>
        </div>
        <div
          className="text-light position-absolute d-flex justify-content-center"
          style={{ width: "100%", left: 0 }}
        >
          {pixelPosition + " pixel"}
        </div>
      </div>
      <div className="col text-light">
        <div className="text-center">hex(6 digit)</div>
        <div className="text-center m-1">
          <span className="p-1">{hex}</span>
          <img
            alt="clipboard"
            width="20px"
            height="20px"
            className="m-1 clipboard"
            src={clipboard}
            onClick={() => handleCopy(hex)}
          />
        </div>
      </div>
      <div className="col text-light">
        <div className="text-center">hex(3 digit)</div>
        <div className="text-center m-1">
          <span className="p-1">{getShortHexColorCode(hex)}</span>
          <img
            alt="clipboard"
            width="20px"
            height="20px"
            className="m-1 clipboard"
            src={clipboard}
            onClick={() => handleCopy(getShortHexColorCode(hex))}
          />
        </div>
      </div>
      <div className="col text-light">
        <div className="text-center">(R,G,B)</div>
        <div className="text-center m-1">
          <span className="p-1">{hexToRgbString(hex)}</span>
          <img
            alt="clipboard"
            width="20px"
            height="20px"
            className="m-1 clipboard"
            src={clipboard}
            onClick={() => handleCopy(hexToRgbString(hex))}
          />
        </div>
      </div>
    </div>
  );
}

export default PixelWindow;
