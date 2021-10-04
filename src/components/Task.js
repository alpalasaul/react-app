import React, { Component } from 'react';

class Task extends Component {
    render() {
        // guardar dentro de una estructura para má legibilidad
        const {task} = this.props;
        return <div>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox" />
            <button>
                x
            </button>
        </div>
    }
}

export default Task;