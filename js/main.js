const cartButtons = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButtons.addEventListener("click", toggleModal);
modal.addEventListener("click", toggleModal);
  
function toggleModal() {
  modal.classList.toggle("is-open");  
}

new WOW().init();