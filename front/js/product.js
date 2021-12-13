//get URL
/*var searchUrl = new URLSearchParams(window.location.search);
var getId = searchUrl.get("id");*/

function getParameter(_id) {
  let parameters = new URLSearchParams(window.location.search);
  return parameters.get(products._id);
}

// async
const fetchProducts = async () => {
  products = await fetch(
    "http://localhost:3000/api/products/${products._id}"
  ).then(res.json());

  console.log(product);

  //create elements
  let img = document.createElement("img");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let option = document.createElement("option");

  //create appendChild
  article.appendChild(img);
  article.appendChild(h1);
  article.appendChild(p);
  option.appendChild(colors);

  // get product
  document.getElementsByClassName("img").src = product.imageUrl;
  document.getElementsById("img").alt = product.altTxt;
  document.getElementsById("title").textContent = product.name;
  document.getElementsById("price").textContent = product.price;
  document.getElementsById("description").textContent = product.description;
  document.getElementsById("colors").textContent = product.colors;

  link.href = "http://localhost:3000/api/products/${products._id}";
  img.src = product.imageUrl;
  img.alt = product.altTxt;
  title.textContent = product.name;
  price.textContent = product.price;
  description.textContent = product.description;
  color.value = product.colors;
  color.textContent = colors;

  //event change on option
  document.addEventListener(
    "DOMContentload",
    function () {
      document.querySelector('option[name="color_select"]').onchange =
        changeEventHandler;
    },
    false
  );

  function changechangeEventHandler(event) {
    if (!event.target.value);
    else event.target.value + "colors.";
  }

  //event on click
  const selectColors = document.querySelector(".color-select");
  const value = document.getElementById("#colors");
  const response = document.querySelector("option");

  selectColors.addEventListener("click", () => {
    selectColors.classList.toggle("colors-clicked");
  });
};
