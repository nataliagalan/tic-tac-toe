import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { Board } from "./board.js";

const startGame = async () => {
  const board = new Board();
  board.print();

  const rl = readline.createInterface({ input, output });
  const row = await rl.question("Enter row for Player 1: (a, b, or c) ");
  const column = await rl.question("Enter column for Player 1: (1, 2, or 3) ");

  // TODO: replace "x" with player.symbol
  board.update(row, column, "x");

  board.print();

  rl.close();
};

startGame();
