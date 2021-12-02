// call API with Fetch
let items = document.getElementById("items");

console.log("Items : ", items);

fetch("http://localhost:3000/api/products").then((response) => {
  response.json().then((json) => {
    for (let i = 0; i < data.lenght; i++) {
      console.log(data);

      // create elements inside boucles & atribut
      let section = document.querySelector(".items");
      section.appendChild(link).setAttribute("href", "lien vers page2");
      let items = document.createElement("article");
      items.appendChild(article);
      let link = document.createElement("a");
      link.appendChild(article);
      let img = document.createElement("img");
      article.appendChild(img).setAttribute("src", data[i].imageUrl);
      let h3 = document.createElement("h3");
      article.appendChild(h3).setAttribute("class", "productName");
      let p = document.createElement("p");
      article.appendChild(p).setAttribute("class", "productDescription");

      //adding tittle of attribut
      document.querySelectorAll("h3")[i].innerHTML = data[i].name;
      document.querySelectorAll("p")[i].innerHTML = data[i].description;

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
    }
  });
});
