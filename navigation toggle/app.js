let btn = document.getElementById("ham");
let rem = document.getElementById("rem");
let mobile = document.getElementById("mobile");
let nav = document.getElementById("nav");

btn.addEventListener("click", openNav);
rem.addEventListener("click", closeNav);

function openNav(){
    mobile.style.display = "flex";
    nav.style.display = "none"
}

function closeNav(){
    mobile.style.display = "none";
    nav.style.display = "flex";
}