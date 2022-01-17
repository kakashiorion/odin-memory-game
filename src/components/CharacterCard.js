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

export function CharacterImage(props) {
  return (
    <div className="characterImage">
      <img src={props.src} alt="Character" />
    </div>
  );
}

export function PairingImage(props) {
  return (
    <div className="pairing-image">
      <img src={props.src} alt="Character" onClick={() => props.onClick()} />
    </div>
  );
}

function CharacterName(props) {
  return <div className="characterName">{props.name}</div>;
}
