//call API with Fetch
let url = "http://localhost:3000/api/products";

document.querySelector(".item").addEventListener("input", function () {
  if (this.value.lenght) {
    let url = "http://localhost:3000/api/products";

    fetch(url).then((response) =>
      response
        .json()
        .then((data) => {
          console.log(data);
          let display = "<item>";
          for (let item of data) {
            items.innerHTML += "<item=${products.url}>";
          }
        })
        .catch((error) => console.log(error))
    );
  }
});

//evenement

let getArticles = document.querySelector("#item article.img > a");

/*function displayImage(src, width, height, alt) {
  var a = document.createElement("img");
  a.src = src;
  a.width = width;
  a.height = height;
  a.alt = alt;
  document.body.appendChild(a);
}
displayImage("logo.png", "Photographie d'un canapé");*/
