// function clickme() {
//   alert("Button clicked!");
// }

// let root = document.getElementById("root");

// console.log(root);
// let h1 = document.createElement("h1");
// h1.textContent = "Hello World!";
// root.appendChild(h1);

// //amother method
// // root.innerHTML = `h1>Hello World!</h1>`;

// let button = document.createElement("button");
// button.textContent = "Click Me";
// root.appendChild(button);
// button.addEventListener("click", () => {
//   let p = document.createElement("p");

//   p.textContent = "This is a paragraph";
//   button.appendChild(p);
// });

//Guess The number Game
let root = document.getElementById("root");
let h1 = document.createElement("h1");
h1.textContent = "Guess the Number ";
root.appendChild(h1);

let input = document.createElement("input");
input.type = "number";
input.placeholder = "Enter your number between 1 and 10";
input.style.display = "block";
root.appendChild(input);

let button = document.createElement("button");
button.textContent = "Guess";
button.style.display = "block";
root.appendChild(button);

let result = document.createElement("p");
result.style.display = "block";
result.style.color = "red";
result.style.fontSize = "20px";
root.appendChild(result);

let randomNumber = Math.floor(Math.random() * 10) + 1;

button.addEventListener("click", function () {
  let guessNumber = parseInt(input.value);
  if (isNaN(guessNumber)) {
    result.textContent = "Please enter a valid number.";
  } else if (guessNumber < randomNumber) {
    result.textContent = "Too low!";
  } else if (guessNumber > randomNumber) {
    result.textContent = "Too high!";
  } else {
    result.textContent = "Congratulations! You guessed it right!";
  }
  input.value = "";
  randomNumber = Math.floor(Math.random() * 10) + 1;
  result.style.color = "red";
  result.style.fontSize = "20px";
});
