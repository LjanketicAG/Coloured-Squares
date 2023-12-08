let arrayOfClickedSquares = []

function setColor(square, color) {
    return square.style.backgroundColor = color
}

function removeFromClickedArray(square) {
    const index = arrayOfClickedSquares.indexOf(square)
    if(index !== -1){
        arrayOfClickedSquares.splice(index, 1)
    }
}

function handleSquareClick(square) {
    if(arrayOfClickedSquares.includes(square)) {
        removeFromClickedArray(square)
        setColor(square, 'black')
    } else {
        arrayOfClickedSquares.push(square)
        setColor(square, 'green')
    }
}

function reverseArrayAndResetColors(){
    arrayOfClickedSquares.reverse()
    arrayOfClickedSquares.forEach((square, index) => {
        revertSquareColor(index)
    })
}

function revertSquareColor(index) {
    setTimeout(function () {
      arrayOfClickedSquares[index].style.backgroundColor = "black";
      if (index === arrayOfClickedSquares.length - 1) {
        arrayOfClickedSquares = []
      }
    }, index === 0 ? 500 : index * 1000)
}

function coloredSquaresGame(event) {
    const clickedSquare = document.getElementById(event)

    handleSquareClick(clickedSquare)

    if(arrayOfClickedSquares.length === 6) {
        reverseArrayAndResetColors()
    }

}
