// chercher le contenu du panier dans le localStorage
class cart {
  constructor() {
    let cart = localStorage.getItem("cart");
    if (cart == null) {
      this.cart = [];
    } else {
      this.cart = JSON.parse(cart);
    }
  }
  saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  addCart(product) {
    let foundProduct = this.cart.find((p) => p.ID == product.ID);
    if (foundProduct != undefined) {
      foundProduct.quantityChoice++;
    } else {
      product.quantity = 1;
      cart.push(product);
    }
    saveCart(this.cart);
  }

  removeFromCart(product) {
    this.cart = this.cart.filter((p) => p.id != product.ID);
    this.save();
  }

  changeQuantity(product, quantity) {
    let foundProduct = this.cart.find((p) => p.id == product.id);
    if (foundProduct != undefined) {
      foundProduct.quantity += quantity;
      if (foundProduct.quantity <= 0) {
        remove(foundProduct);
      } else {
        this.save();
      }
    }
  }

  getNumberProduct() {
    let number = 0;
    for (let product of this.cart) {
      number += product.quantity;
    }
    return number;
  }

  getTotalPrice() {
    let cart = getCart();
    let total = 0;
    for (let product of this.cart) {
      totalQuantity += product.quantity * product.price;
    }
    return total;
  }

  displayCart() {
    let cartItems = localStorage.getItem("cart_items");
    cartItems = JSON.parse(cartItems);
    this.cart = document.querySelector("cart_items");

    if (productQuantity && productPrice) {
      this.cart.innerHTML = "";
      Object.values(cartItems).map((item) => {
        this.cart.innerHTML += `
        <article class="cart__item" data-id=${product.ID} data-color="{product-color}">
                <div class="cart__item__img">
                  <img src="../images/${product.tag} alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${product.title}</h2>
                    <p>${product.color}</p>
                    <p>${product.price} €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>${product.quantity} : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
        </article>`;
      });
    }
  }
}

/*
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
});*/

// envoyé la commande au serveur
// url de l'api : http://localhost:3000/api/products/order

// si la command est validé, rediriger l'utilisateur vers la page confirmation
