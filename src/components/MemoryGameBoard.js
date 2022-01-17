import React, { useState, useEffect } from "react";
import "../styles/memoryGame.css";
import MemoryCharacterList from "./MemoryCharacterList";
import {
  getRandomCharacterIdList,
  getDifficultyNumber,
  shuffleArray,
} from "./Utils.js";

export default function MemoryGameBoard(props) {
  const [characters, setCharacters] = useState([]);
  const [clickedAlready, setClickedAlready] = useState([]);

  useEffect(() => {
    const idList = getRandomCharacterIdList(
      getDifficultyNumber(props.diffLevel)
    );
    const fetchData = async () => {
      const rawCharacters = await fetch(
        "https://rickandmortyapi.com/api/character/" + idList.toString()
      );
      const char = await rawCharacters.json();
      setCharacters(Object.values(char));
    };
    fetchData();
  }, [props.diffLevel]);

  function randomizeCardList() {
    setCharacters(shuffleArray(characters));
  }

  return (
    <>
      <div className="gameInstruction">
        Objective: Try clicking different characters without repeating!
      </div>
      <div className="memoryGameBoard">
        <MemoryCharacterList
          characters={characters}
          clickedAlready={clickedAlready}
          setClickedAlready={(l) => setClickedAlready(l)}
          randomizeCardList={() => randomizeCardList()}
          incrementScore={props.incrementScore}
          resetScore={props.resetScore}
        />
      </div>
    </>
  );
}
