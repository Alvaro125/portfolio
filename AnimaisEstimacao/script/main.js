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

var img = document.querySelectorAll("#catalogo .card img");

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    img[0].src = "img/peixe_no_Aquario_mobile.jpg";
    img[1].src = "img/bolinhas_mobile.jpg";
    img[2].src = "img/peixeAmarelo_mobile.jpg";
  } else {
    img[0].src = "img/peixe_no_Aquario_pc.webp";
    img[1].src = "img/bolinhas_pc.webp";
    img[2].src = "img/peixeAmarelo_pc.webp";
  }
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction);
