// Fetch get the API
fetch("http://localhost:3000/api/products").then((response) => {
  console.log(response);
  response.json().then((products) => {
    console.log("===========", products);
    for (let product of products) {
      //create elements
      let items = document.getElementById("items");
      let link = document.createElement("a");
      let article = document.createElement("article");
      let img = document.createElement("img");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");

      //create appendChild
      items.appendChild(link);
      link.appendChild(article);
      article.appendChild(img);
      article.appendChild(h3);
      article.appendChild(p);

      //create attribut
      link.setAttribute("href", "./product.html?id=" + product._id);
      article.setAttribute("src", "../images/");
      article.setAttribute("h3", "productName");
      article.setAttribute("p", "productDescription");

      //get the content

      img.src = product.imageUrl;
      img.alt = product.altTxt;
      h3.textContent = product.name;
      p.textContent = product.description;
    }
  });
});
