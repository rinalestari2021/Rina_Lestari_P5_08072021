/**
 * Get id of the product with method url search params
 * const addBtn; Get MDN for button add to cart
 * Function fetch product to get the product id
 * Select DOM and set attribut url image and alttxt for each images
 * Create appendchild
 * Get the element of DOM with using document.getElementById
 * const colors;Create color la boucle for each
 * function addBtn; action for event on click for elements as color, qty, price, tittle, img
 * let cart = []; Create event on click then put inside empty cart cart[]
 * let check = localStorage.getItem("cart"); Check to verify if the cart is empty if yess put the items inside cart
 */

let productId = new URLSearchParams(window.location.search).get("id")
const addBtn = document.querySelector("#addToCart")

function fetchProducts(getId) {
  fetch(`http://localhost:3000/api/products/${getId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const imgNode = document.querySelector("div.item__img")
      const img = document.createElement("img")
      img.setAttribute("src", data.imageUrl)
      img.setAttribute("alt", data.altTxt)
      imgNode.appendChild(img)
      document.getElementById(`title`).textContent = data.name
      document.getElementById(`price`).textContent = data.price
      document.getElementById(`description`).textContent = data.description

      const colors = document.getElementById("colors")
      data.colors.forEach((color) => {
        var option = document.createElement("option")
        option.setAttribute("value", color)
        option.innerText = color
        colors.appendChild(option)
      })
    })
}
addBtn.addEventListener("click", () => {
  const colorChoice = document.getElementById("colors").value
  const quantityChoice = document.querySelector("#quantity").value
  const priceChoice = document.querySelector("#price").innerText
  const imageChoice = document.querySelector(".item__img img").src
  const productName = document.querySelector("#title").innerText

  let cart = []

  let check = localStorage.getItem("cart")
  console.log(check)
  if (check == null) {
    cart = []
  } else {
    cart = JSON.parse(localStorage.getItem("cart"))
  }

  if (colorChoice !== "" && quantityChoice > 0) {
    let product = {
      id: productId,
      title: productName,
      color: colorChoice,
      quantity: Number(quantityChoice),
      imageUrl: imageChoice
      // price: Number(priceChoice),
    }

    if (cart.length === 0) {
      cart.push(product)
    } else {
      let check = 0
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id && cart[i].color === product.color) {
          cart[i].quantity += product.quantity
          check = 1
        }
      }
      if (check === 0) {
        cart.push(product)
      }
    }
    const popupConf = () => {
      if (window.confirm(`Ajouter au panier`)) {
        window.location.href = "cart.html"
      }
      window.location.href = "cart.html"
    }
    popupConf()
    console.log({ cart })
    localStorage.setItem("cart", JSON.stringify(cart))
  }
})

fetchProducts(productId)

/**
 * if (colorChoice !== "" && quantityChoice >;create object product if client choose color 
    and quantity then the other list inside the product
 * if (cart.length === 0) {
      cart.push(product);....; add object product inside the tableau basket then add into locale storage
    //push product inside empty cart,
    //if the same product already exist in cart, add it but change only in quantity of the product
 * const popup to create window confirm
 * function appeler productId
 */
