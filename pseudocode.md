# Sliding Puzzle

## Components
    1. Board
            2.Tiles
            3.Button to shuffle
            4.Upload picture button
            5.Header
            6.(stretch goal) Button to load random pic (find api with square pics?)

## Whiteboard session
    -don't think about front end/UI first

### How
    -map to create 16 tiles in 4x4 grid ( each a div ) 4 rows using 4 col (d-block)
    -Use an array of objects (16 objects numbered 0-15) 
    beginning = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    tiles = []; (copy of beginnign that is shuffled)
        ID = initial array index, never changes
        type = blank or regular, never changes
        location = current index where the object sits
        clicked = false (add event listener to change this to true)
            if indexOf clicked === 0 && blank tile is in index 1 or 4 change to true
        indexOf(clicked) : indexOf(getelementbyID('blank))
            0: [1,4]
            1: [0, 2, 5]
            2: [1,3,6]
            3: [2,7]
            4: [0,5, 8]
            5: [1,4,6,9]
            6: [2,5,7,10]
            7: [3,6,11]
            8: [4,9,12]
            9: [5,8,10,13]
            10: [6,9,11,14]
            11: [7,10,15]
            12: [8,13]
            13: [9,12,14]
            14: [10,13,15]
            15: [11,14]

            else alert (this tile cannot be moved!)

    - moveTile(){
        this.state.row = row of blank
        this.state.col = col of blank
        blank col = clicked col
        blank row = clicked row
    }

    - button to shuffle
        for(let i = array.length — 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
}
    -on state change check win conditions (in component did update)
        if (tiles === beginning)
        alert(You Won!)
        

<!-- Ian  11:24 AM
3 ways to map and make a grid
move the export default to the function you wanna test out
import React from 'react'
function Grid() {
  let arr = Array(16).fill().map((x, i) => i)
  let grid = []
  let subArr = []
  for (let j = 0; j < arr.length; j++) {
    let col = <div className='col'>{j}</div>
    subArr.push(col)
    if ((j + 1) % 4 === 0) {
      console.log("in if")
      let row = <div className='row'>{subArr}</div>
      grid.push(row)
      subArr = []
    }
  }
  console.log(grid, subArr)
  return (
    <div className='container'>
      {grid}
    </div>
  )
}
function GridUsingMap() {
  let arr = Array(16).fill().map((x, i) => i)
  let grid = arr.map((y, j) => {
    return (
      (j + 1) % 4 === 0 &&
      <div className='row'>
        {arr.slice(j + 1 - 4, j + 1).map((x, i) => (
          <div className='col'>
            {/* inner for loop */}
            {x}
          </div>
        ))}
      </div>
    )
  })
  console.log(grid)
  return (
    <div className='container'>
      {grid}
    </div>
  )
}
export default function GridWithRows() {
  return (
    <div className='container'>
      {/* outer for loop */}
      {Array(4).fill().map((y, j) => (
        <div className='row'>
          {Array(4).fill().map((x, i) => (
            <div className='col'>
              {/* inner for loop */}
              {(4 * (j + 1)) - (4 - i)}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
} -->