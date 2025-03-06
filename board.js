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
