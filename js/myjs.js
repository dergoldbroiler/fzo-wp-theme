var headerheight = 0; 
var sliderbreakpoint = 1200;

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
  const modalTrigger = document.querySelectorAll('.modal-trigger a, .modal-trigger');
  const modal = document.querySelector('#interim-modal');
  const modalClose = document.querySelector('.modal-close');
modalTrigger.forEach(function(trigger) {
  trigger.setAttribute('data-bs-toggle', 'modal');
  trigger.setAttribute('data-bs-target', '#interim-modal');

  });
}


const wehiko = () => {
  const ads = document.querySelectorAll('.mobile-de-plugin .ad');

  ads.forEach( ad => {
   let link = ad.querySelector('a').getAttribute('href');
   ad.style = 'cursor: pointer';
    console.log('te', ad.querySelector('.emissionsDetails').innerHTML)
   if(ad.querySelector('.emissionsDetails').innerHTML == ""){

    ad.querySelector('.emissionsDetails').innerHTML = "&nbsp;"
  }
   ad.addEventListener('click', function(e) {
      e.preventDefault();
    //  window.open(link, '_blank');
   
    });
  });
}



const stickyMenu = () => {
  let windowWidth = window.innerWidth;
  const header = document.querySelector('#header');
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


/*
slick slider
*/

const isSlider = (element) => {
  return document.querySelector(element).classList.contains('slick-initialized');
 }

const setSlickSlider = (element)  => {

  if(document.querySelector(element)){
    
    let windowWidth = window.innerWidth;

    if(windowWidth > 1200 && isSlider(element)){
   //   jQuery(element).slick('unslick');
    }

    if(windowWidth < 1200 && !isSlider(element)){
      jQuery(element).slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          dots:true,
          arrows:false,
          autoplaySpeed: 2000,
          centerMode:true,
          
          responsive: [
        
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        });
      }  
    }
}



document.addEventListener('DOMContentLoaded', function(e) {
  toggleMenu();
  triggerModal();
  wehiko(); 
  stickyMenu(); 
  setSlickSlider('#frontpage-posts');
  setSlickSlider('.ads');
});

window.addEventListener('resize', function(e) {
  setSlickSlider('#frontpage-posts'); 
  setSlickSlider('.ads');
});

window.addEventListener('scroll', function(e) {
  stickyMenu();
});

