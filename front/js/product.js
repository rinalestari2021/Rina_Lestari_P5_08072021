// Fetch
let productId = new URLSearchParams(window.location.search).get("id");
const addBtn = document.querySelector("#addToCart");

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

addBtn.addEventListener("click", () => {
  const colorChoice = document.getElementById("colors").value;
  const quantityChoice = document.querySelector("#quantity").value;
  let cart = [];

  //get the key word for storage cart, if the key is empty, declare it empty
  let check = localStorage.getItem("cart");
  if (check == null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
  }

  //create object product
  if (colorChoice !== "" && quantityChoice > 0) {
    let product = {
      id: productId,
      color: colorChoice,
      quantity: quantityChoice,
    };

    if (cart.length === 0) {
      cart.push(product);
    } else {
      let check = 0;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id && cart[i].color === product.color) {
          cart[i].quantity = product.quantity;
          check = 1;
        }
      }
      if (check === 0) {
        cart.push(product);
      }
    }

    //add object product inside the tableau basket then add into locale storage

    localStorage.setItem("cart", JSON.stringify(cart));
  }
});

fetchProducts(productId);

/*function listen() {
  
  // ajouter au panier
  // localStorage (voir sur mdn)
}

function main() {
  var getId = new URLSearchParams(window.location.search).get("id");
  fetchProducts(getId);
  listen();
}

main();*/
