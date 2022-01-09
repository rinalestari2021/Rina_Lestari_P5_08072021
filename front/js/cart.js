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

// Adding the event listener
totalQuantities.forEach((totalQuantity) => {
  totalQuantity.addEventListener("change", (e) => {
    console.log("total quantity");
    // change quantity in cart
    //Changement(modify) quantity of items selected with add and subtract button//still not working
    let productQty = document.createElement("input");
    productQty.className = "itemQuantity";
    productQty.setAttribute("type", "number");
    productQty.setAttribute("min", "1");
    productQty.setAttribute("max", "100");
    productQty.setAttribute("name", "itemQuantity");

    function modificationQty() {
      let modifQty = document.querySelectorAll(".itemQuantity");
      for (let k = 0; k < modifQty.length; k++) {
        modifQty[k].addEventListener("change", (event) => {
          event.preventDefault();

          //Selection de changement for qty and id
          let qtyChange = cart[k].productQuantity;
          let qtyModifVal = modifQty[k].valueAsNumber;

          const resultFind = cart.find((el) => el.qtyModifVal !== qtyChange);

          resultFind.productQuantity = qtyModifVal;
          cart[k].productQuantity = resultFind.productQuantity;

          localStorage.setItem("product", JSON.stringify(cart));

          //refresh page
          location.reload();
        });
      }
      modificationQty();
    }

    // compute totals (price and quantity)

    location.reload();
  });
});

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

    //popup window confirmation
    const popupConf = () => {
      if (window.confirm(`Article will remove from cart`)) {
        window.location.href = "cart.html";
      }
      window.location.href = "cart.html";
    };
    popupConf();
    location.reload(); // refresh page after event and get new total // total price after items are deleted

    // compute again total price and total items' avec la methode .reduce
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const totalPrice = totalQuantity.reduce(reducer, 0);
    console.log(totalPrice);
  });
});

//------------------------end of cart------------------------------------------------//

// -------------------------form order-------------------------------------------------------------//

//select button to submit the form
const btnSendOrder = document.querySelector("#order");
console.log(btnSendOrder);

// Adding addeventlistener
btnSendOrder.addEventListener("click", (e) => {
  e.preventDefault();

  // Get the value of the form
  const formValues = {
    firstName: document.querySelector("#firstName").value,
    lastName: document.querySelector("#lastName").value,
    address: document.querySelector("#address").value,
    city: document.querySelector("#city").value,
    email: document.querySelector("#email").value,
  };
  console.log("formValues");

  //Put object formvalues inside local storage
  localStorage.setItem("formValues", JSON.stringify(formValues)); // change object into string

  // Add value of the order and selected products inside un object then send it to serveur
  const subOrder = {
    cart,
    formValues,
  };
  console.log("subOrder");
  console.log(subOrder);

  // ---------Put content inside localstorage into form fields--------
  //take key from localstorage and put in a variables
  const dataLocalStorage = localStorage.getItem("formValues");

  //Convert string of the caracter into object javascript
  const dataLocalStorageObject = JSON.parse(dataLocalStorage);

  //put the values inside localstorage into form field
  document.querySelector("#firstName").value = dataLocalStorageObject.firstName;
  document.querySelector("#lastName").value = dataLocalStorageObject.lastName;
  document.querySelector("#address").value = dataLocalStorageObject.address;
  document.querySelector("#city").value = dataLocalStorageObject.city;
  document.querySelector("#email").value = dataLocalStorageObject.email;

  // get the total price of the commande
  // Select id the button order
  function formInscription() {
    let formOrder = document.querySelector(".cart__order");

    console.log(formOrder.email);

    const validEmail = function (inputEmail) {
      //Creation reg exp for email validation
      let emailRegExp = new ReExp(
        "^[a-zA-Z0-9.-_]+[@]{1}[a_zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$"
      );

      let testEmail = emailRegExp.test(inputEmail.value);
    };
    formInscription();

    //Building array from the local storage
    let productId = [];
    for (let i = 0; i < cart.length; i++) {
      productId.push(cart[i].productId);
    }
    console.log(productId);

    const options = {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    // url API for form order
    fetch("http://localhost:3000/api/products/order", options)
      .then((res) => res.json())
      .then((response) => response.json())
      .then((data) => {
        localStorage.clear();
        localStorage.setItem("orderId", data.orderId);

        document.location.href = "confirmation.html";
      })
      .catch((err) => {
        alert("Trouble with fetch:" + err.message);
      });
  }
});

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
