const toggleMenu = () => {
  const menuToggle = document.querySelector('#nav-icon');
  const navigation = document.querySelector('#mainmenu');
  menuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    menuToggle.classList.toggle('open');
  navigation.classList.toggle('open');
  });
  
}


document.addEventListener('DOMContentLoaded', function(e) {
  toggleMenu();
});

window.addEventListener('resize', function(e) {

});

window.addEventListener('scroll', function(e) {
 
  
});

