//------------------------------confirmation order------------------------/

// get the element response from local storage
const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries())
const responseId = params.orderId

// select the DOM
const positionElementOrder = document.querySelector("#orderId")

// display the the confirmation id after order is valid
positionElementOrder.innerText = responseId
localStorage.clear()
