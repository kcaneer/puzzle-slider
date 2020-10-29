import React, { useState, useEffect } from "react";

function Board() {
  const [tiles, setTiles] = useState([]);
  function tileArray() {
    let tiles = [];
    let col = 0;
    let row = 0;
    for (let i = 0; i < 16; i++) {
      tiles.push({ id: i, col: col, row: row });
      col++;
      if ((i + 1) % 4 === 0) {
        col = 0;
        row++;
      }
    }
    setTiles(tiles);
  }
  useEffect(tileArray, []);
  function moveTile(obj, index) {
    let newTiles = tiles;
    let temp;
    if (
      obj.col === tiles[0].col &&
      (obj.row === tiles[0].row + 1 || obj.row === tiles[0].row - 1)
    ) {
      temp = tiles[index].row;
      // alert("this tile is in the same col");
      newTiles[index].row = tiles[0].row;
      newTiles[0].row = temp;
      // setTiles(newTiles);
      setTiles(newTiles);
      // setTiles(tiles.row === tiles[0].row && make tiles[0].row === thistiles.row)
    } else if (
      obj.row === tiles[0].row &&
      (obj.col === tiles[0].col + 1 || obj.col === tiles[0].col - 1)
    ) {
      // alert("this tile is in the same row!");
      temp = tiles[index].col;
      newTiles[index].col = tiles[0].col;
      newTiles[0].col = temp;
      
      let temp2 = newTiles[index];
      newTiles[index] = tiles[0];
      newTiles[0] = temp2;


      setTiles(newTiles);

      // setTiles(thistiles.col === tiles[0].col && make tiles[0].col === thistiles.col)
    } else {
      alert("this tile cannot be moved");
    }
    console.log(newTiles);
  }
  //       if (clicked === true)
  // find coordinates of clicked object and coordinates of blank object
  //  else alert (this tile cannot be moved!)
  //
  // let sorted = []
  // let sorted1 = [];
  // let sorted2 = [];
  // let sorted3 = [];
  // let sorted4 = [];

  // for (let i of tiles ){
  //   if (i.row )
  //   // tiles.sort(function(){
  //     if (tiles[i].row === 0){
  //       sorted1.push(tiles[i])
  //     }
  //     else if (tiles[i].row === 1){
  //       sorted2.push(tiles[i])
  //     }
  //     else if (tiles[i].row === 2){
  //       sorted3.push(tiles[i])
  //     }
  //     else{
  //       sorted4.push(tiles[i])
  //     }
  // }

  // let newArray = sorted1.concat(sorted2,sorted3,sorted4)
  // function fun(next, current) {
  //   // console.log(next.row <= current.row && next.col <= current.col);
  //   // console.log({ next, current });
  //   if (next.row <= current.row && next.col <= current.col) {
  //     return -1;
  //   }
  //   return 1;
  //   // return next.col - current.col + next.row - current.row;

  //   // return next.row <= current.row && next.col <= current.col;
  // }

  // let sorted = [...tiles].sort(fun);
  // console.log({ sorted });

  let mapped = tiles.map((obj, index) => {
    return (
      <div
        key={obj.id}
        className="col boardcol col-3 border border-secondary"
        onClick={() => moveTile(obj, index)}
      >
        {obj}
      </div>
    );
  });
  console.log({ mapped });
  return <div className="row">{mapped}</div>;
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
