let root = document.getElementById("root");

async function fetchData() {
  let reponse = await fetch("https://jsonplaceholder.typicode.com/photos");
  console.log(reponse);
  const data = await reponse.json();
  console.log(data[0]);
  //Extracting only titles
  const titles = data.map((item) => item.title);
  const url = data.map((item) => item.url);
  console.log(titles);
  console.log(url);

  //Displaying the titles and urls in a HTNL
  //   titles.forEach((title, index) => {
  //     const titleElement = document.createElement("h2");
  //     titleElement.textContent = title;
  //     root.appendChild(titleElement);

  //     const imageElemnet = document.createElement("img");
  //     imageElemnet.src = url[index];
  //     imageElemnet.alt = title;
  //     imageElemnet.style.width = "200px";
  //     imageElemnet.style.height = "200px";
  //     root.appendChild(imageElemnet);
  //   });

  for (let i = 0; i < data.length; i++) {
    let h1 = document.createElement("h1");
    h1.textContent = data[i].title;
    root.appendChild(h1);
  }
}
fetchData();
