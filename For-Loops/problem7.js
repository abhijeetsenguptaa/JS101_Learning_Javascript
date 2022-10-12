let sum = 0;
for (a = 1; a <= 15; a++) {
  if (a % 2 == 0 || a % 5 == 0) {
    sum += a;
  }
}
console.log(sum);