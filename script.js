const gridContainer = document.querySelector("#grid-container");
const gridContainerDim = gridContainer.clientWidth;

function createGrid(size) {
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

gridContainer.addEventListener("mouseover", (e) =>
  e.target.classList.add("hover")
);

createGrid(16);
