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