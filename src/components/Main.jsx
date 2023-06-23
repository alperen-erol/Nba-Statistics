import React, { useState } from "react";
import { data } from "../utility/data";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Card from "./PlayerCard";
const Main = () => {
  const [search, setSearch] = useState("")
  return (
    <>
      <Form.Control
        className="mb-5 w-50 m-auto"
        type="search"
        placeholder="Search Player"
        onChange={(e)=>setSearch(e.target.value)}
      />
      <Container>
        <Row>
          {data.filter((i)=> i.name.toLowerCase().includes(search.toLowerCase())).map((item) => (
            <Col sm={6} md={4} lg={3} xl={3}>
              <Card key={item.name} {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Main;
