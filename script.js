const gridContainer = document.querySelector("#grid-container");
const gridContainerDim = gridContainer.clientWidth;
const resetButton = document.querySelector("#reset");
const blackButton = document.querySelector("#black");
const rgbButton = document.querySelector("#rgb");
const SixteenButton = document.querySelector("#size16");
const ThirtyTwoButton = document.querySelector("#size32");
const SixtyFourButton = document.querySelector("#size64");

function createGrid(size) {
  // createGrid(size): Creates a grid with dimensions size x size.
  for (let counter = 0; counter < size ** 2; counter++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    width = height = gridContainerDim / size;
    cell.style.width = `${width}px`;
    cell.style.height = `${height}px`;
    cell.textContent = "";
    gridContainer.appendChild(cell);
  }
}

function reset() {
  // reset(): clears the grid.
  cells = gridContainer.children;
  for (let counter = 0; counter < cells.length; counter++) {
    let cell = cells[counter];
    // Removing the class hover will make the grid white again.
    cell.classList.remove("hover");
  }
}

function hover(e) {
  //  hover(e): Add color to cell.
  e.target.classList.add("hover");
}

function black() {
  // black(): Make the color black
  gridContainer.removeEventListener("mouseover", hover);
  gridContainer.addEventListener("mouseover", hover);
}

resetButton.addEventListener("click", reset);
blackButton.addEventListener("click", black);

ThirtyTwoButton.addEventListener("click", function () {
  // Makes the grid dimentions 32x32
  if (gridContainer.children.length === 32 * 32) {
    return;
  }
  while (gridContainer.firstChild) {
    gridContainer.firstChild.remove();
  }
  createGrid(32);
});

SixtyFourButton.addEventListener("click", function () {
  // Makes the grid dimentions 64x64
  if (gridContainer.children.length === 64 * 64) {
    return;
  }
  while (gridContainer.firstChild) {
    gridContainer.firstChild.remove();
  }
  createGrid(64);
});

SixteenButton.addEventListener("click", function () {
  // Makes the grid dimentions 16x16
  if (gridContainer.children.length === 16 * 16) {
    return;
  }
  while (gridContainer.firstChild) {
    gridContainer.firstChild.remove();
  }
  createGrid(16);
});

createGrid(16);
gridContainer.addEventListener("mouseover", hover);
