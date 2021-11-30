// call API with fetch
document.querySelector("#items").addEventListener("input", function () {
  let url = "http://localhost:3000/api/products";

  fetch("http://localhost:3000/api/products")
    .then((Response) => response.json())
    .then((json) => {
      showElements(json);
    });

  function showElements(data) {
    data.forEach((products) => {
      let items = document.querySelector("items");
      a = document.createElement("a");
      article = document.createElement("article");
      Images.classlist.add("productImage");
      h3 = document.createElement("h3");
      h3.classlist.add("productName");
      p = document.createElement("p");
      p.classlist.add("productDescription");

      items.appendChild(a);
      a.appendChild(article);
      article.appendChild(img);
      article.appendChild(h3);
      article.appendChild(p);
    });
  }
});

fetch("http://localhost:3000/api/products").then((response) =>
  response.json().then((data) => {
    console.log(data);
    document.querySelector("products").innerHTML = data.a;
    document.querySelector("products").innerHTML = data.article;
    document.querySelector("products").innerHTML = data.productImage;
    document.querySelector("products").innerHTML = data.productName;
    document.querySelector("products").innerHTML = data.productDescrption;
  })
);

//add images
let image = document.querySelector("img");
let url = img.src;
image.id === "images";

//return fetch to get data
function getJSON(url) {
  return fetch("http://localhost:3000/api/products").then((response) =>
    response.json()
  );
}

//create class
class limitedWidthBlock {
  constructor(a, productImage, productName, productDescription) {
    this.a = a;
    this.productImage = productImage;
    this.productName = productName;
    this.productDescription = productDescription;
  }
}

let items = product01(
  "kanap01",
  "Kanap sinopé",
  "colors",
  "price",
  "description",
  "altTxt",
  true
);
let items = product02(
  "kanap02",
  "Kanap Cyllène",
  "colors",
  "price",
  "description",
  "altTxt",
  true
);
let items = product03(
  "kanap03",
  "Kanap Calicé",
  "colors",
  "price",
  "description",
  "altTxt",
  true
);
let items = product04(
  "kanap04",
  "Kanap Autonoé",
  "colors",
  "price",
  "description",
  "altTxt",
  true
);
let items = product05(
  "kanap05",
  "Kanap Eurydomé",
  "colors",
  "price",
  "description",
  "altTxt",
  true
);
let items = product06(
  "kanap06",
  "Kanap Hélycé",
  "colors",
  "price",
  "description",
  "altTxt",
  true
);
let items = product07(
  "kanap07",
  "Kanap Thyoné",
  "colors",
  "price",
  "description",
  "altTxt",
  true
);
let items = product08(
  "kanap08",
  "Kanap Orthosie",
  "colors",
  "price",
  "description",
  "altTxt",
  true
);

//===============

document.querySelector("#items").innerHTML =
  "article: ${product01.ProductImage} Kanap: ${product01.productName} Description: ${product01.productDescription}";
document.querySelector("#items").innerHTML =
  "article: ${product02.ProductImage} Kanap: ${product02.productName} Description: ${product02.productDescription}";
document.querySelector("#items").innerHTML =
  "article: ${product03.ProductImage} Kanap: ${product03.productName} Description: ${product03.productDescription}";
document.querySelector("#items").innerHTML =
  "article: ${product04.ProductImage} Kanap: ${product04.productName} Description: ${product04.productDescription}";
document.querySelector("#items").innerHTML =
  "article: ${product05.ProductImage} Kanap: ${product05.productName} Description: ${product05.productDescription}";
document.querySelector("#items").innerHTML =
  "article: ${product06.ProductImage} Kanap: ${product06.productName} Description: ${product06.productDescription}";
document.querySelector("#items").innerHTML =
  "article: ${product07.ProductImage} Kanap: ${product07.productName} Description: ${product07.productDescription}";
document.querySelector("#items").innerHTML =
  "article: ${product08.ProductImage} Kanap: ${product08.productName} Description: ${product08.productDescription}";

console.log("test");

//create new element
let article = document.createElement("article");

document.getElementById("items").appendChild(article);

article.img.src = "../images/kanap01";
article.classList.add = "product01";
article.productName = "Kanap Sinopé";
article.productDescription =
  "Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.";
