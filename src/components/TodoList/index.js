import { Col, Input, Row } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../redux/actions";
import Todo from "../Todo";
import { todoListSelector } from "../../redux/selectors";
export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const todoList = useSelector(todoListSelector);
  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
      })
    );

    setTodoName("");
  };
  const handleInputChange = (e) => {
    console.log("handleInputChange", e.target.value);
    setTodoName(e.target.value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={todoName}
            onChange={handleInputChange}
            placeholder="Add new task"
            onKeyPress={(e) => {
              if (e.key === "Enter" && todoName) {
                handleAddButtonClick();
              }
            }}
          />
        </Input.Group>
      </Col>
    </Row>
  );
}
