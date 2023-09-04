//Hamberger menus
const hamberger=document.querySelector('.hamburger-btn');
const mobile_menu =document.querySelector('.mobile-nav');

//Add the active class to hamberger menu when clicked
hamberger.addEventListener('click',()=>{
    hamberger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});