fetch("https://kea-alt-del.dk/t7/api/products?limit=10")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //Looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fange template
  const template = document.querySelector("#smallProductTemplate").content;
  //Lave en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".type").textContent = product.articletype;
  copy.querySelector(".brand").textContent = product.brandname;
  if (product.soldout) {
    copy.querySelector("article").classList.add(".soldOut");
    //produdt er udsolgt
  }
  copy
    .querySelector(".read-more")
    .setAttribute("href", `product.html?id=${product.id}`);
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  //appendde
  document.querySelector("main").appendChild(copy);
}
