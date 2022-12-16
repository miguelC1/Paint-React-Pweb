import React,{Component} from "react";
import Pizarra from "../pizarra/Pizarra";
import './style.css';

class Herramientas extends Component{
        constructor(props) {
            super(props);
            this.state = {
                color: "#000000",
                size: "2",
            }
            this.colorAmarillo=this.colorAmarillo.bind(this);
            this.colorAzul=this.colorAzul.bind(this);
            this.colorRojo=this.colorRojo.bind(this);
            this.colorVerde=this.colorVerde.bind(this);
        }
    
        cambiarColor(params) {
            this.setState({
                color: params.target.value
            })
            
        }
    
        cambiarTamano(params) {
            this.setState({
                size: params.target.value
            })
        }
    
        //colores Establecidos
        colorAmarillo() {
            this.setState({
                color: "#ffff00",
            })
        }

        colorAzul() {
            this.setState({
                color: "#0A54D5",
            })
        }

        colorVerde() {
            this.setState({
                color: "#039F03",
            })
        }
        
        colorRojo() {
            this.setState({
                color: "#CA0F06",
            })
        }
    
    
        render() {
    
            return (
                <div className="container">
                    
                    <div class="tools-section">
                        <h2>PIZARRA CON REACT</h2>
                        <div className="color-picker-container">
                            Seleccion Color : &nbsp; 
                            <input type="color" value={this.state.color} onChange={this.cambiarColor.bind(this)}/>
                        </div>
    
                        <div className="brushsize-container">
                            Selecione  Espesor : 
                            <input value={this.state.size} type="number">
                            </input>
                        </div>
    
                    </div>
    
    
                  <br></br>
                  
                    <div class="tools-section">
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                    <button className="w3-button" href="">
                     deshacer
                    </button>
                    <button className="w3-button w3-blue" onClick={this.colorAzul}>
                    </button>
                    <button className="w3-button w3-green" onClick={this.colorVerde}
                    ></button>
                    <button className="w3-button w3-red" onClick={this.colorRojo}
                    ></button>
                    <button className="w3-button w3-yellow" onClick={this.colorAmarillo}
                    ></button>
                    <button
                    ></button>
                    <button
                      className="w3-button w3-border">
                    <img src="images/borrador.png" alt="" />
                    </button>
                    <button
                    className="w3-button w3-border"
                    >
                    <img src="images/pincel.png" alt="" />
                    </button>
                    <input
                    defaultValue={1}
                    type="range"
                    id="grosor"
                    value={this.state.size}
                    min={1}
                    max={30}
                    onChange={this.cambiarTamano.bind(this)}
                    ></input>
                    <button
                    className="w3-button w3-pale-green "
                    >
                    limpiar
                    </button>
                    <button
                    id="descargar"
                    download="imagen.jpg"
                    className="w3-button"
                    >
                    descargar
                    </button>
                    </div>
                <br></br>
                
                    <div class="board-container">
                        <Pizarra color={this.state.color} size={this.state.size}></Pizarra>
                    </div>
                </div>
            )
        }
    }
    
    export default Herramientas