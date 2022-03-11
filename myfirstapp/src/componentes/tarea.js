import React, { Component } from "react";

//Lista las tareas y los pinta en el div que se le pasa a tareas.
class Tarea extends Component {
    render() {
        const {tarea} = this.props;

        return <div>
        {tarea.title} - 
        {tarea.description} - 
        {tarea.done} - 
        {tarea.id} 
        <input type="checkbox" />
        <button>X</button>
        </div>
    }
}

export default Tarea;