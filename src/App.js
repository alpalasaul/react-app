import React, { Component } from 'react';
import './App.css';
// importamos los datos del json
import tasks from './sample/task.json';

import Tasks from './components/Tasks';

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
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
