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
  let Storage = "http://localhost:3000/api/products/order";

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

    //add object product inside the tableau basket then add into locale storage
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  var obj = {};

  //add to cart
  obj.addItemToCart = function (productId, colorChoice, quantityChoice) {
    for (var item in cart) {
      if (cart[item].productId === product) {
        cart[item].quantityChoice++;
        saveCart();
        return;
      }
    }
    var item = new Item(productId, colorChoice, quantityChoice);
    cart.push(item);
    saveCart();
  };

  // set quantity from item
  obj.setQuantityForItem = function (productId, quantityChoice) {
    for (var i in cart) {
      if (cart[i].productId === productId) {
        cart[i].count = count;
        break;
      }
    }
  };

  //remove items from cart
  obj.removeItemFromCart = function (productId) {
    for (var item in cart) {
      if (cart[item].productId === productId) {
        cart[item].quantityChoice--;
        if (cart[item].quantityChoice === 0) {
          cart.splice(item, 1);
        }
        break;
      }
    }
    saveCart();
  };

  // clear cart
  obj.clearcart = function () {
    cart = [];
    saveCart();
  };

  //quantity cart
  obj.totalCount = function () {
    var totalquantityChoice = 0;
    for (var item in cart) {
      totalquantityChoice += cart[item].count;
    }
    return totalquantityChoice;
  };

  //total cart
  obj.totalCart = function () {
    var totalCart = 0;
    for (var item in cart) {
      totalCart += cart[item].price * cart[item].quantityChoice;
    }
    return Number(totalCart.toFixed(2));
  };

  // list cart
  obj.listCart = function () {
    var cartCopy = [];
    for (i in cart) {
      item = cart[i];
      itemCopy = {};
      for (p in item) {
        itemCopy[p] = item[p];
      }
      itemCopy.total = Number(item.price * item.quantityChoice).toFixed(2);
      cartCopy.push(itemCopy);
    }
    return cartCopy;
  };

  //add item
  function addItemToCart(productId, colorChoice, quantityChoice) {
    var item = document.createElement("div");
    item.classList.add("item");
    var itemContent = document.getElementsByClassName("item_content")[0];
    var itemTitle = itemContent.getElementsByClassName(
      "item__content__titlePrice"
    );
    for (var i = 0; i < itemTitle.length; i++) {
      if (itemTitle[i].innerText == price) {
        alert("This item already added to the cart");
        return;
      }
    }
  }

  //click btn addtocart
  function listen() {
    document
      .getElementsByClassName("item__content__addButton")[0]
      .addEventListener("click", addToCartClicked);
  }

  function addToCartClicked() {
    alert("Thank you for your order");
    var itemContent = document.getElementsByClassName("item_content")[0];
    while (itemContent.hasChildNodes()) {
      itemContent.removeChild(itemContent.firstChild);
    }
    updateCartTotal();
  }
});

fetchProducts(productId);

/*
function listen() {
  
  // ajouter au panier
  // localStorage (voir sur mdn)
}

function main() {
  var getId = new URLSearchParams(window.location.search).get("id");
  fetchProducts(getId);
  listen();
}

main();
*/
