export const checkTodo = (id) => {
  return {
    type: "CHECK_TODO",
    payload: id,
  };
};
