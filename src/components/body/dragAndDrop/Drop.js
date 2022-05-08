import React, { useState } from "react";
import Dropzone from "react-dropzone";

export default function Drop({ onDrop }) {
  const handleDrop = (event) => {
    onDrop(event);
  };

  const [hover, setHover] = useState(false);
  return (
    <div
      className="Drop m-3"
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      style={{
        height: "120px",
        backgroundColor: hover ? "#cccccc" : "#f8f8f9",
        textAlign: "center",
        margin: 0,
        padding: 0,
        border: "2px dashed black",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      <Dropzone
        onDrop={handleDrop}
        accept={{
          "image/png": [".png", ".jpeg", ".jpg", ".svg"],
        }}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject,
        }) => {
          // additional CSS depends on dragging status
          const additionalClass = isDragAccept
            ? "accept"
            : isDragReject
            ? "reject"
            : "";
          //isDragActive ? setHover(true) : setHover(false);
          return (
            <div
              {...getRootProps({
                className: `dropzone ${additionalClass}`,
              })}
            >
              <input {...getInputProps()} />
              <span style={{ fontWeight: "bold", fontSize: "xxx-large" }}>
                {isDragActive ? (
                  <img
                    alt="file"
                    width="50px"
                    height="50px"
                    src={require("../../../assets/fileDrag.png")}
                  />
                ) : (
                  <img
                    alt="file"
                    width="50px"
                    height="50px"
                    src={require("../../../assets/file.png")}
                  />
                )}
              </span>
              <p>
                Drag'n'drop image / click to select image / paste the clipboard
                image
              </p>
            </div>
          );
        }}
      </Dropzone>
    </div>
  );
}
