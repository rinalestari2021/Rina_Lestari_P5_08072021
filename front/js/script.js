/**
 * Get product and cookies(donner) from local storage with fecth(1)
 * Get DOM for container items then set create element inside(2)
 * Set appendchild of the element then add the atribut link of the element(3 & 4)
 * After get the content inside of each element(4)
 * Display the result
 */
/**fetch(1)*/
fetch("http://localhost:3000/api/products").then((response) => {
  console.log(response);
  response.json().then((products) => {
    console.log("===========", products);
    for (let product of products) {
      /**create elements(2)*/
      let items = document.getElementById("items");
      let link = document.createElement("a");
      let article = document.createElement("article");
      let img = document.createElement("img");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");

      /**create appendChild(3)*/
      items.appendChild(link);
      link.appendChild(article);
      article.appendChild(img);
      article.appendChild(h3);
      article.appendChild(p);

      /**create attribut(4)*/
      link.setAttribute("href", "./product.html?id=" + product._id);
      article.setAttribute("src", "../images/");
      article.setAttribute("h3", "productName");
      article.setAttribute("p", "productDescription");

      /**get the content(5)*/
      img.src = product.imageUrl;
      img.alt = product.altTxt;
      h3.textContent = product.name;
      p.textContent = product.description;
    }
  });
});
