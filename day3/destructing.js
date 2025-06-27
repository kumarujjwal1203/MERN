//TO receive data from clients 
//Destructuring
const person={
    name:"Ujjwal",
    age:21,
    address:{
        city:"Patna",
        zip:"800023",
    },
};
const{name,age}=person
console.log(name,age);
const{address,zip}=person
console.log(address,zip);

let nums=[1,2,3,4,5];
let nums1=[6,7,8,9];
console.log(nums+nums1);//give input in the form of string
const[a,b]=nums;
console.log(a,b);

let res=[...nums,nums1];//spred operator ... combining both the array
console.log(res);

let res1=[...nums,...nums1];
console.log(res1);


//Rest operator
const[e,d,...abc]=nums;

console.log(e,d);
console.log(abc);
