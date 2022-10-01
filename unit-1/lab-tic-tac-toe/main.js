// Variable Definitions
const board = [[], [], [], [], []];
const n = board.length;
const cells = document.querySelectorAll("td");
const xTurn = "X";
const oTurn = "O";
const turnDisplay = document.getElementById("playerTurn");
let playerTurn = xTurn;
let gameState;
let xScore;
let oScore;

//Set up initial states for variables
Initialize();

//Function Definitions
function Initialize() {
	cells.forEach((cell) => {
		cell.addEventListener("click", UpdatePlayerMove);
	});
	document.querySelector("button").addEventListener("click", NewGame);
	NewGame();
	UpdatePlayerTurn();
}

function NewGame() {
	ResetBoard();
	ResetTable();

	gameState = 1;
}

function ResetBoard() {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			board[i][j] = 0;
		}
	}
}

function ResetTable() {
	cells.forEach((cell) => {
		cell.innerText = "";
	});
}
// TODO
function UpdateBoard(index, move) {
	let row = Math.floor(index / 3);
	let col = index % 3;
	let val = playerTurn === xTurn ? 1 : -1;

	board[row + 1][col + 1] = val;

	board[n - 1][col + 1] += val;
	board[row + 1][n - 1] += val;

	if (isRightDiagonal(row, col)) {
		board[n - 1][n - 1] += val;
	}
	if (isLeftDiagonal(row, col)) {
		board[n - 1][0] += val;
	}
}

function isRightDiagonal(row, col) {
	let result = false;
	if (row === 0 && col === 0) result = true;
	if (row === 1 && col === 1) result = true;
	if (row === 2 && col === 2) result = true;

	return result;
}

function isLeftDiagonal(row, col) {
	let result = false;
	if (row === 0 && col === 2) result = true;
	if (row === 1 && col === 1) result = true;
	if (row === 2 && col === 0) result = true;

	return result;
}

function UpdatePlayerMove(event) {
	let cell = event.target;

	if (cell.innerText === "" && gameState === 1) {
		cell.innerText = playerTurn;
		UpdateBoard(cell.getAttribute("data-index"));

		if (isWin()) {
			EndGame();
		} else {
			NextTurn();
		}
	}
}

function UpdatePlayerTurn() {
	turnDisplay.innerText = playerTurn;
}

function NextTurn() {
	playerTurn = playerTurn == xTurn ? oTurn : xTurn;

	UpdatePlayerTurn();
}

function isWin() {
	let n = board.length;
	for (let i = 0; i < n; i++) {
		let val = Math.abs(board[n - 1][i]);
		if (val === 3) return true;
	}

	for (let i = 0; i < n; i++) {
		let val = Math.abs(board[i][n - 1]);
		if (val === 3) return true;
	}

	return false;
}

function EndGame() {
	gameState = 0;
	UpdateScore();
}

function UpdateScore() {
	let id = playerTurn === "X" ? "xScore" : "oScore";
	let scoreLine = document.getElementById(id);
	let score = parseInt(scoreLine.textContent);
	scoreLine.textContent = score + 1;
}
