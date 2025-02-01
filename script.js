document.addEventListener('DOMContentLoaded', () => {  
    let searchForm = document.querySelector('.search-form');  
    let shoppingCart = document.querySelector('.shopping-cart');  
    let loginForm = document.querySelector('.login-form');  
    let navbar = document.querySelector('.navbar');  

    document.querySelector('#search-btn').onclick = () => {  
        searchForm.classList.toggle('active');  
        shoppingCart.classList.remove('active');  
        loginForm.classList.remove('active');  
        navbar.classList.remove('active');  
    };  

    document.querySelector('#cart-btn').onclick = () => {  
        shoppingCart.classList.toggle('active');  
        searchForm.classList.remove('active');  
        loginForm.classList.remove('active');  
        navbar.classList.remove('active');  
    };  

    document.querySelector('#login-btn').onclick = () => {  
        loginForm.classList.toggle('active');  
        shoppingCart.classList.remove('active');  
        searchForm.classList.remove('active');  
        navbar.classList.remove('active');  
    };  

    document.querySelector('#menu-btn').onclick = () => {  
        navbar.classList.toggle('active');  
        loginForm.classList.remove('active');  
        shoppingCart.classList.remove('active');  
        searchForm.classList.remove('active');  
    };  

    window.onscroll = () => {  
        searchForm.classList.remove('active');  
        shoppingCart.classList.remove('active');  
        loginForm.classList.remove('active');  
        navbar.classList.remove('active');  
    };  
});




var swiper = new Swiper(".Product-slider", {
    loop:true,
    spaceBetween: 20,
    

    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      "@0.75": {
        slidesPerView: 2,
      },
      "@1.00": {
        slidesPerView:3,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });


  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    

    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      "@0.75": {
        slidesPerView: 2,
      },
      "@1.00": {
        slidesPerView:3,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });