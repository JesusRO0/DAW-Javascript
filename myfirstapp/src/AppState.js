//Siempre hay que importar la biblioteca React.
import React from 'react';
import './App.css';

//ESTE ES UN EJEMPLO DE FUNCIONAMIENTO CON REACTJS Y LOS ESTADOS (STATES)

/* Esto hace lo mismo que la clase pero en función.
function Helloworld(props){
  return (
  <div id="hello"><h3>{props.subtitulo}</h3>{props.texto}</div>
  );
}*/

class Helloworld extends React.Component {

  //Proporcionar un estado, este es un estado de ejemplo donde se podra visualizar o no, un contenido.
  state = {
    show: true
  }
  //Esta función cambia el estado de true a false y viceversa.
  Mostrar =() => {
    this.setState({show: !this.state.show})
  }
  //La función render se utiliza en las clases para crear la interfaz, en este caso el div o el h3.
  render(){
    //Si el show es true muestra el div y si es false el h3, esto cambiará pulsando el botón.
    if(this.state.show){
      //Dentro de los botónes colocaremos la función mostrar.
    return (
      <div id="hello">
        <h3>{this.props.subtitulo}</h3>
        {this.props.texto}
        <button onClick={this.Mostrar}>Visualizar</button>
      </div>
        )
    }else{
      return <h1>No hay elementos.<button onClick={this.Mostrar}>Visualizar</button></h1>
    }
  }
}
//Función de nuestra app donde retornaremos lo que hará.
function App() {
  return (
    <div>Esto es mi componente: 
      <Helloworld texto="Hello Jesús" subtitulo="Lorem Iptsum"/> 
      <Helloworld texto="Hola Mundo" subtitulo="Que pasa"/> 
      <Helloworld texto="Hola!" subtitulo="Te meto una hostia"/>
    </div>
  );
}

export default App;