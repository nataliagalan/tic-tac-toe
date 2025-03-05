export class Board {
  constructor(row1, row2, row3) {
    this.row1 = row1;
    this.row2 = row2;
    this.row3 = row3;
  }

  print() {}

  printRow0() {
    console.log("ttttest");
  }
}

// Draft algorithm to print the board
// print first line (2 empty spaces and 1, empty space, 2 empty space, 3, empty space, new line)
// iterate through a
// print a, then print empty space
// print the first key-value pair in a
// then print a pipe |
// print the second key-value pair in a
// then print a pipe |
// print the third key-value pair in a
// then print a new line
// iterate through b
// repeat steps for a, and c
