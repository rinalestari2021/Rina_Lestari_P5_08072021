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
  localStorage.setItem("cart", JSON.stringify(cart)); // set items inside localstorage
}

// Add items into cart
function addCart(product) {
  let foundProduct = cart.find((p) => p.id == product.id); //find product inside tableau

  if (foundProduct) {
    return changeQuantity(product.id, product.quantity);
  }
  product.quantity = 1;
  cart.push(product);
  saveCart(cart);
}

//----------------------------------------------------------------------------------//
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
  const totalDiv = document.querySelector("#totalPrice"); // select element from DOM
  const quantityDiv = document.querySelector("#totalQuantity");
  let total = 0;
  let quantity = 0;
  for (let product of cart) {
    total += product.quantity * product.price;
    quantity += parseInt(product.quantity);
  }
  totalDiv.innerText = total;
  quantityDiv.innerText = quantity;
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

//---------------------------------------------------------------------------------------------------//
//Accessing element of items quantity
function listeningCount() {
  let totalQuantities = document.querySelectorAll("input.itemQuantity");
  // Adding the event listener
  totalQuantities.forEach(function (input) {
    input.addEventListener("input", function (e) {
      let quantity = e.target.value; // get the value of the input
      let cardItem = input.closest(".cart__item"); // search inside the DOM
      let cardId = cardItem.dataset.id; //get the id and the modified element
      let cardColor = cardItem.dataset.color; // get the color
      let cart = getCard(); //get the localstorage
      let item = cart.find(
        // find the element inside localstorage thanks to the id and the color
        (element) => element.id === cardId && element.color === cardColor // element id equal cardi  and element color equel cardcolor
      );
      item.quantity = quantity; // modify the quantity o the element with the quantity change from the input
      addCart(item); // refresh the cart with the new element that has been modified
      saveCart(cart); // updating local storage
      settotalPrice(cart); // actualisation price and the quantity
    });
  });
}
listeningCount();

//-----------------------------------------------------------------------------------------//
// Accessing element for button delete inside DOM
const removeItemBtns = document.querySelectorAll(".deleteItem");

// Adding the event listener
removeItemBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let cardItem = btn.closest(".cart__item");
    let cardId = cardItem.dataset.id;
    let cardColor = cardItem.dataset.color;

    cart = cart.filter((p) => p.id !== cardId || p.color !== cardColor);
    saveCart(cart);
    settotalPrice(cart);
    cardItem.remove();
  });
});

//------------------------end of cart--------------------------------------------------------------//

//------------------------------ form field for order---------------------------------------------//

//select button id inside DOM for sending command
const btnSendOrder = document.querySelector("#order");
console.log(btnSendOrder);

// Adding addeventlistener
btnSendOrder.addEventListener("click", function (e) {
  e.preventDefault(); // to stop the system refresh automatically

  //----- managing the validation form field----------------------------------------/
  function firstnameControl() {
    const theFirstname = document.querySelector("#firstName").value; //control validation of firstname
    if (/^[A-Za-z]{3,20}$/.test(theFirstname)) {
      //first name cant more than 20 alphabet
      console.log("OK");
      return true;
    } else {
      alert("Prenom non valide");
      return false;
    }
  }
  function lastnameControl() {
    const theLastname = document.querySelector("#lastName").value; //control validation of lastname
    if (/^[A-Za-z]{3,20}$/.test(theLastname)) {
      console.log("OK");
      return true;
    } else {
      alert("Nom non valide");
      return false;
    }
  }
  function addressControl() {
    const theAddressName = document.querySelector("#address").value; //control validation of address
    if (/^[A-Za-z0-9\s]{5,50}$/.test(theAddressName)) {
      console.log("OK");
      return true;
    } else {
      alert("Address non valide");
      return false;
    }
  }
  function cityControl() {
    const theCityName = document.querySelector("#city").value; //control validation of city name
    if (/^[A-Za-z]{3,20}$/.test(theCityName)) {
      console.log("OK");
      return true;
    } else {
      alert("City non valide");
      return false;
    }
  }
  function emailControl() {
    const theEmailAddress = document.querySelector("#email").value; //control validation of email address
    if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(theEmailAddress)) {
      console.log("OK");
      return true;
    } else {
      alert("Email n'est pas valide"); // alert if the email dont write corectly
      return false;
    }
  }

  //control validation form field before send to local storage
  if (
    firstnameControl() &&
    lastnameControl() &&
    addressControl() &&
    cityControl() &&
    emailControl()
  ) {
    // creation contact for form field
    const contact = {
      firstName: document.querySelector("#firstName").value,
      lastName: document.querySelector("#lastName").value,
      address: document.querySelector("#address").value,
      city: document.querySelector("#city").value,
      email: document.querySelector("#email").value,
    };
    let productId = []; // create variable product id
    let cart = getCard(); // the empty cart equal getcard (take from local storage)
    for (let i = 0; i < cart.length; i++) {
      productId.push(cart[i].id);
    }
    const toSend = {
      // create variable to send with 2 object product and contact info
      products: productId,
      contact: contact,
    };
    const options = {
      //request  access to json
      method: "POST",
      body: JSON.stringify(toSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:3000/api/products/order", options) // make an http request
      .then((res) => res.json())
      .then(function (data) {
        localStorage.clear();
        localStorage.setItem("orderId", data.orderId); // registrer order id
        window.location.href = "confirmation.html";
      })
      .catch(function (err) {
        alert("Il y a eu un problème avec l'opération fetch: " + err.message);
      });
  } else {
    alert("Veuillez bien remplir le formulaire"); // if form field not fill corectly the is error message
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
