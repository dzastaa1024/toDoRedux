export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat(action.payload);
    case "CHECK_TODO":
      return state.map((toDo) => {
        if (toDo.id === action.payload) {
          toDo.checked = !toDo.checked;
          return toDo;
        }
        return toDo;
      });
    case "DELETE_TODO":
      return state.filter((toDo) => {
        return toDo.id !== action.payload;
      });
    default:
      return state;
  }
};
