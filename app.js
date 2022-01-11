import RouterHandler from './router.js'

window.onhashchange = () => {
  setActiveLink();
}

function setActiveLink() {
   const links = document.querySelectorAll('.header-link');
   links.forEach(link => {
      const linkPath = link.getAttribute('href');
      const currentPath = window.location.hash;
      if (currentPath === linkPath) {
        link.classList.add('active');  
      } else {
        link.classList.remove('active');         
      }
   });
}

class App {
  constructor() {
    new RouterHandler();
  }  
}

new App();

// Applying underline
// https://scrimba.com/learn/javascript/hacker-news-formatting-comments-cv83d4sr