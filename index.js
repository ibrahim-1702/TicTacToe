document.getElementById("clearBtn").disabled = true;
let round = 0;
let mark = "X";
let cleanBoard = document.getElementsByClassName("cell");
let matrix = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
function buttonsDisabler() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`cell${i}`).disabled = true;
  }
}
function buttonsEnabler() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`cell${i}`).disabled = false;
  }
}
function judge() {
  if (
    matrix[0][0] != "" &&
    matrix[0][0] == matrix[0][1] &&
    matrix[0][2] == matrix[0][0]
  ) {
    document.getElementById("outputContainer").append(`${matrix[0][0]} Wins`);
    buttonsDisabler();
    matrix = [[], [], []];
  } else if (
    matrix[0][0] != "" &&
    matrix[0][0] == matrix[1][1] &&
    matrix[2][2] == matrix[0][0]
  ) {
    document.getElementById("outputContainer").innerHTML =
      `${matrix[0][0]} Wins`;
    buttonsDisabler();
    matrix = [[], [], []];
  } else if (
    matrix[1][0] != "" &&
    matrix[1][0] == matrix[1][1] &&
    matrix[1][1] == matrix[1][2]
  ) {
    document.getElementById("outputContainer").innerHTML =
      `${matrix[1][0]} Wins`;
    buttonsDisabler();
    matrix = [[], [], []];
  } else if (
    matrix[2][0] != "" &&
    matrix[2][0] == matrix[2][1] &&
    matrix[2][1] == matrix[2][2]
  ) {
    document.getElementById("outputContainer").innerHTML =
      `${matrix[2][0]} Wins`;
    buttonsDisabler();
    matrix = [[], [], []];
  } else if (
    matrix[0][0] != "" &&
    matrix[0][0] == matrix[1][0] &&
    matrix[1][0] == matrix[2][0]
  ) {
    document.getElementById("outputContainer").innerHTML =
      `${matrix[2][0]} Wins`;
    buttonsDisabler();
    matrix = [[], [], []];
  } else if (
    matrix[0][1] != "" &&
    matrix[0][1] == matrix[1][1] &&
    matrix[1][1] == matrix[2][1]
  ) {
    document.getElementById("outputContainer").innerHTML =
      `${matrix[0][1]} Wins`;
    buttonsDisabler();
    matrix = [[], [], []];
  } else if (
    matrix[0][2] != "" &&
    matrix[0][2] == matrix[1][2] &&
    matrix[1][2] == matrix[2][2]
  ) {
    document.getElementById("outputContainer").innerHTML =
      `${matrix[0][2]} Wins`;
    buttonsDisabler();
    matrix = [[], [], []];
  } else if (
    matrix[0][2] != "" &&
    matrix[0][2] == matrix[1][1] &&
    matrix[1][1] == matrix[2][0]
  ) {
    document.getElementById("outputContainer").innerHTML =
      `${matrix[0][2]} Wins`;
    buttonsDisabler();
    matrix = [[], [], []];
  } else {
    let gameOver = true;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (matrix[i][j] == "") gameOver = false;
      }
    }
    if (gameOver)
      document.getElementById("outputContainer").innerHTML = `Game Tie`;
  }
}
function matrixHandler(cellId, value) {
  switch (cellId) {
    case "c1":
      matrix[0][0] = value;
      break;
    case "c2":
      matrix[0][1] = value;
      break;
    case "c3":
      matrix[0][2] = value;
      break;
    case "c4":
      matrix[1][0] = value;
      break;
    case "c5":
      matrix[1][1] = value;
      break;
    case "c6":
      matrix[1][2] = value;
      break;
    case "c7":
      matrix[2][0] = value;
      break;
    case "c8":
      matrix[2][1] = value;
      break;
    case "c9":
      matrix[2][2] = value;
      break;
    default:
      console.log("Invalid cellId");
  }
}
function printXO(cellNo, btnName) {
  document.getElementById(btnName).disabled = true;
  document.getElementById("clearBtn").disabled = false;
  let el = document.getElementById(cellNo);

  let image = document.createElement("img");
  image.style = "height: 60px;width: 60px;";
  if (mark === "X") {
    image.src =
      "https://w7.pngwing.com/pngs/482/392/png-transparent-black-x-mark-tic-tac-toe-oxo-holiday-tic-tac-toe-game-blue-cross-miscellaneous-angle-cross.png";
    matrixHandler(cellNo, mark);
    mark = "O";
    round++;
  } else {
    image.src = "https://i.pngimg.me/thumb/f/720/m2H7d3i8A0b1b1d3.jpg";
    matrixHandler(cellNo, mark);
    mark = "X";
  }
  image.style = "width: 50px; height: 50px;";
  image.className = cellNo;
  el.appendChild(image);
  if (round > 2) {
    judge();
  }
}

function clearboard(cn) {
  for (let i = 1; i <= 9; i++) {
    let el = document.querySelector(`.c${i}`);
    if (el != null) el.remove();
  }
  let el = document.getElementById(`outputContainer`);
  el.innerHTML = "";
  round = 0;
  mark = "X";
  matrix = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  document.getElementById("clearBtn").disabled = true;
  buttonsEnabler();
}
