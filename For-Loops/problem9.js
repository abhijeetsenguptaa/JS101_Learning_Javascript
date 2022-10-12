let sum = 0;
let count = 0;
for (a = 1; a <= 50; a++) {
  if (a % 2 == 0) {
    sum += a;
    count++;

  }
}
console.log("Total sum of the even numbers",sum);
console.log("Total count of the even numbers",count);
console.log("Average is",sum / count);