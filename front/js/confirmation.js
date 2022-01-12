//------------------------------confirmation order------------------------
// cant create and get the order id yet
// i dont know where i should put this (localStorage.setItem("orderId", JSON.stringify(orderId));)!
let orderId = null;
const responseId = localStorage.getItem("orderId");
console.log(`orderId : ${orderId}`);

// get the total price of the commande
const totalPriceOrder = localStorage.getItem("totalPrice");
console.log(`totalPriceOrder : ${totalPrice}`);

// structur html for confirmation page
// select the DOM
const positionElementOrder = document.querySelector("#orderId");

// is not working
const structurConfOrder = `
<div class="confirmation">
<p>Commande validée ! <br>Votre numéro de commande est : <span id="orderId"><${orderId}</span></p> 
</div>`;
