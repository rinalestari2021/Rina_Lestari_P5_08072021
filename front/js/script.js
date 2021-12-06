// call API with Fetch
let items = document.getElementById("items");

console.log("items : ", items);

fetch("http://localhost:3000/api/products").then((response) => {
  response.json().then((data) => {
    console.log(data);
    for (let items of data) {
      items.innerHTML += "<img src=${products.url}>";
    }
  });

  // create elements inside boucles & attribut
  let items = document.querySelector("#items");
  let article = document.createElement("article");
  items.appendChild(article);
  let link = document.createElement("a");
  article.appendChild(link).setAttribute("href", "./product.html?id=42");
  let img = document.createElement("img");
  article.appendChild(img).setAttribute("src", "/back/images");
  let h3 = document.createElement("h3");
  article.appendChild(h3).setAttribute("class", "productName");
  let p = document.createElement("p");
  article.appendChild(p).setAttribute("class", "productDescription");

  //adding tittle of attribut
  document.querySelectorAll("a").innerHTML = products.href;
  document.querySelectorAll("img").innerHTML = products.imageURL;
  document.querySelectorAll("h3").innerHTML = products.name;
  document.querySelectorAll("p").innerHTML = products.description;

  //tableau products

  /*let products = [
      "kanap01",
      "kanap02",
      "kanap03",
      "kanap04",
      "kanap05",
      "kanap06",
      "kanap07",
      "kanap08",
    ];
    products.forEach((item, index) => {
      console.log(products);
      console.log(index);
    });

    products.forEach((item) => console.log(items));*/

  //parcourir le tableau products
  // pour chaque product
  // créer un élément <a>
  // créer un élément <article>
  // créer un élément <img>
  // créer un élément <h3>
  // créer un élément <p>
  // mettre l'<article> dans le <a>
  // mettre l'<img> dans le <article>
  // mettre l'<h3> dans le <article>
  // mettre l'<p> dans le <article>
  // definir les attributs des éléments

  // mettre le <a> dans items
  let elt = document.getElementById("item");
  elt.innerHTML = "<a href>";
});

function images() {
  var img = document.getElementsByClassName(img);
  img.style.visibility = visible ? "visible" : "hidden";
}
