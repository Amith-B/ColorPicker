import React from "react";

function ImageCanvas({
  setPixel,
  clickToggle,
  canv,
  className,
  setClickToggle,
}) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: "grey",
        padding: 0,
        maxWidth: "411px",
        maxHeight: "310px",
        minWidth: "314px",
        minHeight: "300px",
        border: "2px solid grey",
        overflow: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <canvas
        onClick={() => {
          setClickToggle(!clickToggle);
        }}
        onMouseMove={(event) => clickToggle && setPixel(event)}
        ref={canv}
        width="390px"
        height="300px"
        style={{ cursor: "crosshair" }}
      ></canvas>
    </div>
  );
}

export default ImageCanvas;
