// Libs
import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    task: "",
    listTask: []
  };

  removeItem = (id) => {
    let { listTask } = this.state;
    this.setState({
      listTask: listTask.filter((item) => {
        return item.id !== id;
      })
    });
  };

  addTask = (event) => {
    let { task, listTask } = this.state;
    if (task.length > 0)
      this.setState({
        task: "",
        listTask: listTask.concat({
          task: task,
          id: Date.now()
        })
      });
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="wrapTodo">
            <nav className="menu">
              <ul className="menu-list">
                <li className="list-item">All</li>
                <li className="list-item">Doing</li>
                <li className="list-item">Done</li>
              </ul>
            </nav>
            <form onSubmit={this.addTask}>
              <input
                onChange={this.handleChange}
                value={this.state.task}
                type="text"
                placeholder="WHAT NEEDS TO BE DONE?"
                className="input"
              />
              {this.state.listTask.map((listTask, index) => (
                <li>
                  {listTask.task}
                  <span
                    onClick={() => {
                      this.removeItem(listTask.id);
                    }}
                    key={index}
                  >
                    X
                  </span>
                </li>
              ))}
            </form>
          </div>
          <div className="background">
            <span className="layer"> TO DO </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
