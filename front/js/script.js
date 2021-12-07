// call API with Fetch
let items = document.getElementById("items");

console.log("items : ", items);

fetch("http://localhost:3000/api/products").then((response) => {
  console.log(response);
  response.json().then((products) => {
    console.log("===========", products);
    for (let product of products) {
      let article = document.createElement("article");
      items.appendChild(article);

      let link = document.createElement("a");

      items.appendChild(link);
      items.setAttribute("href", "./product.html?id=42");

      let img = document.createElement("img");

      article
        .appendChild(img)
        .setAttribute("src", "http://localhost:3000/images/product01.jpg");

      let h3 = document.createElement("h3");
      article.appendChild(h3).setAttribute("class", "productName");

      let p = document.createElement("p");
      p.textContent = product.Description;
      article.appendChild(p).setAttribute("class", "productDescription");
    }
  });
});
