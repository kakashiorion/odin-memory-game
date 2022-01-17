import React from "react";
import "../styles/difficulty.css";

export default function Difficulty(props) {
  return (
    <div className="difficulty">
      <div>Change difficulty level</div>
      <DifficultyList
        diffLevel={props.diffLevel}
        changeDiffLevel={(lvl) => props.changeDiffLevel(lvl)}
      />
    </div>
  );
}

function DifficultyList(props) {
  const currentLevel = props.diffLevel;
  return (
    <div className="difficultyList">
      <DifficultyButton
        level="Low"
        setLevel={() => props.changeDiffLevel("Low")}
        isActive={"Low" === currentLevel ? true : false}
      />
      <DifficultyButton
        level="Medium"
        setLevel={() => props.changeDiffLevel("Medium")}
        isActive={"Medium" === currentLevel ? true : false}
      />
      <DifficultyButton
        level="High"
        setLevel={() => props.changeDiffLevel("High")}
        isActive={"High" === currentLevel ? true : false}
      />
    </div>
  );
}

function DifficultyButton(props) {
  return (
    <button
      className={"difficultyButton" + (props.isActive ? " active" : "")}
      onClick={props.setLevel}
    >
      {props.level}
    </button>
  );
}
