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

// add items into cart
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

function rmProduct() {
  console.log("RM PRODUCT");
}

//change quantity of products
function changeQuantity(product, quantity) {
  let foundProduct = cart.find((p) => p.id == product.id);
  if (foundProduct != undefined) {
    foundProduct.quantity += quantity;
    if (foundProduct.quantity <= 0) {
      remove(foundProduct);
    } else {
      cart.save();
    }
  }
}

//accessing the button for plus and minus
/*const inputSelect = document.querySelector(".itemQuantity");
const productArticle = document.querySelector(".cart__item")*/

//adding event by click
/*let input  {
  let productArticle = input.closest ('article.cart__item');
  let quantityChoice = input.value;
  let productId = productChoice.dataset.id;

  input.addEventListener('cahnge, (e) => {
    const input = event.target.value;
    newQuantity = product.quantity;
    
    console.log(input);
  )};*/

//total of quantity items
function getNumberProduct(cart) {
  let number = 0;
  for (let product of cart) {
    number += product.quantity;
  }
  return number;
}

//accessing element of items quantity
const productQuantity = document.querySelectorAll(".itemQuantity");

// adding the event listener by loop
productQuantity.forEach((productQuantity) => {
  productQuantity.addEventListener("click", (e) => {
    console.log(
      "add into cart if quantity change, but id and color are same, save the sum total into the quantity"
    );
  });
});
//still need to find solution,
//bcs if i added the same items with different quantity, the code isn't added total of all into quantity
//instead it replace with the last event happen, 3 items plus 4 items normally the result are 7 items,
//but my code show result as 4items, and when the quantity reduce normally the total price also change

//total of price
function settotalPrice(cart) {
  const totalDiv = document.querySelector("#totalPrice");
  let total = 0;
  for (let product of cart) {
    total += product.quantity * product.price;
  }
  totalDiv.innerText = total;
}

//to show the result of item selected on page web
function displayCart() {
  let cartItems = document.getElementById("cart__items");
  cartItems.innerHTML = "";
  cart.forEach((product) => {
    console.log(product);
    cartItems.innerHTML += `
        <article class="cart__item" data-id=${product.id} data-color="${product.color}">
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
                      <p>Qté :</p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantity}">
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
settotalPrice(cart);
totalProduct = getNumberProduct(cart);

// accessing element for button delete
const removeItemBtn = document.querySelectorAll(".deleteItem");

// adding the event listener by loop
removeItemBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let cardItem = btn.closest(".cart__item");
    let cardId = cardItem.dataset.id;
    let cardColor = cardItem.dataset.color;
    cardItem.remove();
    cart = cart.filter((p) => p.id == cardId || p.color !== cardColor);
    saveCart(cart);
  });
});

//remove items from cart(problem after refresh item deleted come back)
/*function removeFromCart(product = 0) {
  for (let i in cart) {
    if (cart[i].product === product.id) {
      cart[i].quantity -= 1;
      if (cart[i].quantity === 0) {
        cart.splice(i, 1);
        break;
      }
    }
  }
  cart = cart.filter((p) => p.id != product.id);
  saveCart(cart);
}*/

// gérer les problemes d'affichage // DONE // attention au ancienne données !

// afficher le total au bon endroit // DONE
// afficher le nombre total de produit // WIP

// prevoir la suppression de product.
// Attention: il ya plusieurs boutton supprimer
// Chaque bouton doit supprimer son produit
// il va donc falloir ajouter un evenement click sur chaque bouton
// avant tout essayer de détecter le click (avec un console.log par exemple)
// petit indice : récuperer la valeur data-id avec dataset en javascipt.

// prevoir la modification d'une quantité
// => la quantité totale change
// => le prix total change aussi

// au click sur le button
// envoyé la commande au serveur
// url de l'api : http://localhost:3000/api/products/order
// afficher des erreurs si il y en as

// si la command est validé, rediriger l'utilisateur vers la page confirmation

// afficher le numero de commande dans la page de confirmation
