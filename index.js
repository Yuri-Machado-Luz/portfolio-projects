// Random code for extensios testing

console.log("Hello, World!");
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("User"));

function add(a, b) {
  return a + b;
}

function longThing() {
  // This is a long function to test something
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    sum += i;
  }
  return sum;
}