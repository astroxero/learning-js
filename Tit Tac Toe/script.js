const cells = document.querySelectorAll("td");
let currentPlayer = "X";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function(event) {
    if (event.target.textContent === "") {
      event.target.textContent = currentPlayer;
      if (checkWin(currentPlayer)) {
        alert(currentPlayer + " wins!");
        reset();
      } else if (checkDraw()) {
        alert("Draw!");
        reset();
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
}

function checkWin(player) {
  return (
    (cells[0].textContent === player && cells[1].textContent === player && cells[2].textContent === player) ||
    (cells[3].textContent === player && cells[4].textContent === player && cells[5].textContent === player) ||
    (cells[6].textContent === player && cells[7].textContent === player && cells[8].textContent === player) ||
    (cells[0].textContent === player && cells[3].textContent === player && cells[6].textContent === player) ||
    (cells[1].textContent === player && cells[4].textContent === player && cells[7].textContent === player) ||
    (cells[2].textContent === player && cells[5].textContent === player && cells[8].textContent === player) ||
    (cells[0].textContent === player && cells[4].textContent === player && cells[8].textContent === player) ||
    (cells[2].textContent === player && cells[4].textContent === player && cells[6].textContent === player)
  );
}

function checkDraw() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      return false;
    }
  }
  return true;
}

function reset() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
}
