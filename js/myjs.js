var headerheight = 0; 
var sliderbreakpoint = 992;

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
  let windowWidth = document.body.clientWidth;
  const header = document.querySelector('#header-inner-container');
  const menu = document.querySelector('#menucontainer');

  const headerHeight = header.offsetHeight;
  const scrollPosition = window.scrollY;

  let sticker = menu;

  if(windowWidth <= 1200) {
    sticker = header;
  } 

  if (scrollPosition > headerHeight) {
    sticker.classList.add('sticky');
  } else {
    sticker.classList.remove('sticky');
  }
}



const setFrontpageSliderOnMobile = () => {
   let windowWidth = document.body.clientWidth;

  if(windowWidth <= sliderbreakpoint && !jQuery('#frontpage-posts').hasClass('slick-initialized')){
    jQuery('#frontpage-posts').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots:true,
      arrows:false,
      autoplaySpeed: 2000,
      centerMode:true
    });
  } else {
    if(jQuery('#frontpage-posts').hasClass('slick-initialized')) {
      jQuery('#frontpage-posts').slick('unslick');
    }
    
  }
  
}

document.addEventListener('DOMContentLoaded', function(e) {
  toggleMenu();
  triggerModal();wehiko(); stickyMenu(); setFrontpageSliderOnMobile();
});

window.addEventListener('resize', function(e) {
  setFrontpageSliderOnMobile();
});

window.addEventListener('scroll', function(e) {
  stickyMenu();
  
});

