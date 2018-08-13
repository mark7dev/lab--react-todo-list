import React, { Component } from 'react';
import './style/style.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      task: {},
      tasks: [
              {description: "wash cat", done: false},
              {description: "read book", done: false},
              {description: "rethink my life", done: false}
             ]
    };
  }

  updateList = (e) => {
    e.preventDefault();
    const value = this.refs.taskInput.value;
    if (value !== '') {
      const newState = this.state;
      newState.task = {description: value, done: false}
      this.setState(newState);
      newState.tasks.push(newState.task);
      this.setState(newState);
    }
  }

  removeList = (e) => {
    e.preventDefault();
    const taskIndex = e.target.parentNode.id;
    const newState = this.state.tasks;
    newState.splice(taskIndex, 1);
    this.setState(newState);
  }  

  render() {
    const tasks = this.state.tasks;
    return (
      <div className="container">
        <div className="window">
          <div className="header">
            <h2>
              Todo List
              <small className="text-header">Normal Mode</small>
            </h2>
          </div>
          <div className="todo">
            <div className="todo-input">
              <form onSubmit={ this.updateList }>  
                <input type="text" ref="taskInput" ></input>
              </form>
              <button><i className="fa fa-plus"></i></button>
            </div>
            <hr/>
            <div className="todo-container">
                {tasks.map((task, i) => {
                  return <div id={ i } className="todo-container--list">
                            <label className="todo-container--checkbox">
                              <input id="input-task" type="checkbox"></input>
                              <span className="todo-container--label"></span>
                              <span className="todo-container--label2">{task.description}</span>
                            </label>
                            <i className="fa fa-remove fa-2x" onClick={ this.removeList }></i>          
                         </div>
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;