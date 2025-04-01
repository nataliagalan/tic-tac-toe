import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import chalk from "chalk";

import { Board } from "./board.js";

const rl = readline.createInterface({ input, output });
const board = new Board();

const TOTAL_GUESSES = 10;
const CHOICES = ["A", "B", "C", "D", "E", "F"];

const gameLoop = async (numberGuesses) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const computerPick = [];

  let n = 0;
  while (n < 4) {
    // put one random element from CHOICES into computerPick
    const index = getRandomInt(CHOICES.length);
    computerPick.push(CHOICES[index]);
    n++;
  }

  const answer = await rl.question(
    "would you like to play agaisnt the computer? (y/n)"
  );

  if (answer === "y") {
    // call board.chooseRandomSpot()
  }

  // colors = {🥳, 😱, 🤓,😢}
  // 1. Start game
  //  2. computer picks a combination
  //  3. you input a combination (a guess)
  //  4. the computer checks your guess versus it's pick. For an exact match, you get a black peg, if not exact, then you get a white peg, otherwise nothing.
  //  5. repeat

  // === === ===  1 START_GAME === === ===
  // displayStart();
  // numberGuesses = 0
  // TOTAL_GUESSES = 10
  // === === ===  2 COMPUTER_PICKS === === ===
  // const computerPick = getComputerPick();
  // while (numberGuesses < TOTAL_GUESSES) {
  //    === === ===  3 YOU GUESS === === ===
  //    displayGuess()
  //    const guess = getGuess(); // read from input
  //    === === === 4 COMPUTER_CHECK === === ===
  //    const result = checkGuess(guess, computerPick); // check
  //    if (result == WIN) {
  //        displayWin();
  //         break;
  //    }
  //    displayResult();
  //    === === === 5 REPEAT === === ===
  //    numberGuesses += 1;
  //  }

  // STEP 4 - ALGORITHM TO CHECK GUESSES
  // result = []
  // for index, value in yourGuess
  //  indexComputerPick = computerPick.findIndex(value) <- returns the index of the value in the computer pick, else -1

  //  if (indexComputerPick === index) {
  //      EXACT MATCH
  //      result.push(🎯)
  //  } else if (indexComputerPick !== -1) {
  //      NOT_EXACT MATCH
  //      result.push(👀)
  //  } else {
  //      NOT_PRESENT
  //      result.push(🕳️)
  //  }

  // alphabet = [A,B,C,D]
  // computerPick = [A,B,C,C]
  // yourGuess =    [A,C,B,D]
  // output = [EXACT, NOT_EXACT, NOT_EXACT, NOT_PRESENT]

  // EXACT => same letter, same index
  // NOT_EXACT => letter in computerPick set

  // 🎯, 👀, 👀, 🕳️

  const rowQuestion = `${chalk.inverse(
    `\n 🀰 Enter row for Player ${currentPlayer}: (a, b, or c) :`
  )}`;
  const columnQuestion = `${chalk.inverse(
    `\n ▮ Enter column for Player ${currentPlayer}: (1, 2, or 3) :`
  )}`;

  const row = await rl.question(rowQuestion);
  const column = await rl.question(columnQuestion);

  board.update(row, column, currentPlayer);

  const isTieOrWin = board.checkForTieOrWin(currentPlayer);

  if (isTieOrWin) {
    board.print();
    rl.close();
    return;
  }

  const nextPlayer = currentPlayer === "x" ? "o" : "x";

  gameLoop(nextPlayer);
};

const startGame = async () => {
  console.log("Welcome to Mastermind");

  const numberGuesses = 0;
  gameLoop(numberGuesses);
};

startGame();
