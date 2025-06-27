// let arr=[]
// console.log(typeof arr);
// arr.push(2);
// arr.push(3);
// arr.push(4);
// arr.push(5);
// arr.push("ujjwal",9,8,7);
// arr.push({laptop:"hp"});
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.length);
// arr.unshift("kumar");
// console.log(arr);
// console.log(arr.indexOf(4));
// let arr2=[6,5,4];
// arr2.splice(0,3,9,8);
// console.log(arr2);

// console.log(arr2.join("."));
// console.log(arr2.sort());
// console.log(arr2.reverse());



// let d=[1,2,3,4,5];
// const j=(num)=>{
//     return num+1;
// }
// let e=d.map(j);
// console.log(e);

let arr3=[1,2,3,4,5,6];
let res=arr3.map(function(num){
    return num+1;
});
console.log(res);



let arr4=[1,2,3,4,5,6];
let res1=arr3.filter(function(num){
    return num%2===0;
});
console.log(res1);
