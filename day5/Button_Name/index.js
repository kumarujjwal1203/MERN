let root = document.getElementById("root");
let button = document.createElement("button");

button.textContent = "Click Me";

let message = document.createElement("p");
root.appendChild(message);
root.appendChild(button);
message.textContent = "Press the button!";
button.style.backgroundColor = "yellow";

let isLoggesd = true;
//if we press on button the h1 tag changes text to "Log Out" and vice versa

button.onclick = function () {
  if (isLoggesd) {
    button.textContent = "Log Out";
    message.textContent = "You have logged out!";
    message.style.color = "red";
    button.style.backgroundColor = "red";
    isLoggesd = false;
  } else {
    button.textContent = "Log In";
    message.textContent = "You have logged in!";
    message.style.color = "green";
    button.style.backgroundColor = "green";
    isLoggesd = true;
  }
};

//Insted of this we can also use Ternary operator

// let isLoggesd = true;

// button.onclick = function () {
//   isLoggesd = !isLoggesd;
//   button.textContent = isLoggesd ? "Log Out" : "Log In";
// };

// button.onclick = function () {
//   alert("Button Clicked!");
// };

// button.onclick = function () {
//   alert(" second Button Clicked!");
// };

// //if we use same onclick function, it will work for only one alert that one is second one
// // if we use addEventListener, it will work for multiple alerts
// button.addEventListener("click", function () {
//   alert("third Button Clicked2!");
// });

// button.addEventListener("click", function () {
//   alert("fourth Button Clicked2!");
// });
// button.onclick = function () {
//   alert(" last Button Clicked!");
// };
