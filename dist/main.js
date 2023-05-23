(()=>{"use strict";window.onscroll=function(){window.pageYOffset>=e?t.classList.add("sticky"):t.classList.remove("sticky")};var t=document.getElementById("main_nav"),e=t.offsetTop;document.body.appendChild(function(){const t=document.createElement("div");return t.textContent="Hi! My name is "+"chaala",t}())})();

//ACCORDION  toggle on click
let accr=document.getElementsByClassName('accordion');
let i;
for(i=0;i<=accr.length;i++){
    accr[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
    
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
}