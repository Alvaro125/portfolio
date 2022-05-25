/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector("header nav");
const toggle = document.querySelector("nav .toggle");

toggle.addEventListener("click", function () {
  nav.classList.toggle("show");
  toggle.classList.toggle("is-active");
});
/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}


var img = document.querySelector("#promo .image img")

function myFunction(x) {
    if (x.matches) { // If media query matches
      img.src="imgs/mulher2_mobile.webp";
    }else{
        img.src="imgs/mulher2_pc.webp";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)
