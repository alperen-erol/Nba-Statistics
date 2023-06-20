import React from "react";
import { data } from "../utility/data";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from "./PlayerCard";
const Main = () => {
  return(
    <>
    <Container >
      <Row>
      {data.map((item)=>(
        <Col sm={6} md={4} lg={3} xl={3}>
        <Card key={item.name} {...item}/>
        </Col>
      ))}
      </Row>
    </Container>
    </>
  );
};

export default Main;
