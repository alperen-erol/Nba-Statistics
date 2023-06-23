import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const PlayerCard = (item) => {
  const statistics = item.statistics;
  const [cardFace, setCardFace] = useState(true);
  return (
    <>
      <Card
        onClick={() => setCardFace(!cardFace)}
        className="rounded-1 player-card"
        role="button"
      >
        {cardFace ? (
          <Card.Img className="player-image" src={item.img} />
        ) : (
          <ul className=" m-auto mt-5 statCard">
            {statistics.map((item) => {
              return <li className=" list-unstyled h6 text-start">{item}</li>;
            })}
          </ul>
        )}
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default PlayerCard;
