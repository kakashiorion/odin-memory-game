import React from "react";
import ScoreBoard from "./ScoreBoard";
import BackButton from "./BackButton";
import Difficulty from "./Difficulty";
import "../styles/gameHeader.css";

export default function GameHeader(props) {
  return (
    <div className="gameHeader">
      <BackButton />
      <Difficulty
        diffLevel={props.diffLevel}
        changeDiffLevel={(l) => props.changeDiffLevel(l)}
      />
      <ScoreBoard score={props.score} />
    </div>
  );
}
