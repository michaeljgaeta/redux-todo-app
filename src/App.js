import React, { Component } from 'react';
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    )
  }
}

export default App
