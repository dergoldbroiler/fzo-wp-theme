var headerheight = 0; 

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
if(document.querySelector('.fahrzeuge') === null) return;

  headerheight === 0 ? headerheight = document.getElementById("header").clientHeight : headerheight = headerheight;
  const wehiko = document.querySelector('.mobile-de-plugin');  
  console.log( wehiko.clientHeight)
  document.getElementById("header").style.height = wehiko.clientHeight + headerheight + "px";
}


document.addEventListener('DOMContentLoaded', function(e) {
  toggleMenu();shiftContentOnMobiledePage()
});

window.addEventListener('resize', function(e) {
  shiftContentOnMobiledePage()
});

window.addEventListener('scroll', function(e) {
 
  
});

