import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions/addTodo";

class ToDo extends Component {
  state = {
    value: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.value);
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleChange} />
          <button type="submit">Add</button>
        </form>
        {this.props.toDos.map((todo) => {
          return <p>{todo}</p>;
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    toDos: state.toDos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
