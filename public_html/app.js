const gameboard = document.querySelector(".board");
const numbers = document.querySelector(".numbers");
const letters = document.querySelector(".letters");

let white = true;
var n = prompt("Please enter a value for n: ");

function changeElement() {
  const boardChange = document.getElementsByClassName('board')[0];
  boardChange.style.height = (80 * n) + 'px';
  boardChange.style.width = (80 * n) + 'px';
  boardChange.style.gridTemplateRows = `repeat(${n}, 80px)`;
  boardChange.style.gridTemplatecolumns = `repeat(${n}, 80px)`;

  const squares = document.getElementsByClassName('square');
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.width = `${80 / n}px`;
    squares[i].style.height = `${80 / n}px`;
    squares[i].style.border = '1px solid black';
  }
}
changeElement();
for (let i = 1; i <= n*n; i++) //loop to generate the board
{
    let square = document.createElement("div");
    square.classList.add("square");
    if (!white)
    {
        square.classList.add("black");
    }
    white=!white;
    if (i%n === 0)
    {
        white = !white;
    }
    gameboard.appendChild(square);
}



