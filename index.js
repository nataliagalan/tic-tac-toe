import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { Board } from "./board.js";

const startGame = async () => {
  const board = new Board();
  board.print();

  // const rl = readline.createInterface({ input, output });
  // const answer = await rl.question(
  //   "would you like to play agaisnt a computer? Y/N     "
  // );

  // console.log(answer);
  // rl.close();
};

startGame();
