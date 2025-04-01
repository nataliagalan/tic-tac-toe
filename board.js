import chalk from "chalk";

const row1Data = new Map();
row1Data.set(1, " ");
row1Data.set(2, " ");
row1Data.set(3, " ");

const row2Data = new Map();
row2Data.set(1, " ");
row2Data.set(2, " ");
row2Data.set(3, " ");

const row3Data = new Map();
row3Data.set(1, " ");
row3Data.set(2, " ");
row3Data.set(3, " ");

export class Board {
  constructor() {
    this.row1 = row1Data;
    this.row2 = row2Data;
    this.row3 = row3Data;
  }

  // ### inputs:
  // - current player's symbol
  // - current player's type
  // ### process:
  // - choose a random letter between a, b, or c
  // 	- set `row` to the value chosen
  // - choose a random number between 1, 2, or 3
  // 	- set `column` to the value chosen

  // - run `this.checkIfSpotIsTaken(row, column);`
  // 	- update this ^ to not print the warning message that we print for humans if player.type is "computer"
  // - if the spot is taken, choose something else until an available spot is chosen

  // ### output:
  // - an available spot is chosen
  // - the board row values are updated in memory
  // - and the board is ready to be re-printed

  chooseRandomSpot(playerSymbol, playerType) {
    const abcArray = ["a", "b", "c"];
    const randomRow = abcArray[Math.floor(Math.random() * abcArray.length)];

    const columnArray = [1, 2, 3];
    const randomColumn =
      columnArray[Math.floor(Math.random() * columnArray.length)];
  }

  checkIfSpotIsTaken(row, column) {
    const warningMessage = `${chalk.red(
      "\n📌 Spot is taken, please choose another spot 📌"
    )}`;

    if (row === "a") {
      if (this.row1.get(parseInt(column)) !== " ") {
        console.log(warningMessage);
        return true;
      }
    } else if (row === "b") {
      if (this.row2.get(parseInt(column)) !== " ") {
        console.log(warningMessage);
        return true;
      }
    } else if (row === "c") {
      if (this.row3.get(parseInt(column)) !== " ") {
        console.log(warningMessage);
        return true;
      }
    }
  }

  checkForTieOrWin(currentPlayer) {
    const winningMessage = `${chalk.yellow.inverse(
      `\n🥳 Player: ${currentPlayer} wins! 🥳`
    )}`;

    const tieMessage = `${chalk.black.inverse("\n🤝 It's a tie! 🤝")}`;

    if (this.checkForWin()) {
      console.log(winningMessage);
      return true;
    } else if (this.checkForTie()) {
      console.log(tieMessage);
      return true;
    }
    return false;
  }

  checkForTie() {
    for (const row of [this.row1, this.row2, this.row3]) {
      for (let col = 1; col <= 3; col++) {
        if (row.get(col) === " ") {
          return false;
        }
      }
    }
    return true;
  }

  checkForWin() {
    return (
      this.checkHorizontalWin() ||
      this.checkVerticalWin() ||
      this.checkDiagonalWin()
    );
  }

  checkHorizontalWin() {
    return (
      this.checkRow(this.row1) ||
      this.checkRow(this.row2) ||
      this.checkRow(this.row3)
    );
  }

  checkRow(row) {
    if (row.get(1) === " " || row.get(2) === " " || row.get(3) === " ") {
      return false;
    }
    return row.get(1) === row.get(2) && row.get(2) === row.get(3);
  }

  checkVerticalWin() {
    return this.checkColumn(1) || this.checkColumn(2) || this.checkColumn(3);
  }

  checkColumn(column) {
    if (
      this.row1.get(column) === " " ||
      this.row2.get(column) === " " ||
      this.row3.get(column) === " "
    ) {
      return false;
    }

    return (
      this.row1.get(column) === this.row2.get(column) &&
      this.row2.get(column) === this.row3.get(column)
    );
  }

  checkDiagonalWin() {
    return this.checkLeftDiagonal() || this.checkRightDiagonal();
  }

  checkLeftDiagonal() {
    if (
      this.row1.get(1) === " " ||
      this.row2.get(2) === " " ||
      this.row3.get(3) === " "
    ) {
      return false;
    }

    return (
      this.row1.get(1) === this.row2.get(2) &&
      this.row2.get(2) === this.row3.get(3)
    );
  }

  checkRightDiagonal() {
    if (
      this.row1.get(3) === " " ||
      this.row2.get(2) === " " ||
      this.row3.get(1) === " "
    ) {
      return false;
    }

    return (
      this.row1.get(3) === this.row2.get(2) &&
      this.row2.get(2) === this.row3.get(1)
    );
  }

  print() {
    this.printColumnLabels();
    this.printRow(this.row1, "a");
    this.printRow(this.row2, "b");
    this.printRow(this.row3, "c");
  }

  printColumnLabels() {
    console.log("\n  1 2 3");
  }

  printRow(row, rowLabel) {
    const emptyArray = [];
    for (const [key, value] of row) {
      emptyArray.push(value);
    }

    const formatedRow = emptyArray.join("|");
    console.log(`${rowLabel} ${formatedRow} `);
  }

  update(row, column, playerSymbol) {
    const isSpotTaken = this.checkIfSpotIsTaken(row, column);
    if (isSpotTaken) {
      return;
    }
    if (row === "a") {
      this.row1.set(parseInt(column), playerSymbol);
    } else if (row === "b") {
      this.row2.set(parseInt(column), playerSymbol);
    } else if (row === "c") {
      this.row3.set(parseInt(column), playerSymbol);
    }
  }
}
