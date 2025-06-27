//fteching data from the server or api
console.log("Strat");
async function fetchData() {
  let post = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await post.json();
  //console.log(post);
  // console.log( data[0]);// Accessing first post only through index
  //console.log( data[0].title);// Accessing first post only through index

  //    for(let i=0;i<data.length;i++){
  //     console.log(data[i].body);
  //    }
  //got array of object as reponse
  let titles = data.map((obj) => {
    return obj.title;
  }); //Extracting titles from array of objects and creates new array of titles

  titles
  .sort()
  .reverse()
  .map((title) => {
    console.log(title);
  });
}
fetchData();
console.log("end");
