import PropTypes from "prop-types";

function Herramientas({
  f_descargar,
  f_limpiar,
  f_pincel,
  f_setcolor,
  f_setgrosor,
  f_deshacer,
  f_load_img,
}) {
  function hola() {
    console.log("holasdsa")
    f_load_img();
  }
  return (
    <div className="w3-col s12 w3-center">
      <div className="w3-card-2">
        <input type="file" id="file" src="" alt="" onChange={hola}/>

        <button
          className="w3-button"
          href=""
          onClick={() => {
            f_deshacer();
          }}
        >
          deshacer
        </button>
        <input type="color" id="btn-color"></input>
        <button
          className="w3-button w3-black"
          onClick={() => {
            f_setcolor("black");
          }}
        ></button>
        <button
          className="w3-button w3-green"
          onClick={() => {
            f_setcolor("green");
          }}
        ></button>
        <button
          className="w3-button w3-red"
          onClick={() => {
            f_setcolor("red");
          }}
        ></button>
        <button
          className="w3-button w3-blue"
          onClick={() => {
            f_setcolor("blue");
          }}
        ></button>
        <button
          className="w3-button w3-yellow"
          onClick={() => {
            f_setcolor("yellow");
          }}
        ></button>
        <button
          className="w3-button w3-purple"
          onClick={() => {
            f_setcolor("purple");
          }}
        ></button>
        <button
          className="w3-button w3-border"
          onClick={() => {
            f_setcolor("white");
          }}
        >
          <img src="images/borrador.png" alt="" />
        </button>
        <button
          className="w3-button w3-border"
          onClick={() => {
            f_pincel();
          }}
        >
          <img src="images/pincel.png" alt="" />
        </button>
        <input
          defaultValue={1}
          type="range"
          id="grosor"
          min={1}
          max={20}
          onClick={(ev, v) => {
            f_setgrosor(ev.target.value);
          }}
        ></input>
        <button
          className="w3-button w3-pale-green "
          onClick={() => {
            f_limpiar();
          }}
        >
          limpiar
        </button>

        <a
          id="descargar"
          download="imagen.jpg"
          href=""
          className="w3-button"
          onClick={f_descargar()}
        >
          descargar
        </a>
      </div>
    </div>
  );
}
Herramientas.propTypes = {
  f_setcolor: PropTypes.func,
  f_pincel: PropTypes.func,
  f_limpiar: PropTypes.func,
  f_descargar: PropTypes.func,
  f_setgrosor: PropTypes.func,
  f_deshacer: PropTypes.func,
  f_load_img: PropTypes.func,
};

export default Herramientas;
