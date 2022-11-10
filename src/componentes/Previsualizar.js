import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

function Previsualizar({
  f_descargar,
  f_limpiar,
  f_pincel,
  f_setcolor,
  f_setgrosor,
  f_deshacer,
  f_load_img,
}) {
  let img = [
    "https://www.batiburrillo.net/wp-content/uploads/2019/07/Ampliacio%CC%81n-de-imagen-en-li%CC%81nea-sin-perder-calidad.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnmLDIq0uwGx6dSxpYk-W7PKRl6BmoY_BgQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFhzSJ5dsHmM_qlTr5f1iW2QC0fSTpHywvA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBD4HwNbon6rcgzao1bWhbEZ-z7h_XQ6a7Sg&usqp=CAU",
  ];

  const [file, setFile] = useState("");
  const [showImage, setShowImage] = useState("")

  function cargar() {
    var images = Object.values(document.getElementsByClassName("preview"));
    let c = 1;
    images.forEach(element => {
      console.log(element);
      element.src = img[c];
      c++;
    });
  }
  const upload =(event)=>{
    setFile(event.target.files[0])
    const showFile = URL.createObjectURL(event.target.files[0])
    setShowImage(showFile)
    console.log("load")
    const mainCanvas = document.getElementById("pizarra");
      var context = mainCanvas.getContext("2d");
      var img = new Image();
      img.src = showFile
      img.onload = function () {
        context.drawImage(img, 200, 100, img.width, img.height);
      };
  }
  return (
    <div className="w3-col s12 w3-center">
      <div className="w3-card-1">
        <input type="file" name="file" onChange={upload}></input>
      </div>
    </div>
  );
}
Previsualizar.propTypes = {
  f_setcolor: PropTypes.func,
  f_pincel: PropTypes.func,
  f_limpiar: PropTypes.func,
  f_descargar: PropTypes.func,
  f_setgrosor: PropTypes.func,
  f_deshacer: PropTypes.func,
  f_load_img: PropTypes.func,
};

export default Previsualizar;
