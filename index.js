import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { Board } from "./board.js";

const rl = readline.createInterface({ input, output });
const board = new Board();

const gameLoop = async (currentPlayer) => {
  board.print();

  const row = await rl.question(
    `Enter row for Player ${currentPlayer}: (a, b, or c) `
  );
  const column = await rl.question(
    `Enter column for Player ${currentPlayer}: (1, 2, or 3) `
  );

  // TODO: replace "x" with player.symbol
  board.update(row, column, currentPlayer);

  const isTieOrWin = board.checkForTieOrWin();

  if (isTieOrWin) {
    rl.close();
    return;
  }

  const nextPlayer = currentPlayer === "x" ? "o" : "x";

  gameLoop(nextPlayer);
};

const startGame = async () => {
  console.log("Welcome to Tic Tac Toe!");
  gameLoop("x");
};

startGame();
