

document.addEventListener("DOMContentLoaded", () => {


    let overlay = document.querySelector("#menu-overlay");

    let overlay_close = document.querySelector("#menu-overlay button");

    let menu_button = document.querySelector("nav button");

    menu_button.addEventListener('click', () => {
        overlay.classList.toggle("active");
        document.body.style.overflow = overlay.classList.contains("active") ? "hidden" : "";
    });

    overlay_close.addEventListener('click', () => {
        overlay.classList.toggle("active");
        document.body.style.overflow = overlay.classList.contains("active") ? "hidden" : "";
    });

    let dark_mode_btn = document.querySelector("footer button");
    let svgs = document.querySelectorAll("svg, path");

    dark_mode_btn.addEventListener('click', () => {
        document.body.classList.toggle("active");
        document.body.classList.toggle('dark');
        svgs.forEach((svg)=>{svg.classList.toggle("dark-svg")})
    });
});


//Form
const price = document.querySelector("#slider");
const output = document.querySelector(".price-output");

output.textContent = price.value;

price.addEventListener("input", () => {
  output.textContent = price.value;
});