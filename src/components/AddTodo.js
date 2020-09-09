import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodoToAPI } from "../actions/todo";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import styled from "styled-components";

const StyledContainer = styled(Container)`
  margin: 16px auto;
  padding: 16px;
  /* box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12); */
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

export class AddTodo extends Component {
  state = {
    newTodoName: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAddNewTodo = (event) => {
    event.preventDefault();
    let newTodo = {
      name: this.state.newTodoName
    };

    this.setState({ newTodoName: "" });
    // lift the state up - not necessary anymore
    this.props.handleAddTodo(newTodo);
  };

  render() {
    return (
      <StyledContainer maxWidth="sm">
        <Grid container>
          <Grid item md={12}>
            <form onSubmit={this.handleAddNewTodo}>
              <TextField
                fullWidth
                id="outlined-basic"
                type="text"
                name="newTodoName"
                label="Enter Title"
                multiline
                variant="outlined"
                value={this.state.newTodoName}
                onChange={this.handleChange}
              />
              <Grid item md={12}>
                <StyledButton fullWidth type="submit" variant="contained" color="primary">
                  <AddCircleOutlineIcon />
                </StyledButton>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </StyledContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: (todo) => dispatch(addTodoToAPI(todo))
});

export default connect(null, mapDispatchToProps)(AddTodo);
