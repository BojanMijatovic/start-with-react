import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    userName: 'Omega',
    todoItems: [
      { action: 'Learn React', done: false },
      { action: 'Master JS', done: false },
      { action: 'Learn Redux', done: false },
      { action: 'Drink Beer', done: true }
    ],
    newTodoText: ''
  }

  changeStateData = () => {                        //uses the setState method to set a new value for the userName property.
    this.setState({
      userName: this.state.userName === 'Omega' ? 'Novi Sad' : 'Omega'
    })
  }

  updateNewTodoText = (e) => {          //update
    this.setState({
      newTodoText: e.target.value
    })
  }

  addNewTodoItem = () => {
    if (!this.state.todoItems.find(item => item.action === this.state.newTodoText)
      || this.state.newTodoText.length === ''.trim()) {
      this.setState({
        todoItems: [...this.state.todoItems, { action: this.state.newTodoText, done: false }],  //add new todo
        newTodoText: ''
      })
    }
  }

  toggleTodo = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map(item => {
        return item.action === todo.action ? { ...item, done: !item.done } : item
      })
    })
  }

  todoTableRows = () => this.state.todoItems.map(item => {
    return <tr key={item.action}>
      <td>{item.action}</td>
      <td>
        <input type="checkbox" onChange={() => this.toggleTodo(item)} checked={item.done}></input>
      </td>
    </tr>
  })


  render() {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName} To-do list
        </h4>
        <button className="btn btn-primary m-2" onClick={this.changeStateData}>Change</button>
        <h3 className="bg-primary text-white text-center">
          For now we have {this.state.todoItems.filter(item => !item.done).length} todos left</h3>
        <div className="container-fluid">
          <div className="my-1">
            <input className="form-control" type="text" value={this.state.newTodoText} onChange={this.updateNewTodoText} />
            <button className="btn btn-primary mt-1" onClick={this.addNewTodoItem}>add todo</button>
          </div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr><th>Description</th><th>Done</th></tr>
            </thead>
            <tbody>{this.todoTableRows()}</tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App;
