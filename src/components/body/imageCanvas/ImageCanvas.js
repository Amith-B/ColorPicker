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
        margin: 0,
        padding: 0,
        maxWidth: "394px",
        maxHeight: "304px",
        border: "2px solid grey",
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
      ></canvas>
    </div>
  );
}

export default ImageCanvas;
