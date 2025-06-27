let Jsobj={
    name:"Ujjwal",
};
let json=JSON.stringify(Jsobj);// convert object to JSON String // while sending data to server
console.log(json);

let js=JSON.parse(json);//JSON string to objet  //while recieving data from server
console.log(typeof js);