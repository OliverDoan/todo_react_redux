export const todoListSelector = (state) => {
  const todosRemainingSelector = state.todoList.filter((todo) => {
    return todo.name.includes(state.filters.search);
  });
  return todosRemainingSelector;
};

export const searchTextSelector = (state) => state.filters.search;
