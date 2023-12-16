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


const triggerModal = () => {
  const modalTrigger = document.querySelectorAll('.modal-trigger a');
  const modal = document.querySelector('#interim-modal');
  const modalClose = document.querySelector('.modal-close');
modalTrigger.forEach(function(trigger) {
  trigger.setAttribute('data-bs-toggle', 'modal');
  trigger.setAttribute('data-bs-target', '#interim-modal');

  });
}


const wehiko = () => {
  const ads = document.querySelectorAll('.mobile-de-plugin .ads');

  ads.forEach( ad => {
   let link = ad.querySelector('a').getAttribute('href');
   ad.style = 'cursor: pointer';
   ad.addEventListener('click', function(e) {
      e.preventDefault();
      window.open(link, '_blank');
    });
  });
}



const stickyMenu = () => {
  const header = document.querySelector('#header-inner-container');
  const menu = document.querySelector('#menucontainer');
  const headerHeight = header.offsetHeight;
  const scrollPosition = window.scrollY;
  if (scrollPosition > headerHeight) {
    menu.classList.add('sticky');
  } else {
    menu.classList.remove('sticky');
  }
}

document.addEventListener('DOMContentLoaded', function(e) {
  toggleMenu();
  triggerModal();wehiko(); stickyMenu();
});

window.addEventListener('resize', function(e) {

});

window.addEventListener('scroll', function(e) {
  stickyMenu();
  
});

