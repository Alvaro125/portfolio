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


const sorvete_roxo = document.querySelector("#home img")
const sorvete_frutas_vermelhas = document.querySelector("#sorbet img")
const sorvete_mms = document.querySelector("#bufe img")

window.addEventListener("scroll", function () {
  let value = window.scrollY

  sorvete_roxo.style.top = (0.5 * value) + 'px';
  sorvete_frutas_vermelhas.style.top = ((0.5 * value) - 650) + 'px';
  sorvete_mms.style.top = ((0.5 * value) - 1350) + 'px';
});



const img1 = document.querySelectorAll("#sabores img");
const img2 = document.querySelectorAll("#local img");
const img3 = document.querySelectorAll("#sabores img");


function myFunction(x) {
  if (x.matches) {
    // If media query matches
    img1.src = "imgs/pedacos-de-sorvete-mobile.webp";
    img2.src = "imgs/mesa-rosa-mobile.webp";
    img3.src = "imgs/sorvete-rosa-mobile.webp";

    window.addEventListener("scroll", function () {
      let value = window.scrollY
    
      sorvete_roxo.style.top = (0.5 * value) + 'px';
      sorvete_frutas_vermelhas.style.top = ((0.35 * value) - (650)) + 'px';
      sorvete_mms.style.top = ((0.35 * value) - (1250)) + 'px';
    });
  } else {
    img1.src = "imgs/pedacos-de-sorvete.webp";
    img2.src = "imgs/mesa-rosa.webp";
    img3.src = "imgs/sorvete-rosa.webp";
  }
}

const x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addEventListener(myFunction);





