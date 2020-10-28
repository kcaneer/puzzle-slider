import React, { useState } from "react";

function Board() {
  let tiles = [{ id: 0, col: 0, row: 0, type: true }];
  let col = 0;
  let row = 0;
  for (let i = 1; i < 16; i++) {
    col++;

    if (i % 4 === 0) {
      col = 0;
      row++;
    }
    tiles.push({ id: i, col: col, row: row });
  }
  console.log(tiles);
  // const[tile,setTile] = useState()

  function moveTile(obj) {
    if (
      obj.col === tiles[0].col &&
      (obj.row === tiles[0].row + 1 || obj.row === tiles[0].row - 1)
    ) {
      alert("this tile is in the same col");
    } else if (
      obj.row === tiles[0].row &&
      (obj.col === tiles[0].col + 1 || obj.col === tiles[0].col - 1)
    ) {
      alert("this tile is in the same row!");
    }
    else{
      alert("this tile cannot be moved")
    }
  }
  //       if (clicked === true)
  // find coordinates of clicked object and coordinates of blank object
  //  else alert (this tile cannot be moved!)
  //

  return (
    <div className="row">
      {tiles.map((obj, index) => {
        return (
          <div
            className="col col-3 border border-secondary"
            onClick={() => moveTile(obj)}
          >
            {obj.id}
          </div>
        );
      })}
    </div>
  );
}

export default Board;

//   didClick() {

// //   this.setState({
//     id: index,
//     type: regular,
//     location: currentIndex,
//     clicked = true,
// })
//
//   }
