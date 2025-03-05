const boardValues = new Map();
boardValues.set(1, " ");
boardValues.set(2, " ");
boardValues.set(3, " ");

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
