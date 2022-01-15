import React, { useState, useEffect } from "react";
import "../styles/memoryGame.css";
import CharacterCard from "./CharacterCard";

function getRandomCharacterIdList(n) {
  let idList = [];
  while (idList.length < n) {
    let newId = parseInt(Math.random() * 100);
    if (!idList.includes(newId) && newId !== 0) {
      idList.push(newId);
    }
  }
  return idList;
}

function getDifficultyNumber(l) {
  if (l === "Low") {
    return 10;
  } else if (l === "Medium") {
    return 15;
  } else if (l === "High") {
    return 20;
  }
}

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

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  return (
    <>
      <div className="gameInstruction">
        Objective: Try clicking different characters without repeating!
      </div>
      <div className="memoryGameBoard">
        <CharacterList
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

function CharacterList(props) {
  function clickedThisCard(id) {
    if (props.clickedAlready.includes(id)) {
      props.resetScore();
      props.setClickedAlready([]);
    } else {
      props.setClickedAlready([...props.clickedAlready, id]);
      props.incrementScore();
      props.randomizeCardList();
    }
  }

  return (
    <>
      {props.characters.map((c) => {
        return (
          <CharacterCard
            src={c.image}
            name={c.name}
            key={c.id}
            onClick={() => clickedThisCard(c.id)}
          />
        );
      })}
    </>
  );
}
