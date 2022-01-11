// Fetch to get the product
let productId = new URLSearchParams(window.location.search).get("id");
const addBtn = document.querySelector("#addToCart"); //adding button on click event

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

// action for event on click for elements as it written
addBtn.addEventListener("click", () => {
  const colorChoice = document.getElementById("colors").value;
  const quantityChoice = document.querySelector("#quantity").value;
  const priceChoice = document.querySelector("#price").innerText;
  const imageChoice = document.querySelector(".item__img img").src;
  const productName = document.querySelector("#title").innerText;

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
      title: productName, //add product name
      color: colorChoice,
      quantity: Number(quantityChoice),
      imageUrl: imageChoice, // add link of image
      price: Number(priceChoice), // add price
    };

    //add object product inside the tableau basket then add into locale storage
    //push product inside empty cart,
    //if the same product already exist in cart, add it but change only in quantity of the product
    if (cart.length === 0) {
      cart.push(product);
    } else {
      let check = 0;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id && cart[i].color === product.color) {
          cart[i].quantity += product.quantity;
          check = 1;
        }
      }
      if (check === 0) {
        cart.push(product);
      }
    }

    //alert for item adde into cart
    const popupConf = () => {
      if (window.confirm(`Ajouter au panier`)) {
        window.location.href = "cart.html";
      }
      window.location.href = "cart.html";
    };
    popupConf();
    console.log({ cart });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
});

fetchProducts(productId); //push product as reply
