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
        <Square value={squares[1]} onSquareClick={handleClick}/>
        <Square value={squares[2]} />
        <Square value={squares[3]} />
      </div>
      <div className="board-row">
        <Square value={squares[4]} />
        <Square value={squares[5]} />
        <Square value={squares[6]} />
      </div>
      <div className="board-row">
        <Square value={squares[7]} />
        <Square value={squares[8]} />
        <Square value={squares[9]} />
      </div>
    </Fragment>
  )
}