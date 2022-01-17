import React, { useState } from "react";
import PairingGameHeader from "./PairingGameHeader";
import PairingGameBoard from "./PairingGameBoard";

export default function CardPairingGame() {
  const [turns, setTurns] = useState(0);
  const [diffLevel, setDiffLevel] = useState("Low");
  return (
    <div>
      <PairingGameHeader
        turns={turns}
        diffLevel={diffLevel}
        changeDiffLevel={(l) => {
          setTurns(0);
          setDiffLevel(l);
        }}
      />
      <PairingGameBoard
        diffLevel={diffLevel}
        incrementTurns={() => setTurns(turns + 1)}
      />
    </div>
  );
}
