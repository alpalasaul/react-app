import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Task.css'

class Task extends Component {

    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {
        // guardar dentro de una estructura para má legibilidad
        // className="red" es propio de react y no de css
        // style={{background: 'red'}} eso es estilizarlo con un objeto
        // <p style={redColor} esta manera se genera al guardar el estilo en una variable
        //const redColor = {background: 'red'};
        const {task} = this.props;
        return <p style={this.StyleCompleted()}>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox" onChange={this.props.cambiarDone.bind(this, task.id)} />
            <button style={btnDelete} onClick={this.props.borrarTask.bind(this, task.id)}>
                x
            </button>
        </p>
    }
}

// para especificar el tipo de dato que espero al mandar una propiedad hacemos lo siguiente 
Task.propTypes = {
    task: PropTypes.object.isRequired
}

// objeto de javascript
const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10 px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;