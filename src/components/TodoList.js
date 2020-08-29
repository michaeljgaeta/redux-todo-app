import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeTodoAction, completeTodoAction } from "../actions/todo";

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todo.map((todo) => {
          return <li key={todo.id}>
                  <span onClick ={() => this.props.handleCompleteTodo(todo.id)}>{todo.name}</span>
                  <button onClick={() => this.props.handleRemoveTodo(todo.id)}>X</button>
                </li>
        })}
      </ul>
    )
  }
}

// Maps the state that lives in the reducer
// to the this.props of the component
const mapStateToProps = state => {
  return {
    todo: state.todo
  }
}

const mapDispatchToProps = dispatch => ({
  handleRemoveTodo: id => dispatch(removeTodoAction(id)),
  handleCompleteTodo: id => dispatch(completeTodoAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
