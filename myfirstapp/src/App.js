import React from 'react';
import './App.css';

/*function Helloworld(props){
  return (
  <div id="hello"><h3>{props.subtitulo}</h3>{props.texto}</div>
  );
}*/

class Helloworld extends React.Component {

  state = {
    show: true
  }

  render(){
    if(this.state.show = true){
    return (
      <div id="hello">
        <h3>{this.props.subtitulo}</h3>
        {this.props.texto}
        <button>Visualizar</button>
      </div>
      
      )
    }else{
      return <h1>No hay elementos.</h1>
    }
  }
}

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
