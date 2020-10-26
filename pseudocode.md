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
        ID = initial array index
        type = blank or regular
        location = current index
        clicked = false (add event listener to change this to true)
            if indexOf clicked === 0 && blank tile is in index 1 or 3 change to true
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
        

