
async function fetchData() {

    const req=await fetch('https://jsonplaceholder.typicode.com/todos/1')
const data=await req.json();//json=javascript object notation
console.log(data);

}fetchData();