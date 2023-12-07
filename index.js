let arrayOfClickedSquares = []

function getColor(square) {
    return square.style.backgroundColor
}

function setColor(square, color) {
    return square.style.backgroundColor = color
}

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
    if(arrayOfClickedSquares.length === 6) {
        arrayOfClickedSquares.reverse()
        for(i = 0; i < arrayOfClickedSquares.length; i++){
            changeSquareColor(i)
        }
    }
}

function changeSquareColor(index) {
    setTimeout(function () {
      arrayOfClickedSquares[index].style.backgroundColor = "black";
      if (index === arrayOfClickedSquares.length - 1) {
        arrayOfClickedSquares = []
      }
    }, index === 0 ? 500 : index * 1000)
}