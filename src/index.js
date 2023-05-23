//Import
import myName from "./myName";

//testing the setup
//alert('test passed');


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("main_nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//component function added
function component(){
    const element=document.createElement('div');

    //using imported myName function in another js
    element.textContent=myName('chaala');

    return element;
}
document.body.appendChild(component());

