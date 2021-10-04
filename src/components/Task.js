import React, { Component } from 'react';

import './Task.css'

class Task extends Component {
    render() {
        // guardar dentro de una estructura para má legibilidad
        // className="red" es propio de react y no de css
        // style={{background: 'red'}} eso es estilizarlo con un objeto
        // <p style={redColor} esta manera se genera al guardar el estilo en una variable
        //const redColor = {background: 'red'};
        const {task} = this.props;
        return <p>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox" />
            <button style={btnDelete}>
                x
            </button>
        </p>
    }
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