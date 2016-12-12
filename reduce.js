var numbers = [1, 56, 2, 4, 1, 99, 3, 5];
var multiplication = function (a,b){
  return a*b;
}
var sum = numbers.reduce(multiplication)

console.log(sum);
// Your code here!

// Write something that takes the above array and returns the product of all the numbers
// via multiplication
