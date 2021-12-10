//call API with Fetch
let url = "http://localhost:3000/api/products";

document.querySelector(".item").addEventListener("input", function () {
  if (this.value.lenght) {
    let url = "http://localhost:3000/api/products";

    fetch(url).then((response) =>
      response
        .json()
        .then((data) => {
          console.log(data);
          let display = "<item>";
          for (let item of data) {
            items.innerHTML += "<item=${products.url}>";
          }
        })
        .catch((error) => console.log(error))
    );
  }
});

//evenement

let getArticles = document.querySelector(".item article.img > a");

//insert products
/*function insertEntity() {
  let entity = getFromInput();

  let options = {
    method:'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(entity)
  },

  fetch(vm.options.http://localhost:3000/api/products + vm.options.urlEndpoint, options)
  .then(response => processResponse(response))
  .then(data => {
    if (vm.lastStatus.ok) {
      vm.lastStatus.response = data;
      setInput(data);
    }
    else {displayError(ajaxCommon.handleError(vm.lastStatus));}
  })
  .catch(error => displayError(ajaxCommon.handleAjaxError(error)));
}
  ;*/
