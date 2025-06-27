//comments
/* Multiple
lines
comments

Javascript hight level programming language
Interpreted= line by line execution
dynamic, single threaded, synchronous
*/

//variable= store data in memory: location in memory :name given to memory location

// declaration  variable = let,var,const

// let college="lpu";
// college="Lovely Professional University"  // we can't redeclar the same variable
// console.log(college);

// var batch="2022";
// var batch=9;  // we can redeclare and reassign the same variable
// console.log(batch);

// const training="Mern Stack Developer";
// training="Full Stack Developer";  // we can't reassign the same variable can't change its value
// console.log(training);

// data types: string, number, boolean, null, undefined, object, symbol

// let student_name="Ujjwal";  //string
// let student_age=21;  //Number
// let percentage=90;   //Number
// let is_graduated=false;  //Boolean
// let course_details={
//     course_name:"Mern Stack Developer",
//     course_duration:2,
//     course_instructor:"John Doe"
// }  //Object
// let s=Symbol("course_id");
// console.log(typeof s);  //symbol
// let t= BigInt(1000000000000000000000000000000000000000);
// console.log(typeof t);  //bigint

// console.log(typeof student_name);
// console.log(typeof student_age);
// console.log(typeof percentage);
// console.log(typeof is_graduated);
// console.log(typeof course_details)

// var marks;
// console.log(typeof marks);  //undefined);

// let a= null;
// console.log(typeof a);  //object

//Functions: block of code to perform a specific task

// function add(){
//     return 1+2
// }

// //Function expression
// let sub=function(){
//     return 4-2
// }

// console.log(typeof add);
// console.log(add());
// console.log(typeof sub);
// console.log(sub());

//operators:
// arithmetic operators: +,-,*,/,%
// assignment operators: =,+=,-=,*=,/=,%=
// comparison operators: >, <, >=, <=, ==, ===,!=,!==
// ternary operator: condition? true_value : false_value
// bitwise operators: &, |, ^, ~, <<, >>
// unary operators: ++, --,!, +, -

//arithmetic operators: +,-,*,/,%
// let z=561;
// let y=5;
// console.log(z+y, z-y, z*y, z/y, z%y);  //100
// console.log(parseInt(z/y));// explicit type conversion
// console.log(Math.ceil(11.25));
// console.log(Math.floor(11.25));
// console.log(Math.pow(2,3));

//assignment operators: =,+=,-=,*=,/=,%=

// let m="helli";
// let n= 200;
// let v="11";
// console.log(m+=n, m-=n, m*=n, m/=n, m%=n);
// console.log(n+=v, n-=v, n*=v, n/=v, n%=v);
// console.log("Mern".repeat(2));

//if else
// let a="15aaa";
// if(isNaN(a)){
//     console.log("inavlid input");
// }
// else if(a%3===0 && a%5===0 ){
//     console.log("fizzbuzz");
// }else if(a%3===0){
//     console.log("Fizz");
// }
// else if(a%5===0){
//     console.log(buzz)
// }
// else{
//     console.log("Not dividible");
// }

//For Loop
// for (let j = 1; j <= 20; j++) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(j + "*" + i + "=" + j * i);
//   }
//   console.log(" ");
// }

//While Loop
// let su=true;
// let g=0;
// while(su){
//     g++;
//     console.log("success");
//     if(g===10){
//         su=false;
//         console.log("success false");
//     }
// }



//Function
function add(a=4,b=5,){
    return a+b+c;

}
console.log(add());


//setInterval Function
setInterval(function(){
    console.log("Hello");
},1000);//print hello every oment