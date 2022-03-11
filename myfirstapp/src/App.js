//Siempre hay que importar la biblioteca React.
import React, { Component } from 'react';
import './App.css';
import tareas from './ejemplo/tarea.json';
//Importamos las Tareas y las aplicamos en el render() de la clase.
import Tareas from './componentes/tareas';

//Hay una nueva función llamada map que su objetivo es operar con arrays recorriendolos y alterando como se veria su valor base,
//pero en realidad no lo modifica.
//Un ejemplo seria: nos vamos al terminar y escibimos node, dentro creamos un array a[1, 2, ,3] luego usamos la función map
//a.map((e) => e + 3) esto lo que hará es recorrer el array sumandole el valor 3, el e es como el nombre de un evento por así decrilo.

class App extends Component{

  state = {
    tareas: tareas
  }

  render(){
    return <div>
         <Tareas tareas={this.state.tareas}/>
    </div>
  }
}

export default App;