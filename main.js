const abrir = document.getElementById("abrir");


function toggleMenu(){
    const nav = document.getElementById("nav");
    nav.classList.toggle('active')
}

abrir.addEventListener("click", toggleMenu);


