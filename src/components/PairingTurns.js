import React from "react";
import "../styles/pairingTurns.css";

export default function ScoreBoard(props) {
  return (
    <div className="pairing-turns">
      <p>Player Turns:</p>
      <Turns turns={props.turns} />
    </div>
  );
}

export function Turns(props) {
  return <div className="turns">{props.turns}</div>;
}
