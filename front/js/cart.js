// chercher le contenu du panier dans le localStorage
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

class Cart {
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

  removeFromCart(product) {
    this.cart = this.cart.filter((p) => p.id != product.id);
    this.saveCart();
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
      console.log("test");
    }
  }

  getNumberProduct() {
    let number = 0;
    for (let product of this.cart) {
      Number += product.quantity;
    }
    return number;
  }

  gettotalQuantity() {
    let totalQuantity = [
      Number(document.getElementById("quantity").value),
      Number(document.getElementById("price").value),
    ];
  }

  gettotalPrice() {
    let total = 0;
    for (let product of this.cart) {
      total += product.quantity * product.price;
    }
    return total;
  }

  displayCart() {
    let cartItems = document.getElementById("cart__items");
    console.log(cartItems);
    // if (productQuantity && productPrice) {
    cartItems.innerHTML = "";
    this.cart.map((product) => {
      console.log(product);
      cartItems.innerHTML += `
        <article class="cart__item" data-id=${product.getId} data-color="${product.color}">
                <div class="cart__item__img">
                  <img src="../images/${product.imageUrl} alt="Photographie d'un canapé">
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
    // }
  }
}

const cart = new Cart();
cart.displayCart();
const total = cart.gettotalPrice();
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
