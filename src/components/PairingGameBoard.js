import React, { useState, useEffect } from "react";
import "../styles/pairingGame.css";
import PairingCharacterList from "./PairingCharacterList";
import {
  getRandomCharacterIdList,
  shuffleArray,
  duplicateArrayWithId,
  getPairingDifficultyNumber,
} from "./Utils.js";

export default function PairingGameBoard(props) {
  const [characters, setCharacters] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  // const [secondCard, setSecondCard] = useState(null);
  const [matchedAlready, setMatchedAlready] = useState([]);

  useEffect(() => {
    const idList = getRandomCharacterIdList(
      getPairingDifficultyNumber(props.diffLevel)
    );
    const fetchData = async () => {
      const rawCharacters = await fetch(
        "https://rickandmortyapi.com/api/character/" + idList.toString()
      );
      const char = await rawCharacters.json();

      // let changeValues = Object.assign({}, char);
      // changeId(changeValues);
      let newChar = duplicateArrayWithId(Object.values(char));
      setCharacters(shuffleArray([...newChar]));
    };
    fetchData();
    setMatchedAlready([]);
    setTimeout(() => {}, 1000);
  }, [props.diffLevel]);

  return (
    <>
      <div className="game-instruction">
        Objective: Flip to match same characters!
      </div>
      <div className="pairing-game-board">
        <PairingCharacterList
          characters={characters}
          firstCard={firstCard}
          // secondCard={secondCard}
          matchedAlready={matchedAlready}
          setMatchedAlready={(l) => setMatchedAlready(l)}
          setFirstCard={(l) => setFirstCard(l)}
          // setSecondCard={(l) => setSecondCard(l)}
          incrementTurns={() => props.incrementTurns()}
        />
      </div>
    </>
  );
}
