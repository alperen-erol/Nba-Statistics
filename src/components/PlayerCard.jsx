import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PlayerCard = (item) => {
  console.log(item);
  return (
    <>
      <Card className="rounded-1 player-card">
        <Card.Img className="player-image" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default PlayerCard;
