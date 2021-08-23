let searchBtn = document.querySelector('#search');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let imgBtn = document.querySelectorAll('.img-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

searchBtn.addEventListener('click', function(){
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

menu.addEventListener('click', function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

formBtn.addEventListener('click', function(){
    loginForm.classList.add('active');
});

formClose.addEventListener('click', function(){
    loginForm.classList.remove('active');
});

imgBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.control .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#img-slider').src = src;
    });
});