
"use client";

import { useState } from "react";
import Cell from "./components/cell";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Home() {
  const [cells, setCells] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [go, setGo] = useState("circle");

  let winningMessage = "";

  winningCombos.forEach((combo) => {
    const circleWins = combo.every(
      (cell) => cells[cell] === "circle"
    );

    const crossWins = combo.every(
      (cell) => cells[cell] === "cross"
    );

    if (circleWins) {
      winningMessage = "Circle Wins!";
    } else if (crossWins) {
      winningMessage = "Cross Wins!";
    }
  });

  if (!winningMessage && cells.every((cell) => cell !== "")) {
    winningMessage = "Draw!";
  }

  return (
    <div className="container">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            id={index}
            go={go}
            setGo={setGo}
            key={index}
            cells={cells}
            setCells={setCells}
            cell={cell}
            winningMessage={winningMessage}
          />
        ))}
      </div>

      <div>{winningMessage}</div>

      {!winningMessage && <div>{`its now ${go} turn!`}</div>}
    </div>
  );
}
