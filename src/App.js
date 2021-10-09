import React, { Component } from 'react';
import './App.css';
// importamos los datos del json
import tasks from './sample/task.json';
// Componentes
import Tasks from './components/Tasks';

import TaskForm from './components/TaskForm';

console.log(tasks); // observear los datos en la consola

class App extends Component { // va en lugar de React.Component ya que lo importamos en la line 1

  state = {
    tasks: tasks // porpiedad: arreglo importado
  }

  // las {} sirven para insertar javascript
  // tasks [agregamos una propiedad al componente Tasks]
  render() {
    return (
      <div>
        <TaskForm/>
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
