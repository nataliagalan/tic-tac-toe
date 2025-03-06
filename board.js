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

  checkForTieOrWin() {
    if (this.checkForWin()) {
      console.log("Player la bla bla wins! 🥳");
      return true;
    }
    // else if (this.checkForTie()) {
    //   console.log("It's a tie!");
    // }
  }

  checkForWin() {
    return this.checkHorizontalWin();
    // ||
    // this.checkVerticalWin() ||
    // this.checkDiagonalWin()
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

  // Draft algorithm to check for win or tie
  // horizontal win
  // if a.1 === a.2 && a.3 === a.2
  // if b.1 === b.2 && b.3 === b.2
  // if c.1 === c.2 && c.3 === c.2

  // vertical win
  // if a.1 === b.1 && c.1 === b.1
  // if a.2 === b.2 && c.2 === b.2
  // if a.3 === b.3 && c.3 === b.3

  // diagonal win
  // if a.1 === b.2 && c.3 === b.2
  // if c.1 === b.2 && a.3 === b.2

  print() {
    this.printColumnLabels();
    this.printRow(this.row1, "a");
    this.printRow(this.row2, "b");
    this.printRow(this.row3, "c");
  }

  printColumnLabels() {
    console.log("  1 2 3");
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
    if (row === "a") {
      this.row1.set(parseInt(column), playerSymbol);
    } else if (row === "b") {
      this.row2.set(parseInt(column), playerSymbol);
    } else if (row === "c") {
      this.row3.set(parseInt(column), playerSymbol);
    }
  }
}
