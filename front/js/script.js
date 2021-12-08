// call API with Fetch
let items = document.getElementById("items");

console.log("items : ", items);

fetch("http://localhost:3000/api/products").then((response) => {
  console.log(response);
  response.json().then((products) => {
    console.log("===========", products);
    for (let product of products) {
      //create elements
      let article = document.createElement("article");
      let link = document.createElement("a");
      let img = document.createElement("img");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");

      //create appendChild
      items.appendChild(article);
      items.appendChild(link);
      article.appendChild(img);
      article.appendChild(h3);
      article.appendChild(p);

      //create attribut
      items.setAttribute("href", "./product.html?id=42");
      article.setAttribute("src", "../images/");
      article.setAttribute("class", "productName");
      article.setAttribute("class", "productDescription");

      //get the content
      link.textContent = product.href;
      img.src = product.imageUrl;
      img.alt = product.altTxt;
      h3.textContent = product.name;
      p.textContent = product.description;

      //insert elements HTML
      let products = document.getElementById("items");
      product.innerHTML =
        "<a href></a><article><img src><><h3></h3><p></p></article>";
      img.innerHTML = "Image Element Added";
      h3.innerHTML = "Name";
      p.innerHTML = "Description";
    }
  });
});
