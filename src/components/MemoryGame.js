import React, { useState } from "react";
import MemoryGameBoard from "./MemoryGameBoard";
import GameHeader from "./GameHeader";

export default function MemoryGame() {
  const [score, setScore] = useState(0);
  const [diffLevel, setDiffLevel] = useState("Low");

  return (
    <div>
      <GameHeader
        score={score}
        diffLevel={diffLevel}
        changeDiffLevel={(l) => {
          setScore(0);
          setDiffLevel(l);
        }}
      />
      <MemoryGameBoard
        diffLevel={diffLevel}
        incrementScore={() => setScore(score + 1)}
        resetScore={() => setScore(0)}
      />
    </div>
  );
}
