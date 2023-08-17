import React, { Fragment } from "react";
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    // create a copy of the squares array
    const nextSquares = squares.slice();
    // update the value of the square
    nextSquares[i] = "X";
    // change the component's state
    setSquares(nextSquares);
  }

  return (
    <Fragment>
      <div className="board-row">
        <Square value={squares[1]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[4]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[7]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[9]} onSquareClick={() => handleClick(8)} />
      </div>
    </Fragment>
  )
}