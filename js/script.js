const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>0);
})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}



var turpaketleriLink = document.getElementById('turpaketleri');
turpaketleriLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'turpaketleri.html';
});



var indexLink = document.getElementById('homepage');
indexLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'index.html';
});



var contactLink = document.getElementById('contactpage');
contactLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'contact.html';
});



var seyahetlogoLink = document.getElementById('seyahetlogo');
seyahetlogoLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'index.html';
});



var indisecLink = document.getElementById('letsgo');
indisecLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'turpaketleri.html';
});



var seyahetyerleriLink = document.getElementById('seyahetyerleri');
seyahetyerleriLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'seyahetyerleri.html';
});




//search

function search(){
    let filter=document.getElementById('find').value.toUpperCase();
    let item=document.querySelectorAll('.box');
    let l=document.getElementsByTagName('h4');
    for(var i=0; i<=l.length; i++){
        let a=item[i].getElementsByTagName('h4')[0];
        let value=a.innerHTML || a.innerText || a.textContent;
        if(value.toUpperCase().indexOf(filter)> -1){
            item[i].style.display="";
        }
        else{
            item[i].style.display="none";
        }
    }
}