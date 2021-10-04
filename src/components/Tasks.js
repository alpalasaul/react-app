import React, { Component } from 'react';
import Task from './Task';

//this.props.tasks indicamos que queremos acceder a la propiedad que fue mandada desde App.js
class Tasks extends Component {
    render() {
        return this.props.tasks.map(task => <Task task={task} key={task.id}/>); 
    }
}

export default Tasks;