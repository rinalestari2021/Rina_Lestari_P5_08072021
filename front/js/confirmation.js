//------------------------------confirmation order------------------------

// get the element response from local storage
const responseId = localStorage.getItem("orderId");

// select the DOM
const positionElementOrder = document.querySelector("#orderId");

// display the the confirmation id after order is valid
positionElementOrder.innerText = responseId;
localStorage.clear();
