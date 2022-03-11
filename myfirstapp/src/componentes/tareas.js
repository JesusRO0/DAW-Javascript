import React, { Component } from 'react';
import Tarea from './tarea';

//Aquí definimos los componentes de las clases de nuestra aplicación.

//Su función es listar todas las tareas mostrando cada una de las tareas gracias a tarea.js y mostrarlas en el App.js
class Tareas extends Component{
    render(){
        return this.props.tareas.map(tarea => <Tarea tarea={tarea} key={tarea.id}/>) 
    }
}

export default Tareas;