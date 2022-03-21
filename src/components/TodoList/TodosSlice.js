const initState = [
  { id: 1, name: "Learn Yoga", completed: false },
  { id: 2, name: "Learn Redux", completed: true },
  { id: 3, name: "Learn JavaScript", completed: false },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/deleteTodo":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

export default todoListReducer;
