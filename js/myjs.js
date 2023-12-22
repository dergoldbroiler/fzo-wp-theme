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
  const modalTrigger = document.querySelectorAll('.modal-trigger a');
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
   let windowWidth = window.innerWidth;

  if(windowWidth <= 1200  && !jQuery('#frontpage-posts').hasClass('slick-initialized')){
    jQuery('#frontpage-posts').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      dots:true,
      arrows:false,
      autoplaySpeed: 2000,
      centerMode:true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  }  else {

    if(jQuery('#frontpage-posts').hasClass('slick-initialized')) {
      jQuery('#frontpage-posts').slick('unslick');
    }
  }

}



const setCarSlider = () => {
  let windowWidth = window.innerWidth;
  if(windowWidth <= 1200  && !jQuery('.ads').hasClass('slick-initialized')){
    jQuery('.ads').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      dots:true,
      arrows:false,
      autoplaySpeed: 2000,
      centerMode:true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  }  else {
   
    if(jQuery('.ads').hasClass('slick-initialized')) {
      jQuery('.ads').slick('unslick');
    }
  }

}


const isSlider = (element) => {
 return document.querySelector(element).classList.contains('slick-initialized');
}


const unslickSlider = () => {
  if(jQuery('#frontpage-posts').hasClass('slick-initialized')) {
    jQuery('#frontpage-posts').slick('unslick');
  }
  if(jQuery('.ads').hasClass('slick-initialized')) {
    jQuery('.ads').slick('unslick');
  }
  
 }

document.addEventListener('DOMContentLoaded', function(e) {
  toggleMenu();
  triggerModal();
  wehiko(); 
  stickyMenu(); setFrontpageSliderOnMobile();
  setCarSlider();
});

window.addEventListener('resize', function(e) {
  if(!isSlider('#frontpage-posts') && window.innerWidth <= 1200)  {
    setFrontpageSliderOnMobile();
  } else {
    unslickSlider();
  }


  if(!isSlider('.ads') && window.innerWidth <= 1200)  {
    setCarSlider();
  } else {
    unslickSlider();
  }
  //setCarSlider();
});

window.addEventListener('scroll', function(e) {
  stickyMenu();
  
});

