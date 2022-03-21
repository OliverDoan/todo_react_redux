import { Checkbox, Row } from "antd";
import { useState } from "react";
import { DeleteTwoTone } from "@ant-design/icons";

export default function Todo({ name }) {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
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
      />
    </Row>
  );
}
