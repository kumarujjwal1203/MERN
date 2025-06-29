fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    const productList = document.getElementById("productList");

    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
      `;

      productList.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error loading products:", error);
  });
