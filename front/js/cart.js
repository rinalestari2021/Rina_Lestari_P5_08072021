/**
 * Function getcard is to get the cart from local storage
 * Call the function get card to be execute
 */
function getCard() {
  let check = localStorage.getItem("cart")
  console.log({ check })
  if (check == null) {
    return []
  } else {
    return JSON.parse(check)
  }
}
let cart = getCard()

/**
 * Function savecart is to set items/article into localstorage with JsonStringify
 * JsonStringifychange the object into string
 * Then push the product inside cart and save it inside localstorage and push it inside cart and save it
 * Function changeQuantity if there is new qty and id added but inside already has the items with the same id &qty, just change the qty
 * Function getNumberProduct, product number equal quanitity thant return into number.
 * Function settotalPrice of cart is to calculate total price with adding total quantity and each price by selecting the DOM then inject the result into html
 * DisplayCart function to show the result with using boucle for each and emthode inneHTML to gets or sets the HTML syntax describing the element's descendants.
 */
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart)) // set items inside localstorage
}

/**
 * Function addCart is to add product that find inside the table, with id & quantity,the quantity product min 1 cant go under 1
 */
function addCart(product) {
  let foundProduct = cart.find((p) => p.id == product.id) //find product inside tableau

  if (foundProduct) {
    return changeQuantity(product.id, product.quantity)
  }
  product.quantity = 1
  cart.push(product)
  saveCart(cart)
}

//----------------------------------------------------------------------------------//
//Change quantity of products
function changeQuantity(product, quantity) {
  let foundProduct = cart.find((p) => p.id === product.id)
  if (foundProduct) {
    const oldCart = cart.filter((items) => items.id !== id)
    foundProduct.quantity += quantity
    if (foundProduct.quantity <= 0) {
      return removeFromCart(foundProduct)
    }
    saveCart([...oldCart, foundProduct])
  }
}

//total of quantity items
function getNumberProduct() {
  let number = 0
  for (let product of cart) {
    number += product.quantity
  }
  return number
}

//Total of price
function settotalPrice(cart) {
  const totalDiv = document.querySelector("#totalPrice") // select element from DOM
  const quantityDiv = document.querySelector("#totalQuantity")
  let total = 0
  let quantity = 0
  for (let product of cart) {
    total += product.quantity * product.price
    quantity += parseInt(product.quantity)
  }
  totalDiv.innerText = total
  quantityDiv.innerText = quantity
}

//--------------------------------------------------------------------------------------
//To show the result of item selected on page web
function displayCart() {
  let cartItems = document.getElementById("cart__items")
  cartItems.innerHTML = ""
  cart.forEach((product) => {
    console.log(product)
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
        </article>`
  })
}
displayCart(cart)
settotalPrice(cart)
totalProduct = getNumberProduct(cart)

//---------------------------------------------------------------------------------------------------//
/**
 * Accessing element of items quantity
 * Function listeningCount is function to listen to each count by button add and substract // Adding the event listener
 * then re calculate the price, quantity and the articles dans le cart
 * e.target.value;  get the value of the input
 * input.closest(".cart__item"); search inside the DOM
 * cardItem.dataset.id; get the id and the modified element
 * cardItem.dataset.color; get the color
 * let cart = getCard(); get cart form the localstorage
 * cart.find; find the element inside localstorage thanks to the id and the color
 * declare element ;element id equal cardid  and element color equal cardcolor
 * item.quantity = quantity; // modify the quantity o the element with the quantity change from the input
 * addCart(item); refresh the cart with the new element that has been modified
 * saveCart(cart); updating local storage
 * settotalPrice(cart); actualisation price and the quantity
 */

function listeningCount() {
  let totalQuantities = document.querySelectorAll("input.itemQuantity")
  totalQuantities.forEach(function (input) {
    input.addEventListener("input", function (e) {
      let quantity = e.target.value
      let cardItem = input.closest(".cart__item")
      let cardId = cardItem.dataset.id
      let cardColor = cardItem.dataset.color
      let cart = getCard()
      let item = cart.find(
        (element) => element.id === cardId && element.color === cardColor
      )
      item.quantity = quantity
      addCart(item)
      saveCart(cart)
      settotalPrice(cart)
    })
  })
}
listeningCount()

//-----------------------------------------------------------------------------------------//
/**
 * Function select the button remove the add the boucle forEach with methode the closestreturns the closest ancestor of the current element
 * & methode dataset to acces the cookies
 * Function listeningCount is function to listen to each count by button add and substract the re calculate
 * the price, quantity and the articles dans le cart
 */

// Accessing element for button delete inside DOM
const removeItemBtns = document.querySelectorAll(".deleteItem")

// Adding the event listener
removeItemBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let cardItem = btn.closest(".cart__item")
    let cardId = cardItem.dataset.id
    let cardColor = cardItem.dataset.color

    cart = cart.filter((p) => p.id !== cardId || p.color !== cardColor)
    saveCart(cart)
    settotalPrice(cart)
    cardItem.remove()
  })
})

//------------------------end of cart--------------------------------------------------------------//

//------------------------------ form field for order---------------------------------------------//
/**
 * const btnSendOrder; select button id inside DOM for sending command then  Adding addeventlistener
 * e.preventDefault(); to stop the system refresh automatically
 * Function formfieldTextEmpty; Function to display message on form field when form field is empty
 * Function formfieldTextFill; if the form is not fill correctly will show the message
 * function firstnameControl,function lastnameControl,function addressControl,function cityControl,
 * function emailControl avant validation the order
 * firstnameControl() == true until emailControl() == true is to display message error inside form 
 * field Using operator ternaire
 * if (
    firstnameControl() && until cartControl (); is to control validation form field before send to local storage
 * Const contact; is to create contact for form field
    
 */

const btnSendOrder = document.querySelector("#order")
console.log(btnSendOrder)

btnSendOrder.addEventListener("click", function (e) {
  e.preventDefault()

  //----- managing the validation form field---------------------------------------------------------------/

  function handleError(querySelectorId, txt = "Champs invalid") {
    document.querySelector(`#${querySelectorId}`).textContent = txt
  }
  function formfieldTextEmpty(
    querySelectorId,
    txt = "Veuillez remplir le formulaire"
  ) {
    document.querySelector(`#${querySelectorId}`).textContent = txt
  }
  function formfieldTextFill(querySelectorId) {
    document.querySelector(`#${querySelectorId}`).textContent = "Texte invalide"
  }
  function firstnameControl() {
    const theFirstname = document.querySelector("#firstName").value
    if (/^[A-Za-z]{3,20}$/.test(theFirstname)) {
      console.log("OK")
      return true
    } else {
      return false
    }
  }
  function lastnameControl() {
    const theLastname = document.querySelector("#lastName").value
    if (/^[A-Za-z]{3,20}$/.test(theLastname)) {
      console.log("OK")
      return true
    } else {
      return false
    }
  }
  function addressControl() {
    const theAddressName = document.querySelector("#address").value
    if (/^[A-Za-z0-9\s]{5,50}$/.test(theAddressName)) {
      console.log("OK")
      return true
    } else {
      return false
    }
  }
  function cityControl() {
    const theCityName = document.querySelector("#city").value
    if (/^[A-Za-z]{3,20}$/.test(theCityName)) {
      console.log("OK")
      return true
    } else {
      return false
    }
  }
  function emailControl() {
    const theEmailAddress = document.querySelector("#email").value
    if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(theEmailAddress)) {
      console.log("OK")
      return true
    } else {
      return false
    }
  }

  if (firstnameControl() === false) {
    handleError("firstNameErrorMsg")
  }
  // firstnameControl() == true
  //   ? formfieldTextEmpty("firstNameErrorMsg", "prenom invalid")
  //   : formfieldTextFill("firstNameErrorMsg")

  lastnameControl() == true
    ? formfieldTextEmpty("lastNameErrorMsg")
    : formfieldTextFill("lastNameErrorMsg")

  addressControl() == true
    ? formfieldTextEmpty("addressErrorMsg")
    : formfieldTextFill("addressErrorMsg")

  cityControl() == true
    ? formfieldTextEmpty("cityErrorMsg")
    : formfieldTextFill("cityErrorMsg")

  emailControl() == true
    ? formfieldTextEmpty("emailErrorMsg")
    : formfieldTextFill("emailErrorMsg")

  // check if cart is empty or not before valid the commands
  function cartControl() {
    console.log({ cart })
    if (cart == null || cart.length === 0) {
      return false
    } else {
      return true
    }

    // retourner false si le cart du localStorage est vide (==null)
    // sinon retourner true
  }
  if (
    firstnameControl() &&
    lastnameControl() &&
    addressControl() &&
    cityControl() &&
    emailControl() &&
    cartControl()
  ) {
    const contact = {
      firstName: document.querySelector("#firstName").value,
      lastName: document.querySelector("#lastName").value,
      address: document.querySelector("#address").value,
      city: document.querySelector("#city").value,
      email: document.querySelector("#email").value
    }
    let productId = []
    let cart = getCard()
    for (let i = 0; i < cart.length; i++) {
      productId.push(cart[i].id)
    }
    const toSend = {
      products: productId,
      contact: contact
    }
    const options = {
      method: "POST",
      body: JSON.stringify(toSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
    fetch("http://localhost:3000/api/products/order", options)
      .then((res) => res.json())
      .then(function (data) {
        localStorage.clear()

        // localStorage.setItem("orderId", data.orderId) // registrer order id // INTERDIT !!!!!!!!!!!!!!!!!!!!!!!!
        // window.location.href = "confirmation.html?orderId=" + data.orderId // transferer orderId avec url
      })
      .catch(function (err) {
        alert("Il y a eu un problème avec l'opération fetch: " + err.message)
      })
  } else {
    alert("Veuillez remplir bien le formulaire")
  }
})

/**
 * let productId = []; create variable product id
 * let cart = getCard();  the empty cart equal getcard (take from local storage)
 * const toSend; create variable to send with 2 object product and contact info
 * const options = {
       method: "POST",...; request  access to json
 * fetch("http://...., options); make an http request using function fecth
 * alert("Veuillez remplir bien le formulaire / ajouter un article"); if form field not fill corectly the is error 
  message
 *
 */

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
