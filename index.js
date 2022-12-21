
//  Initialize Swiper

  var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints :{
      0:{
        slidesPerView: 1,
      },

      520:{
        slidesPerView: 1,
      },
      
      950:{
        slidesPerView: 3,
      },
    }, 
  });
