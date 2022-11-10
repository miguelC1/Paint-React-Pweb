import Herramientas from "./Herramientas";
import Previsualizar from "./Previsualizar";
import React from "react";
import { useState } from "react";
import UploadImage from "./UploadImage";
import { useRef } from "react";

function Pizarra() {
  var hojas = [];

  var x = 0,
    y = 0,
    dibujando = false,
    grosor = 1,
    color = "#000000",
    color_aux = "#000000";
  let m = {};
  
  const [file, setFile] = useState("");
  const [showImage, setShowImage] = useState("")
  const canvasRef = useRef()

  const handleChange= (event) =>{
    setFile(event.target.files[0])
    const showFile = URL.createObjectURL(event.target.files[0])
    console.log(showFile)
    setShowImage(showFile)
  }

  function handleMouseDown(e) {
/*     const mainCanvas = document.getElementById("pizarra");
 */    m = oMousePos(canvasRef.current, e);
    x = m.x;
    y = m.y;
    dibujando = true;
  }

  function handleMouseMove(e) {
    if (dibujando === true) {
/*       const mainCanvas = document.getElementById("pizarra");
 */      m = oMousePos(canvasRef.current, e);
      dibujar(x, y, m.x, m.y);
      x = m.x;
      y = m.y;
    }
  }

  function handleMouseUp(e) {
    if (dibujando === true) {
/*       const mainCanvas = document.getElementById("pizarra");
 */      m = oMousePos(canvasRef.current, e);
      dibujar(x, y, m.x, m.y);
      x = 0;
      y = 0;
      dibujando = false;

    }
  }

  function dibujar(x1, y1, x2, y2) {
    const mainCanvas = document.getElementById("pizarra");
    var context = mainCanvas.getContext("2d");
    var selected_color = document.getElementById("btn-color");

    context.beginPath();
    context.strokeStyle = selected_color.value;
    context.lineWidth = grosor;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();

    hojas[0] = context;
  }
  const deshacer = () => {
    const mainCanvas = document.getElementById("pizarra");
    hojas[0].clearRect(0, 0, mainCanvas.width, mainCanvas.height);
    console.log(hojas[0]);
  };

  const load_image = () => {
    var archivo = document.getElementById("files");
    if (archivo) {
      console.log(archivo);
      console.log("cargando imagen funcion load_image()");
      var reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onloadend = function () {
        const mainCanvas = document.getElementById("pizarra");
        var context = mainCanvas.getContext("2d");
        if (context) {
          var img = new Image();
          img.src = reader.result;
          img.onload = function () {
            context.drawImage(img, 200, 200, 440, 440);
          };
        }
      };
    } else {
      const mainCanvas = document.getElementById("pizarra");
      var context = mainCanvas.getContext("2d");
      var images = Object.values(document.getElementsByClassName("preview"));
      var img = new Image();
      img.src = images[0].src;
      img.onload = function () {
        context.drawImage(img, 200, 100, 440, 440);
      };
    }
  };

  function oMousePos(canvas, evt) {
    var ClientRect = canvas.getBoundingClientRect();
    return {
      x: Math.round(evt.clientX - ClientRect.left),
      y: Math.round(evt.clientY - ClientRect.top),
    };
  }

  const set_color = (color_in) => {
    var selected_color = document.getElementById("btn-color");
    if (selected_color) {
      color_aux = color;
      switch (color_in) {
        case "green":
          color = "#008000";
          break;
        case "red":
          color = "#ff0000";
          break;
        case "purple":
          color = "#6a0dad";
          break;
        case "blue":
          color = "#0000ff";
          break;
        case "yellow":
          color = "#ffff00";
          break;
        case "black":
          color = "#000000";
          break;
        case "white":
          color = "#ffffff";
          break;
        default:
        // code block
      }
      selected_color.value = color;
    }
  };

  const pincel = () => {
    var selected_color = document.getElementById("btn-color");
    if (selected_color) selected_color.value = color_aux;
  };

  const limpiar = () => {
    const mainCanvas = document.getElementById("pizarra");
    if (mainCanvas) {
      var context = mainCanvas.getContext("2d");
      context.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
    }
  };

  const descargar = () => {
    const mainCanvas = document.getElementById("pizarra");
    var download = document.getElementById("download");
    if (mainCanvas) {
      download.setAttribute("href", mainCanvas.toDataURL("image/jpg"));
    }
  };
  const set_grosor = (g) => {
    console.log(g);
    grosor = g;
  };


  return (
      <div className="w3-col s12">
        <canvas
          ref={canvasRef}
          className="w3-card-4 w3-border"
          id="pizarra"
          width="1350"
          height="600"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
        </canvas>
      <Previsualizar></Previsualizar>
      <Herramientas
        f_setcolor={set_color}
        f_pincel={pincel}
        f_limpiar={limpiar}
        f_descargar={descargar}
        f_setgrosor={set_grosor}
        f_deshacer={deshacer}
        f_load_img={load_image}
      ></Herramientas>
        <UploadImage/>
      </div>
      
  );
}

export default Pizarra;
