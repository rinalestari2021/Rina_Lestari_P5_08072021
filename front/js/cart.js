//get items from local storage
function getCard() {
  let check = localStorage.getItem("cart");
  if (check == null) {
    return [];
  } else {
    return JSON.parse(check);
  }
}
let cart = getCard();

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// add product into cart
function addCart(product) {
  let foundProduct = this.cart.find((p) => p.id == product.id);
  if (foundProduct != undefined) {
    foundProduct.quantityChoice++;
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  saveCart(cart);
}

//remove items from cart
function removeFromCart(product) {
  for (var i in cart) {
    if (cart[i].p.id === product.id) {
      cart[i].count--;

      if (cart[i].count === 0) {
        cart.splice(i, 1); //remove item from the array
      }
      break;
    }
  }
  cart = cart.filter((p) => p.id != product.id);
  saveCart(cart);
}

//change quantity of items
function changeQuantity(product, quantity) {
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

//total of product
function getNumberProduct() {
  let number = 0;
  for (let product of this.cart) {
    Number += product.quantity;
  }
  return Number;
}

//total of price
function gettotalPrice(cart) {
  const totalDiv = document.querySelector("#totalPrice");

  let total = 0;
  for (let product of cart) {
    total += product.quantity * product.price;
  }
  totalDiv.innerText = total;
}

//to show the result of item selected
function displayCart() {
  let cartItems = document.getElementById("cart__items");
  cartItems.innerHTML = "";
  cart.forEach((product) => {
    console.log(product);
    cartItems.innerHTML += `
        <article class="cart__item" data-id=${product.getId} data-color="${product.color}">
                <div class="cart__item__img">
                  <img src=${product.imageUrl} alt="Photographie d'un canapé">
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
displayCart(cart);

//sum total
function getTotalPrice() {
  let total = 0;
  for (let i = 0; i < cart.lenght; i += 1) {
    total += cart[i].price * cart[i].quantity;
  }
  return total.toFixed(2);
}

// gérer les problemes d'affichage

// afficher le total au bon endroit
// afficher le nombre total de produit

// prevoir la suppression de product.

// prevoir la modofication d'une quantité
// => la quantité totale change
// => le prix totla change aussi

// au click sur le button
// envoyé la commande au serveur
// url de l'api : http://localhost:3000/api/products/order
// afficher des erreurs si il y en as

// si la command est validé, rediriger l'utilisateur vers la page confirmation

// afficher le numero de commande dans la page de confirmation
