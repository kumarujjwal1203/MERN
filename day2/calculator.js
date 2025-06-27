//Write a program for calculator using High order Functions in JavaScript.

//High Order functio a function either that accept functions as arguments, or that returns a function.
const add = (a, b) => {
  console.log(a + b);
};
const sub = (a, b) => {
  console.log(a - b);
};

const mul = (a, b) => {
  console.log(a * b);
};

const div = (a, b) => {
  console.log(a / b);
};

function calculator(add, sub, mul, div, a, b) {
  add(a, b);
  sub(a, b);
  mul(a, b);
  div(a, b);
}
calculator(add, sub, mul, div, 9, 7);
