//get URL
var searchUrl = new URLSearchParams(window.location.search);
var getId = searchUrl.get("id");

// async
const fetchProducts = async () => {
  products = await fetch(
    "http://localhost:3000/api/products/${products._id}"
  ).then(res.json());

  console.log(product);

  // get product
  document.getElementsByClassName("img").src = product.imageUrl;
  document.getElementsById("img").alt = product.altTxt;
  document.getElementsById("title").textContent = product.name;
  document.getElementsById("price").textContent = product.price;
  document.getElementsById("description").textContent = product.description;
  document.getElementsById("colors").textContent = product.colors;

  link.href = "./product.html?id=${product._id}";
  img.src = product.imageUrl;
  img.alt = product.altTxt;
  title.textContent = product.name;
  price.textContent = product.price;
  description.textContent = product.description;
  color.textContent = product.colors;
};
