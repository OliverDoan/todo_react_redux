import { Row, Checkbox } from "antd";
import { useState } from "react";
import { DeleteTwoTone } from "@ant-design/icons";
import { deleteTodo } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function Todo({ name, id }) {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };
  const dispatch = useDispatch();

  const handleDeleteButtonClick = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <DeleteTwoTone
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "red",
        }}
        onClick={handleDeleteButtonClick}
      />
    </Row>
  );
}
