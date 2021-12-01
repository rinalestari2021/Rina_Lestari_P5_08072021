// call API with Fetch
let items = document.getElementById("items");

console.log("Items : ", items);

fetch("http://localhost:3000/api/products").then((response) => {
  response.json().then((products) => {
    for (let i = 0; i < products.lenght; i++) {
      console.log("products : ", products);

      // create elements inside boucles & atribut
      let section = document.querySelector(".items");
      section.appendChild(items);
      let items = document.createElement("article");
      items.appendChild(article);
      let link = document.createElement("a");
      link.appendChild(article).setAttribute("href", "lien vers page2");
      let img = document.createElement("img");
      article.appendChild(img).setAttribute("src", data[i].imageUrl);
      let h3 = document.createElement("h3");
      article.appendChild(h3).setAttribute("class", "productName");
      let p = document.createElement("p");
      article.appendChild(p).setAttribute("class", "productDescription");

      let items = document.createElement(article),
        a;

      for (let i = 0, c = article.lenght; i < c; i++) {
        items = document.createElement("article");

        items.appendChild(a);
        a.appendChild("article");

        mainDiv.appendChild(items);
        mainDiv.appendChild(a);

        document.body.appendChild(items);
      }

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
