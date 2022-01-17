import React from "react";
import "../styles/scoreBoard.css";

export default function ScoreBoard(props) {
  return (
    <div className="scoreBoard">
      <p>Player Score:</p>
      <Score score={props.score} />
    </div>
  );
}

export function Score(props) {
  return <div className="playerScore">{props.score}</div>;
}
