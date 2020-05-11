import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions/addTodo";
import { deleteTodo } from "./actions/deleteTodo";
import { checkTodo } from "./actions/checkTodo";

class ToDo extends Component {
  state = {
    value: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const singleTodo = {
      id: new Date(),
      checked: false,
      value: this.state.value,
    };
    this.props.addTodo(singleTodo);

    this.setState({
      value: "",
    });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleDelete = (id) => {
    this.props.delete(id);
  };

  handleCheck = (id) => {
    this.props.checked(id);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleChange} />
          <button type="submit">Add</button>
        </form>

        <div>
          {this.props.todos.map((todo) => {
            return (
              <form onSubmit={() => this.handleDelete(todo.id)}>
                <p>{todo.value}</p>
                <input
                  type="checkbox"
                  onChange={() => this.handleCheck(todo.id)}
                />
                <button>Delete</button>
              </form>
            );
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    todos: state.toDos,
  };
};

const mapDispatchToProps = (dispach) => {
  return {
    addTodo: (todo) => dispach(addTodo(todo)),
    delete: (id) => dispach(deleteTodo(id)),
    checked: (id) => dispach(checkTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
