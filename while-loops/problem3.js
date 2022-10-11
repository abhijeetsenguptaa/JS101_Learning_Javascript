// Print the sum of all the multiples of 3 from 0 to the given limit

let a = 0;
let sum = 0;

while (a <= 30) {
  if (a % 3 == 0) {
    sum = sum + a;
  }
  a++;
}
console.log(sum);