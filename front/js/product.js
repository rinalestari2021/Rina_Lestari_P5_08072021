// Fetch
function fetchProducts(getId) {
  fetch(`http://localhost:3000/api/products/${getId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const imgNode = document.querySelector("div.item__img");
      const img = document.createElement("img");
      img.setAttribute("src", data.imageUrl);
      img.setAttribute("alt", data.altTxt);
      imgNode.appendChild(img);
      document.getElementById(`title`).textContent = data.name;
      document.getElementById(`price`).textContent = data.price;
      document.getElementById(`description`).textContent = data.description;
      //create color
      const colors = document.getElementById("colors");
      data.colors.forEach((color) => {
        var option = document.createElement("option");
        option.setAttribute("value", color);
        option.innerText = color;
        colors.appendChild(option);
      });
    });
}
function listen() {
  //select color
  let colors = document.querySelector("#colors");
  colors.addEventListener("click", {
    capture: true,
    once: true,
    passive: true,
  });

  //input quantity
  var input = document.querySelector("#quantity");
  var min = Number(input.getAttribute("min"));
  var max = Number(input.getAttribute("max"));

  if (input !== undefined && input !== null) {
    function quantity(e) {
      var current = Number(input.value);
      var newval = current - itemQuantity;
      if (newval < min) {
        newval = min;
      } else if (newval > max) {
        newval = max;
      }
      input.value = number(newval);
      e.preventDefault();
    }
  }

  // event submit button
  const addToCart = document.querySelector("input");

  button.addEventListener("click", addToCart);
}

function main() {
  var getId = new URLSearchParams(window.location.search).get("id");
  fetchProducts(getId);
  listen();
}

main();
