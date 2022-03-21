import { Col, Input, Row } from "antd";
import Todo from "../Todo";

export default function TodoList() {
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        <Todo name="Learn React" />
        <Todo name="Learn Redux" />
        <Todo name="Learn JavaScript" />
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input placeholder="Add new task" />
        </Input.Group>
      </Col>
    </Row>
  );
}
