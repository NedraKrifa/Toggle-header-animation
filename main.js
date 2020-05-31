let servBtn=document.querySelector('.serv-btn');
let service=document.querySelector('.serv-show');
let rotate=document.querySelector('.fa-caret-down');
let toggleBtn=document.querySelector('.toggle-btn');
let menu=document.getElementById('sidebar');

servBtn.addEventListener('click',showServices);
toggleBtn.addEventListener('click',toggleMenu);



function showServices(){
    service.classList.toggle("show");
    rotate.classList.toggle('rotate');
}
function toggleMenu(){
    toggleBtn.classList.toggle("click");
    menu.classList.toggle("show");
}