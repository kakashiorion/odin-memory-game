import React, { useState } from "react";
import { PairingImage } from "./CharacterCard";
import logo from "./rickandmorty.jpeg";

export default function PairingCharacterList(props) {
  const [secondCard, setSecondCard] = useState(null);

  function makeNum(id) {
    return parseInt(id);
  }

  function clickedThisCard(id) {
    //Cards match
    if (props.firstCard === id + 100 || props.firstCard === id - 100) {
      setSecondCard(id);
      props.setMatchedAlready(
        id > 100
          ? [...props.matchedAlready, id - 100, id]
          : [...props.matchedAlready, id, id + 100]
      );
      props.setFirstCard(null);
      props.incrementTurns();
    }
    //Clicked first card
    else if (props.firstCard === null) {
      props.setFirstCard(id);
      setSecondCard(null);
    }
    //Cards do not match
    else {
      setSecondCard(id);
      setTimeout(() => {
        setSecondCard(null);
        props.setFirstCard(null);
        props.incrementTurns();
      }, 1000);
    }
  }

  return (
    <>
      {props.characters.map((c) => {
        return (
          <PairingImage
            key={c.id}
            src={
              props.matchedAlready.includes(makeNum(c.id)) ||
              props.matchedAlready.includes(makeNum(c.id) - 100) ||
              props.firstCard === makeNum(c.id) ||
              secondCard === makeNum(c.id)
                ? c.image
                : logo
            }
            onClick={() => {
              if (
                !props.matchedAlready.includes(makeNum(c.id)) &&
                !props.matchedAlready.includes(makeNum(c.id) - 100) &&
                !props.matchedAlready.includes(makeNum(c.id) + 100) &&
                props.firstCard !== makeNum(c.id)
              ) {
                clickedThisCard(makeNum(c.id));
              }
            }}
          />
        );
      })}
    </>
  );
}
