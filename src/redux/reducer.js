const initialState = {
  filters: {
    search: "",
    status: "All",
  },
  todoList: [
    { id: 1, name: "Learn Yoga", completed: false },
    { id: 2, name: "Learn Redux", completed: true },
    { id: 3, name: "Learn JavaScript", completed: false },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "todoList/deleteTodo":
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
