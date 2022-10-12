// Print odd numbers between 1 to 20 in a horizontal line.

let line = "";
for (let a = 1; a <= 20; a++) {
  if (a % 2 != 0) {
    line = line + a + " ";
  }
}
console.log(line);