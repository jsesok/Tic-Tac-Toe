import React, { Fragment } from "react";

function Square({ value }) {
  return <button className="square">{value}</button>
}

export default function Board() {
  return (
    <Fragment>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </Fragment>
  )
}