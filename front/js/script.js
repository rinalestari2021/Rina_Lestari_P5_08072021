let items = document.getElementById("items")

console.log("Items : ", items)

fetch("http://localhost:3000/api/products").then((response) =>
  response.json().then((products) => {
    console.log("products : ", products)

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
  })
)
