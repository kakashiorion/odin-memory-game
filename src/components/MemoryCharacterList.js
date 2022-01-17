import React from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  function clickedThisCard(id) {
    if (props.clickedAlready.includes(id)) {
      props.resetScore();
      props.setClickedAlready([]);
    } else {
      props.setClickedAlready([...props.clickedAlready, id]);
      props.incrementScore();
      props.randomizeCardList();
    }
  }

  return (
    <>
      {props.characters.map((c) => {
        return (
          <CharacterCard
            src={c.image}
            name={c.name}
            key={c.id}
            onClick={() => clickedThisCard(c.id)}
          />
        );
      })}
    </>
  );
}
