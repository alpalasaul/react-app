import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import './App.css';
// importamos los datos del json
import tasks from './sample/task.json';
// Componentes
import Tasks from './components/Tasks';

import TaskForm from './components/TaskForm';
import Posts from './components/Posts';

console.log(tasks); // observear los datos en la consola

class App extends Component { // va en lugar de React.Component ya que lo importamos en la line 1

  state = {
    tasks: tasks // propiedad: arreglo importado
  }

  agregarTarea = (titulo, descripcion) => { // son los parámetros que va a esperar la función
    const newTask = {
      title: titulo,
      description: descripcion,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  borrarTarea = (id) => {
    const mewtask = this.state.tasks.filter(task => task.id !== id)
    this.setState({
      tasks: mewtask
    })
  }

  // creamos un método para cambiar el estado entre true or false y para pasar el método
  // al componente Task que es el que tiene ese estado lo hacemos através de un 'prop'
  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
      task.done = !task.done  
      }      
      return task;
    })
    this.setState({
      tasks: newTasks
    })
  }

  // las {} sirven para insertar javascript
  // tasks [agregamos una propiedad al componente Tasks]
  // le pasamos el método borrar a través del componente <Tasks/>
  render() {
    return (
      <div>
        <Router> 
          <Link to="/">Home</Link>
          <br />
          <Link to="/posts">Posts</Link>

          <Route exact path="/" render={() => {
            return <div>
                <TaskForm addTask={this.agregarTarea}/>
                <Tasks 
                  borrarTarea={this.borrarTarea} 
                  tasks={this.state.tasks} 
                  checkDone={this.checkDone}
                /> 
            </div>
          }}>
          </Route>
          <Route path="/posts" component={Posts}/>
        </Router>
      </div>
    );
  }
}

export default App;
