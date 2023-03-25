// Get the div element that will contain the table
const tableDiv = document.getElementById("tableDiv");

// Create a new table element
const table = document.createElement("table");

// Set the number of rows and columns
var n = prompt("enter an n-value");

// Set border size for tableDiv element to wrap around board 
document.getElementById("tableDiv").style.width = (n*80) + "px";

// Create a 2D array to store the cells
const cells = [];

// Generate the rows and cells using nested loops
for (let i = 0; i < n; i++) {
  // Create a new row element
  const row = document.createElement("tr");

  // Create a new row in the 2D array
  cells[i] = [];

  for (let j = 0; j < n; j++) {
    // Create a new cell element
    const cell = document.createElement("td");

    // Set the cell content (in this case, a boolean value)
    const content = document.createTextNode(true);
    cell.appendChild(content);

    // Set the x and y coordinates of the cell in the dataset
    cell.dataset.x = i;
    cell.dataset.y = j;

    // Add the cell to the row
    row.appendChild(cell);

    // Add the cell to the 2D array
    cells[i][j] = cell;
  }

  // Add the row to the table
  table.appendChild(row);
}

// Add the table to the tableDiv
tableDiv.appendChild(table);

const img = document.createElement("img");

img.src = "queen.png";
img.alt = "queen";

img.style.maxWidth = "100%";
img.style.maxHeight = "100%";

// add a click event listener to each cell
cells.forEach(row => {
  row.forEach(cell => {
    cell.addEventListener('click', () => {
      // toggle the boolean value of the cell
      if (cell.dataset.value === 'true') {
        cell.dataset.value = 'false';
        cell.textContent = 'false';
      } else {
        cell.dataset.value = 'true';
        cell.innerHTML = '<img id = "img" src="queen.png">';
      }
    });
  });
});

// Get the random button element
const randomButton = document.getElementById("randomButton");

// Add a click event listener to the button to randomly place the queens
randomButton.addEventListener("click", () => {
  // Remove any existing queens from the board
  cells.forEach(row => {
    row.forEach(cell => {
      cell.dataset.value = "false";
      cell.textContent = "false";
      cell.innerHTML = "";
    });
  });

  // Randomly place the queens on the board
  let queensPlaced = 0;
  while (queensPlaced < n) {
    // Generate random coordinates
    const x = Math.floor(Math.random() * n);
    const y = Math.floor(Math.random() * n);

    // Check if the cell is already occupied
    if (cells[x][y].dataset.value === "false") {
      // Place the queen in the cell
      cells[x][y].dataset.value = "true";
      cells[x][y].innerHTML = '<img id = "img" src="queen.png">';
      queensPlaced++;
    }
  }
});
