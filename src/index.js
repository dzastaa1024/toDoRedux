import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers } from "redux";
import { Provider, connect } from "react-redux";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return [...state, action.payload];
    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case "CHANGE_LOADING":
      return !state;
    default:
      return state;
  }
};

const reducer = combineReducers({
  todo: todoReducer,
  loading: loadingReducer,
});

const store = createStore(reducer);

const addNewTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

const removeTodo = (id) => {
  return {
    type: "REMOVE_TODO",
    payload: id,
  };
};

class Todo extends Component {
  state = {
    todo: "",
  };

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  handleClick = () => {
    this.props.addNewTodo(this.state.todo);
  };

  render() {
    console.log("PROPS", this.props.state);
    return (
      <>
        <input
          type="text"
          value={this.state.todo}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add todo</button>
        {this.props.todos.map((todo) => (
          <p key={todo}>{todo}</p>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTodo: (todo) => dispatch(addNewTodo(todo)),
  };
};

const _Todo = connect(mapStateToProps, mapDispatchToProps)(Todo);

ReactDOM.render(
  <Provider store={store}>
    <_Todo />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
