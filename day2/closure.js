//  function greet(){
//     let name="Ujjwal";
//     return function(){
//         console.log("Hi "+name);
//     };
//  }
//  let=sayHi=greet();
// sayHi();

function restaurant() {
  let order = "a burger";
  return function waiter() {
    console.log(order + " delivered");
  };
}
let res = restaurant();
res();
