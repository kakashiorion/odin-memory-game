import React from "react";
import ReactDOM from "react-dom";
import CardPairingGame from "./PairingGame";
import MemoryGame from "./MemoryGame";
import "../styles/startScreen.css";

export default function StartScreen() {
  return (
    <div className="startScreen">
      <SelectGame />
      <GameList />
    </div>
  );
}

function SelectGame() {
  return <div className="selectGame">Select the game you want to play</div>;
}

function GameList() {
  function startCardPairingGame() {
    ReactDOM.render(
      <React.StrictMode>
        <CardPairingGame />
      </React.StrictMode>,
      document.getElementById("root")
    );
  }
  function startMemoryGame() {
    ReactDOM.render(
      <React.StrictMode>
        <MemoryGame />
      </React.StrictMode>,
      document.getElementById("root")
    );
  }
  return (
    <div className="gameList">
      <div>
        <button className="startScreenButton" onClick={() => startMemoryGame()}>
          Memory Game
        </button>
        <div>(Click different cards without repeating)</div>
      </div>
      <div>
        <button
          className="startScreenButton"
          onClick={() => startCardPairingGame()}
        >
          Card Pairing Game
        </button>
        <div>(Match pairs of cards)</div>
      </div>
    </div>
  );
}
