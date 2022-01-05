//Get items and cookies(donner) from local storage
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

// Add items into cart
function addCart(product) {
  let foundProduct = this.cart.find((p) => p.id == product.id); //find product inside tableau

  if (foundProduct) {
    return changeQuantity(product.id, product.quantity);
  }
  product.quantity = 1;
  cart.push(product);
  saveCart(cart);
}

//----------------------------------------------------------------------------------
//Change quantity of products
function changeQuantity(product, quantity) {
  let foundProduct = cart.find((p) => p.id === product.id);
  if (foundProduct) {
    const oldCart = cart.filter((items) => items.id !== id);
    foundProduct.quantity += quantity;
    if (foundProduct.quantity <= 0) {
      return removeFromCart(foundProduct);
    }
    saveCart([...oldCart, foundProduct]);
  }
}

//total of quantity items
function getNumberProduct() {
  let number = 0;
  for (let product of cart) {
    number += product.quantity;
  }
  return number;
}

//Total of price
function settotalPrice(cart) {
  const totalDiv = document.querySelector("#totalPrice");
  let total = 0;
  for (let product of cart) {
    total += product.quantity * product.price;
  }
  totalDiv.innerText = total;
}

//--------------------------------------------------------------------------------------
//To show the result of item selected on page web
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

//-------------------------------------------------------------------
//Accessing element of items quantity
const totalQuantities = document.querySelectorAll(".itemQuantity");
console.log({ totalQuantities });

// Adding the event listener // still not working yet
totalQuantities.forEach((totalQuantity) => {
  totalQuantity.addEventListener("change", (e) => {
    console.log("total quantity");
    // change quantity in cart

    // compute totals (price and quantity)
  });
});

//Changement quantity of items selected
/*function changeQty() {
  let modifQty = document.querySelectorAll(".itemQuantity");

  for (let i = 0; i < modifQty.length; i++) {
    totalQuantities[i].addEventListener("change", (event) => {
      event.preventDefault();

      //Selection de changement for color and id
      let qtyChange = check[i].productQuantity;
      let qtyModifVal = totalQuantities[i].valueAsNumber;

      const resultQty = check.find((el) => el.qtyModifVal !== qtyChange);

      resultQty.getNumberProduct = qtyModifVal;
      check[i].productQuantity = resultQty.productQuantity;

      localStorage.setItem("product", JSON.stringify(check));

      location.reload();
    });
  }
}*/

//-----------------------------------------------------------------------
// Accessing element for button delete
const removeItemBtns = document.querySelectorAll(".deleteItem");

// Adding the event listener
removeItemBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let cardItem = btn.closest(".cart__item");
    let cardId = cardItem.dataset.id;
    let cardColor = cardItem.dataset.color;
    cardItem.remove();
    cart = cart.filter((p) => p.id !== cardId || p.color !== cardColor);
    saveCart(cart);

    location.reload(); // refresh page after event and get new total

    // compute again total price and total items' number
    // total price after items are deleted

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const totalPrice = totalQuantity.reduce(reducer, 0);
    console.log(totalPrice);
  });
});

// confirmation window when command successfully send
/*function confirmationWindow() {
  if (window.confirm("Thank you for your order.")) {
    window.location.href = "./cart.html"
  }
}*/

// gérer les problemes d'affichage // DONE // attention au ancienne données !

// afficher le total au bon endroit // DONE
// afficher le nombre total de produit // WIP <<<<<<<<<<<<========= don't forget

// prevoir la suppression de product. // DONE
// Attention: il ya plusieurs boutton supprimer // DONE
// Chaque bouton doit supprimer son produit // DONE
// il va donc falloir ajouter un evenement click sur chaque bouton // DONE
// avant tout essayer de détecter le click (avec un console.log par exemple) // DONE
// petit indice : récuperer la valeur data-id avec dataset en javascipt. // DONE

// prevoir la modification d'une quantité // WIP
// => la quantité totale change
// => le prix total change aussi

// au click sur le button
// envoyé la commande au serveur
// url de l'api : http://localhost:3000/api/products/order
// afficher des erreurs si il y en as

// si la command est validé, rediriger l'utilisateur vers la page confirmation

// afficher le numero de commande dans la page de confirmation
