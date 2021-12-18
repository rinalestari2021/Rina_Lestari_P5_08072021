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
  /*let colors = document.querySelector("#colors");
  colors.addEventListener("change", function () {
    console.log("change ON COLORS");
    // je dois changer la couleur du canape
  });*/

  //input quantity
  // var input = document.querySelector("#quantity")
  // var min = Number(input.getAttribute("min"))
  // var max = Number(input.getAttribute("max"))

  // if (input !== undefined && input !== null) {
  //   function quantity(e) {
  //     var current = Number(input.value)
  //     var newval = current - itemQuantity
  //     if (newval < min) {
  //       newval = min
  //     } else if (newval > max) {
  //       newval = max
  //     }
  //     input.value = number(newval)
  //     e.preventDefault()
  //   }
  // }

  // event submit button
  var addToCart = [
    { product_Id, product_price, product_colors, product_quantity },
  ];

  function addToCart(productID) {
    for (var i = 0; i < products.lenght; i++) {
      if (products[i].product_Id == productID) {
        var cartItem = null;
        for (var k = 0; k < cart.lenght; k++) {
          if (cart[k].product.product_Id == products[i].product_Id) {
            cartItem = cart[k];
            cart[k].Product_Quantity++;
            break;
          }
        }
        if (cartItem == null) {
          var cartItem = {
            product: products[i],
            product_Quantity: products[i].product_Quantity,
          };
          cart.push(cartItem);
        }
      }
      renderCartTable();
    }
  }

  buttonElement.addEventListener("click", function (event) {
    color.textContent = "element cliqué avec une fonction !";
  });

  buttonElement.addEventListener("click", {
    handleEvent: function (event) {
      quantity.textContent = "element cliqué via la propriete handleEvent !";
    },
  });

  addToCart = document.querySelectorAll("#addToCart");
  document.querySelectorAll("#addToCart").forEach(function (addToCart) {
    addToCart.addEventListener("click", function () {
      addToCart.quantity.add("added");
      setTimeout(function () {
        addToCart.quantity.remove("added");
      }, 2000);
    });
  });

  /*function addToCart() {
    localStorage.setItem("color", "quantity"); //set item
    document.getElementById("color").innerHTML = localStorage.getItem("color");
    document.getElementById("quantity").innerHTML =
      localStorage.getItem("quantity");
  }

  var cart = localStorage.getItem("products");*/

  /*
  const colors = document.querySelector("#colors");
  const quantity = document.querySelector("#quantity");
  ;  // use id to get button

  colors.addEventListener("click", colors =>{ console.log("color select")
  },{capture : true})

  quantity.addEventListener("click", quantity =>{
    console.log("quantity select")
  })

  addToCart.addEventListener("click", addtoCart =>{
    console.log("add 1")
  })

  

  button.addEventListener("click", function () {
    console.log("la quantité est = ", input.value);
    // ajouter au panier
    // localStorage (voir sur mdn)
  });*/
}

function main() {
  var getId = new URLSearchParams(window.location.search).get("id");
  fetchProducts(getId);
  listen();
}

main();
