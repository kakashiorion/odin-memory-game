import React from "react";
import "../styles/character.css";

export default function CharacterCard(props) {
  return (
    <button className="characterCard" onClick={() => props.onClick()}>
      <CharacterImage src={props.src} />
      <CharacterName name={props.name} />
    </button>
  );
}

function CharacterImage(props) {
  return (
    <div className="characterImage">
      <img src={props.src} alt={props.name} />
    </div>
  );
}

function CharacterName(props) {
  return <div className="characterName">{props.name}</div>;
}
