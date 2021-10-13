import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        titulo : '',
        descripcion : ''
    }

    // si usamos un solo parámetro podemos usarlo sin ()
    onSubmit = (e) => { // evita use el bind
        this.props.addTask(this.state.titulo, this.state.descripcion);
        e.preventDefault(); // cancelamos el comportamiento de refrescar la página a cada momento  
    }

    cambioTexto = e => {
        this.setState({
            [e.target.name] : e.target.value // indicamos que tome el valor de los 'name' que asignamos en cada elemento HTML
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="titulo"
                    placeholder="Escribe una tarea" 
                    onChange={this.cambioTexto} 
                    value={this.state.titulo} />
                <br />
                <br />
                <textarea 
                    placeholder="Escribe una descripción..." 
                    name="descripcion"
                    onChange={this.cambioTexto} 
                    value={this.state.des} ></textarea>
                <input type="submit" />
            </form>
        )
    }
}

// export default TaskForm
// se puede exportar de ambas formas