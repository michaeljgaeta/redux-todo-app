import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTodoFromAPI, toggleTodoOnAPI, getTodosFromAPI } from "../actions/todo";

import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

class TodoList extends Component {
  componentDidMount() {
    this.props.handleReceiveTodos();
  }

  toggleTodo = (todo) => {
    todo.completed = !todo.completed;
    this.props.handleToggleTodo(todo);
  };

  render() {
    if (this.props.loggedUser.type === "admin") {
      return (
        <Container style={{ paddingRight: "16px" }} maxWidth="md">
          <List>
            {this.props.todo.map((todo) => {
              return (
                <ListItem key={todo._id} button>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={todo.name}
                    style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                    onClick={() => this.toggleTodo(todo)}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit" onClick={() => this.toggleTodo(todo)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => this.props.handleRemoveTodo(todo._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </Container>
      );
    } else {
      return <div>You don't have the right privileges</div>;
    }
  }
}

// Maps the state that lives in the reducer
// to the this.props of the component
const mapStateToProps = (state) => {
  return {
    todo: state.todo,
    loggedUser: state.loggedUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleRemoveTodo: (id) => dispatch(removeTodoFromAPI(id)),
  handleToggleTodo: (todo) => dispatch(toggleTodoOnAPI(todo)),
  handleReceiveTodos: () => dispatch(getTodosFromAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
