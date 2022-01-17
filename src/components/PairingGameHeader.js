import React from "react";
import BackButton from "./BackButton";
import Difficulty from "./Difficulty";
import PairingTurns from "./PairingTurns";
import "../styles/pairingGameHeader.css";

export default function PairingGameHeader(props) {
  return (
    <div className="pairing-game-header">
      <BackButton />
      <Difficulty
        diffLevel={props.diffLevel}
        changeDiffLevel={(l) => props.changeDiffLevel(l)}
      />
      <PairingTurns turns={props.turns} />
    </div>
  );
}
