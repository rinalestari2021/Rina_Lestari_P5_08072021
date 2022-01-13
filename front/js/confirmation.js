//------------------------------confirmation order------------------------

//select button to submit the form

// cant create and get the order id yet
// i dont know where i should put this (localStorage.setItem("orderId", JSON.stringify(orderId));)!
const responseId = localStorage.getItem("orderId");

// structur html for confirmation page
// select the DOM
const positionElementOrder = document.querySelector("#orderId");

positionElementOrder.innerText = responseId;
localStorage.clear();
