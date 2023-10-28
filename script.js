// JS Script for Nav Bar scroll effect

var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('nav-color', 'shadow');
  } else {
    nav.classList.remove('nav-color', 'shadow');
  }
});

//End of JS Script for Nav Bar scroll effect


//Start of back to top botton
 // Get the button
 let mybutton = document.getElementById("myBtn");
  
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }