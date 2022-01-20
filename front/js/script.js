/**
 * Get product and cookies(donner) from local storage with fecth
 * Get DOM for container items then set create element inside
 * Set appendchild of the element then add the atribut link of the element
 * After get the content inside of each element
 * Display the result
 */

fetch("http://localhost:3000/api/products").then((response) => {
  response.json().then((products) => {
    for (let product of products) {
      let items = document.getElementById("items");
      let link = document.createElement("a");
      let article = document.createElement("article");
      let img = document.createElement("img");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");

      items.appendChild(link);
      link.appendChild(article);
      article.appendChild(img);
      article.appendChild(h3);
      article.appendChild(p);

      link.setAttribute("href", "./product.html?id=" + product._id);
      article.setAttribute("src", "../images/");
      article.setAttribute("h3", "productName");
      article.setAttribute("p", "productDescription");

      img.src = product.imageUrl;
      img.alt = product.altTxt;
      h3.textContent = product.name;
      p.textContent = product.description;
    }
  });
});
