//https://kea-alt-del.dk/t7/api/products/1165
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showproduct(data));

function showproduct(product) {
  console.log(product);
  document.querySelector(".purchaseBox h3").textContent =
    product.productdisplayname;
  document.querySelector(".purchaseBox .brand").textContent = product.brandname;
  document.querySelector(".purchaseBox .type").textContent =
    product.articletype;

  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
//`https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp`
