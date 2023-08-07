const btnMenu = document.getElementById("btn-nav");
const menu = document.getElementById("items");
const logoMenu = document.getElementById("logo");

const btnl = document.getElementById('btn-l');
const btnr = document.getElementById('btn-r');

btnMenu.addEventListener('click', ()=>{    
    menu.classList.toggle('nav-show');
    btnMenu.classList.toggle('btn-nav-show');
    logoMenu.classList.toggle('logo-show');
    btnl.classList.toggle('car-btn-show');
    btnr.classList.toggle('car-btn-show');
    btnl.classList.toggle('z-n1');
    btnl.classList.remove('z-1');
    btnr.classList.toggle('z-n1');
    btnr.classList.remove('z-1');
});
