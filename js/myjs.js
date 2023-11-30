const toggleMenu = () => {
  const menuToggle = document.querySelector('#nav-icon');
  const navigation = document.querySelector('#mainmenu');
  menuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    menuToggle.classList.toggle('open');
  navigation.classList.toggle('open');
  });
  
}


const shiftContentOnMobiledePage = () => {
  const wehiko = document.querySelector('.mobile-de-plugin');  
  document.getElementById("header").style.height = wehiko.clientHeight + 700 + "px";
}


document.addEventListener('DOMContentLoaded', function(e) {
  toggleMenu();shiftContentOnMobiledePage()
});

window.addEventListener('resize', function(e) {
  shiftContentOnMobiledePage()
});

window.addEventListener('scroll', function(e) {
 
  
});

