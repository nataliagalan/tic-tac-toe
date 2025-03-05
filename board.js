const boardValues = new Map();
boardValues.set(1, "x");
boardValues.set(2, "x");
boardValues.set(3, "x");

export class Board {
  constructor() {
    this.row1 = boardValues;
    this.row2 = boardValues;
    this.row3 = boardValues;
  }

  print() {
    this.printHorizontalLabels();
    this.printRow(this.row1, "a");
    this.printRow(this.row2, "b");
    this.printRow(this.row3, "c");
  }

  printHorizontalLabels() {
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
}
