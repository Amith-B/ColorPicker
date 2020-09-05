import React, { useState, useEffect, useRef } from "react";
import "./Body.css";
import draw from "../../utils/drawImageOverCanvas";
import getEventLocation from "../../utils/getEventPosition";
import getHexValue from "../../utils/getHexValue";
import * as pixel from "../../config/pixelDirection";
import {
  defaultImageBase64,
  whiteImageBase64,
} from "./../../config/defaultBase64";
import Pixel from "./pixel/Pixel";
import ImageCanvas from "./imageCanvas/ImageCanvas";
import PixelWindow from "./pixelWindow/PixelWindow";
import Drop from "./dragAndDrop/Drop";

function Body(props) {
  const [context, setContext] = useState();
  const [canvas, setCanvas] = useState();
  const [currentPixelClicked, setCurrentPixelClicked] = useState(pixel.CENTER);
  const [colors, setColors] = useState({
    [pixel.TOP]: "#aaaaaa",
    [pixel.LEFT]: "#aaaaaa",
    [pixel.CENTER]: "#aaaaaa",
    [pixel.RIGHT]: "#aaaaaa",
    [pixel.BOTTOM]: "#aaaaaa",
    [pixel.TOPLEFT]: "#aaaaaa",
    [pixel.TOPRIGHT]: "#aaaaaa",
    [pixel.BOTTOMLEFT]: "#aaaaaa",
    [pixel.BOTTOMRIGHT]: "#aaaaaa",
  });
  const canv = useRef();
  const [clickToggle, setClickToggle] = useState(true);
  const [base64, setBase64] = useState(defaultImageBase64);
  const txt = useRef();
  useEffect(() => {
    console.log("Main");
    setCanvas(canv.current);
  }, []);
  useEffect(() => {
    canvas && setContext(canvas.getContext("2d"));
  }, [canvas]);
  useEffect(() => {
    context && draw(defaultImageBase64, canvas, context);

    document.onpaste = function (pasteEvent) {
      let item = pasteEvent.clipboardData.items[0];

      if (item.type.indexOf("image") === 0) {
        let blob = item.getAsFile();

        let reader = new FileReader();
        reader.onload = function (event) {
          //document.getElementById("container").src = event.target.result;
          draw(whiteImageBase64, canvas, context);
          draw(event.target.result, canvas, context);
          setBase64(event.target.result);
        };

        reader.readAsDataURL(blob);
      }
    };
  }, [canvas, context]);

  const getFileUrlAndDraw = (event) => {
    //const img = new Image();
    const file = event[0]; //;.target.files[0];

    const reader = new FileReader();
    reader.onload = function (event) {
      //document.getElementById("container").src = event.target.result;
      //draw(event.target.result, canvas, context);
      //console.log("test", event.target.result);
      draw(whiteImageBase64, canvas, context);
      draw(event.target.result, canvas, context);
      setBase64(event.target.result);
    };
    try {
      reader.readAsDataURL(file);
    } catch (error) {}

    //const urlObject = window.URL || window.webkitURL;
    //const src = urlObject.createObjectURL(file);
    // draw(whiteImageBase64, canvas, context);
    // draw(src, canvas, context, urlObject);
  };

  const setPixel = (event) => {
    let eventLocation = getEventLocation(event);

    setColors((colors) => {
      return {
        [pixel.TOP]: getHexValue(eventLocation, context, pixel.TOP),
        [pixel.LEFT]: getHexValue(eventLocation, context, pixel.LEFT),
        [pixel.BOTTOM]: getHexValue(eventLocation, context, pixel.BOTTOM),
        [pixel.BOTTOMLEFT]: getHexValue(
          eventLocation,
          context,
          pixel.BOTTOMLEFT
        ),
        [pixel.BOTTOMRIGHT]: getHexValue(
          eventLocation,
          context,
          pixel.BOTTOMRIGHT
        ),
        [pixel.CENTER]: getHexValue(eventLocation, context, pixel.CENTER),
        [pixel.TOPLEFT]: getHexValue(eventLocation, context, pixel.TOPLEFT),
        [pixel.TOPRIGHT]: getHexValue(eventLocation, context, pixel.TOPRIGHT),
        [pixel.RIGHT]: getHexValue(eventLocation, context, pixel.RIGHT),
      };
    });
  };

  return (
    <div className="container content">
      {/* <input
        className="form-control mr-sm-2"
        type="file"
        onChange={(event) => {
          console.log(event.target.files[0]);
          const urlObject = window.URL || window.webkitURL;
          const src = urlObject.createObjectURL(event.target.files[0]);
          console.log(src);
          //getFileUrlAndDraw(event);
        }}
      /> */}
      <Drop onDrop={getFileUrlAndDraw} />
      <div className="row mx-auto">
        <ImageCanvas
          setPixel={setPixel}
          canv={canv}
          className="col"
          clickToggle={clickToggle}
          setClickToggle={setClickToggle}
        />
        <div className="col">
          <div className="row">
            <Pixel
              className="col"
              colors={colors}
              currentPixelClicked={currentPixelClicked}
              setCurrentPixelClicked={setCurrentPixelClicked}
            />
            <div
              className="col"
              style={{
                textAlign: "center",
                color: "#333333",
                fontWeight: "bold",
                fontSize: "xx-large",
                alignSelf: "center",
              }}
            >
              {clickToggle ? "Mouse pointer Unlocked" : "Locked"}
            </div>
          </div>
          <PixelWindow
            className="row"
            pixelPosition={currentPixelClicked}
            hex={colors[currentPixelClicked]}
          />
        </div>
      </div>
      <div style={{ fontWeight: "bold", fontSize: "xx-large" }}>
        Base64
        <button
          onClick={() => {
            txt.current.select();
            document.execCommand("copy");
            alert("Copied");
            console.log("clicked", txt.current);
          }}
          style={{ marginLeft: "5px", marginRight: "5px" }}
          className="btn btn-success btn-sm"
          type="button"
        >
          copy to clipboard
        </button>
        <button
          onClick={() => {
            navigator.clipboard
              .readText()
              .then((text) => {
                draw(whiteImageBase64, canvas, context);
                draw(text, canvas, context);
                setBase64(text);
              })
              .catch((err) => {
                alert("Failed to read clipboard content");
              });
          }}
          style={{ marginLeft: "5px", marginRight: "5px" }}
          className="btn btn-primary btn-sm"
          type="button"
        >
          paste from clipboard
        </button>
      </div>
      <textarea
        style={{ width: "100%", resize: "vertical" }}
        rows="6"
        ref={txt}
        value={base64}
        onChange={(event) => {
          draw(whiteImageBase64, canvas, context);
          draw(event.target.value, canvas, context);
          setBase64(event.target.value);
        }}
      ></textarea>
    </div>
  );
}

export default Body;
