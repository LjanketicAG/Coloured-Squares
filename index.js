let arrayOfClickedSquares = []

function colorHandler(event) {
    const clickedSquare = document.getElementById(event)
    if(arrayOfClickedSquares.includes(clickedSquare)) {
        const matchingGreenSquareIndex = arrayOfClickedSquares.indexOf(clickedSquare);
        arrayOfClickedSquares.splice(matchingGreenSquareIndex, 1)
        clickedSquare.style.backgroundColor = "black"
    } else {
        arrayOfClickedSquares.push(clickedSquare)
        clickedSquare.style.backgroundColor = "green"
    }
} 