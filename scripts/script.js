
$(document).ready(function () {

  const landingtimeline = gsap.timeline({ defaults: { duration: 1 } });

  landingtimeline.to(".landing-pattern-container", { y: 0 });
  landingtimeline.to(".main-header", { y: "0" }, 0.3);
  landingtimeline.to(".landing-content-main", { x: "0" });
  landingtimeline.to(".landing-swiper-pagination", { opacity: "1", duration: 0.5 }, "<"); // Same start time
  landingtimeline.to(".important-links-container", { opacity: "1", duration: 0.5 }, "<");

  const isSmallScreen = window.matchMedia("(max-width: 1200px)").matches;

  const linktl = gsap.timeline({ paused: true });


  if (isSmallScreen) {
      linktl.to('.important-links-overlay', { duration: 0, backgroundSize: '30rem', ease: "power3.in" }, "<") // Adjusted size
      .to('.important-links-overlay-circle', { opacity: 0.8, duration: 0, ease: "none" }, ">0.2") // Different opacity
      .add(() => {
        document.querySelector('.important-links-item:nth-child(6)').classList.add('active');
      }, "<0.15")
      .add(() => {
        document.querySelector('.important-links-item:nth-child(5)').classList.add('active');
      }, "<0.15")
      .add(() => {
        document.querySelector('.important-links-item:nth-child(4)').classList.add('active');
      }, "<0.15")
      .add(() => {
        document.querySelector('.important-links-item:nth-child(3)').classList.add('active');
      }, "<0.15")

      .add(() => {
        document.querySelector('.important-links-border').classList.remove('transition');
      }, "<");
  } else {
    linktl.to('.important-links-button', { duration: 0.6, delay: 1, rotation: 360, ease: "none" })
      .to('.important-links-overlay', { duration: 0.4, backgroundSize: '43rem', ease: "power3.in" }, "<")
      .to('.important-links-overlay-circle', { opacity: 1, duration: 1, ease: "none" }, ">0.2")
      .fromTo('.important-links-overlay-circle-before',
        { scale: 0, rotation: 45, opacity: 0 },
        { scale: 1, rotation: 45, duration: 2.5, opacity: 1, ease: "power4.out" },
        "<0.2"
      )
      .fromTo('.important-links-overlay-circle-after',
        { scale: 0, rotation: -45, opacity: 0 },
        { scale: 1, rotation: -45, duration: 2.5, opacity: 1, ease: "power4.out" },
        "<"
      )
      .to('.important-links-item:nth-child(5)', { y: "0%", x: "50%", duration: 0.4, opacity: 1, ease: "power3.out" }, "<0.2")
      .to('.important-links-item:nth-child(6)', { y: "-0%", x: "45%", duration: 0.4, opacity: 1, ease: "power3.out" }, "<0.2")
      .to('.important-links-item:nth-child(3)', { y: "-50%", x: "50%", duration: 0.4, opacity: 1, ease: "power3.out" }, "<0.2")
      .to('.important-links-item:nth-child(4)', { y: "-0%", x: "-45%", duration: 0.4, opacity: 1, ease: "power3.out" }, "<0.2")
    
      .add(() => {
        document.querySelector('.important-links-border').classList.remove('transition');
      }, "<");
  }

 
  function addDropdownActive() {
    $('.main-header').addClass('dropdownactive');
}



function removeDropdownActive() {

    if (!$('.header-link-dropdown').is(':hover') && 
        !$('.header-link-dropdown-after').is(':hover') && 
        !$('.header-link-dropdown-menu').is(':hover')) {
        $('.main-header').removeClass('dropdownactive');
    }
}

// Hover events for all relevant elements
$('.header-link-dropdown, .header-link-dropdown-after, .header-link-dropdown-menu').hover(
    addDropdownActive,
    removeDropdownActive
);







  ScrollTrigger.batch(".services-card", {
    once: true,
    start: "top 95%",
    onEnter: (element, triggers) => {
      gsap.to(element, { y: 0, opacity: 1, stagger: 0.2 });

    },
  });

  ScrollTrigger.batch(".about-us-container", {
    once: true,
    start: "top 95%",
    onEnter: (element, triggers) => {
      gsap.to('.about-us-images', { x: 0, opacity: 1, stagger: 0.2, duration: 1 });
      gsap.to('.about-us-content', { x: 0, opacity: 1, stagger: 0.2, duration: 1 });


    },
  });

  ScrollTrigger.batch(".main-title", {
    once: true,
    start: "top 95%",
    onEnter: (element, triggers) => {
      gsap.to(element, { x: 0, opacity: 1, stagger: 0.2, duration: 1 });
      // gsap.to('.about-us-content', { x: 0, opacity: 1, stagger: 0.2 , duration: 1});


    },
  });

  gsap.set(".sitelinks-card > *", { x: '-50%', opacity: 0 });
  ScrollTrigger.batch(".sitelinks-card > *", {
    once: true,
    start: "top 95%",
    onEnter: (element, triggers) => {

      gsap.to(element, { x: 0, opacity: 1, stagger: 0.15, duration: 1 });

    },
  });

  ScrollTrigger.batch(".view-all-news", {
    once: true,
    start: "top 95%",
    onEnter: (element, triggers) => {
      gsap.to('.lnews-subtitle', { x: 0, opacity: 1, stagger: 0.2, duration: 1 });
      gsap.to(element, { x: 0, opacity: 1, stagger: 0.2, duration: 1 });

    },
  });

  ScrollTrigger.batch(".lnews-card", {
    once: true,
    start: "top 95%",
    onEnter: (element, triggers) => {
      gsap.to(element, { y: 0, opacity: 1, stagger: 0.2, duration: 1 });

    },
  });


  ScrollTrigger.batch(".events-section", {
    once: true,
    start: "top 95%",
    onEnter: (element, triggers) => {
      gsap.to('.twitter-feed-container', { x: 0, opacity: 1, stagger: 0.2, duration: 1.5 });
    },
  });

  ScrollTrigger.batch(".events-card", {
    once: true,
    start: "top 95%",
    onEnter: (element, triggers) => {
      gsap.to(element, { x: 0, opacity: 1, stagger: 0.2, duration: .5, opacity: 1 });
    },
  });


  ScrollTrigger.batch(".media-section", {
    once: true,
    start: "top 95%",
    onEnter: (element, triggers) => {
      gsap.to('.media-subtitle', { x: 0, opacity: 1, stagger: 0.2, duration: 1 });
    },
  });

  ScrollTrigger.batch(".media-card", {
    once: true,
    start: "top 95%",
    onEnter: (elements, triggers) => {
      elements.forEach(element => {
        gsap.to(element, { y: 0, opacity: 1, stagger: 0.2, duration: 1.5 });

        const child = element.querySelector('.media-card-data');
        if (child) {
          gsap.to(child, { y: 0, opacity: 1, duration: 1.5, delay: 1.5 });
        }
      });
    },
  });


  ScrollTrigger.batch(".footer-links-container", {
    once: true,
    start: "top 95%",
    onEnter: (element, triggers) => {
      gsap.to((element), { x: 0, opacity: 1, stagger: 0.2, duration: 1 });
      gsap.to(('.footer-lower-container'), { y: 0, opacity: 1, delay: 1, stagger: 0.2, duration: 1 });

      gsap.to(('.footer-lower-links-container'), { x: 0, opacity: 1, delay: 2, stagger: 0.2, duration: 1 });
      gsap.to(('.footer-copyrights-container'), { x: 0, opacity: 1, delay: 2, stagger: 0.2, duration: 1 });

    },
  });

  // Subpages animations

  ScrollTrigger.batch(".overview-content", {
    once: true,
    start: "top 95%",
    onEnter: (element, triggers) => {
      gsap.to((element), { x: 0, opacity: 1, stagger: 0.2, duration: 1 });
      gsap.to(('.overview-images'), { x: 0, opacity: 1,  stagger: 0.2, duration: 1 });
    },
  });


  ScrollTrigger.batch(".account-information-text-container", {
    once: true,
    start: "top 95%",
    onEnter: (element, triggers) => {
      gsap.to((element), { x: 0, opacity: 1, stagger: 0.2, duration: 1 });
      gsap.to(('.account-information-button'), { x: 0, opacity: 1, stagger: 0.2, duration: 1 });
    },
  });

  ScrollTrigger.batch(".services-links-title-container", {
    once: true,
    start: "top 95%",
    onEnter: (element, triggers) => {
      gsap.to((element), { y: 0, opacity: 1, stagger: 0.2, duration: 1 });
    },
  });
  ScrollTrigger.batch(".services-links-card", {
    once: true,
    start: "top 95%",
    onEnter: (element, triggers) => {
      gsap.to((element), { y: 0, opacity: 1, stagger: 0.2, duration: 1 });
    },
  });
  ScrollTrigger.batch(".services-links-button ", {
    once: true,
    start: "top 95%",
    onEnter: (element, triggers) => {
      gsap.to((element), { y: 0, opacity: 1, stagger: 0.2, duration: 1 });
    },
  });

  ScrollTrigger.batch(".company-code-title ", {
    once: true,
    start: "top 95%",
    onEnter: (element, triggers) => {
      gsap.to((element), { y: 0, opacity: 1, stagger: 0.2, duration: 1 });
    },
  });
  ScrollTrigger.batch(".company-code-card ", {
    once: true,
    start: "top 95%",
    onEnter: (element, triggers) => {
      gsap.to((element), { y: 0, opacity: 1, stagger: 0.2, duration: 1 });
    },
  });

  ScrollTrigger.batch(".footer-quick-links-item", {
    once: true,
    start: "top 95%",
    onEnter: (element, triggers) => { 
      gsap.to((element), {  opacity: 1, stagger: 0.2, duration: 1 });
    },
  });

  landingswiperelement = document.querySelector('.landing-swiper')
  mediaswiperelement = document.querySelector('.media-swiper')


  if (landingswiperelement) {
    const landingswiper = new Swiper('.landing-swiper', {
      direction: 'vertical',
      loop: true,

      pagination: {
        el: '.landing-swiper-pagination',
        clickable: 'true'
      },
    });
  }

  if (mediaswiperelement) {
    const mediaswiper = new Swiper('.media-swiper', {
      direction: 'horizontal',
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 0,
      loop: false,
      navigation: {
        nextEl: '.media-swiper-button-next',
        prevEl: '.media-swiper-button-prev',
      },
      pagination: {
        el: '.media-swiper-pagination',
        type: 'fraction', // Use bullets for pagination
        clickable: true,
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
            ' of ' +
            '<span class="' + totalClass + '"></span>';
        }
      },
    });
    if (mediaswiper) {
      mediaswiper.slideToLoop(0, 0);
    }

  }
 
  $('.hamburger-container').click(function () {

    $('.header-links-container').addClass("active");
    $("body").addClass('active')

  })
 
  $('.mobile-menu-title-x').click(function () {


    $("body").removeClass('active')
    $('.header-links-container').removeClass("active");
    $('.main-header').removeClass("active")

  })
  
  $('.header-link-dropdown').click(function () {
    $(this).find('.header-link-dropdown-menu').addClass("active");
  })


  $('.mobile-menu-subtitle-text').click(function (e) {
    e.stopPropagation();
    $('.header-link-dropdown-menu').removeClass("active");

  })

  
  $('.header-link-dropdown-menu-item-container').click(function (e) {
    
    const itemList = $(this).find('.header-link-dropdown-menu-item-list');
    itemList.addClass("active");

  });

  $('.mobile-menu-title .mobile-menu-subtitle-suby').click(function (e) {
    
    $('.header-link-dropdown-menu-item-list').removeClass('active');
    

  });

 




  $('.important-links-container').click(function () {
    // Check if the clicked element doesn't have the 'active' class
    if (!$(this).hasClass("active")) {
      $(".important-links-border").addClass('transition')
      $("body").addClass('active')
      window.scrollTo({ top: 0, behavior: 'smooth' });
      $(this).addClass("active");
      $('.important-links-overlay').addClass("active");
      linktl.restart();
    }
    else {
      $("body").removeClass('active')
      $(".important-links-border").removeClass('transition')
      // window.scrollTo({ top: 0, behavior: 'smooth' });
      $(this).removeClass("active");
      $('.important-links-overlay').removeClass("active");
      $('.important-links-item').removeClass("active");

    }
  });


  $('.important-links-x').click(function () {

    $('.important-links-container').removeClass("active");
    $('.important-links-overlay').removeClass("active")
    $("body").removeClass("active")
    $('.important-links-item').removeClass("active");

  });

  $('.important-links-overlay').click(function (e) {

    if (!$(e.target).closest('.important-links-overlay-circle').length) {
      $('.important-links-container').removeClass("active");
      $('.important-links-overlay').removeClass("active");
      $("body").removeClass("active");
      $('.important-links-item').removeClass("active");
    }

  });
  // Events Section
  $('.events-card').click(function () {
    $('.events-card').removeClass("active")
    $(this).addClass("active");

  });

  function handleFooterToggle() {

    if ($(window).width() > 1200) {

      $(".footer-link-container-title").removeAttr("data-bs-toggle");

      $(".footer-link-container-title ").next('.footer-overflow-container').removeClass('accordion-collapse collapse');
      $(".footer-overflow-container").addClass("show");
      var elem = document.querySelector('.masonry-media-cards-container');
      var masonry = new Masonry(elem, {
        itemSelector: '.masonry-media-card',
        columnWidth: '.masonry-media-card',
        gutter: 32,
        percentPosition: true
      });

    } else {
      $(".footer-overflow-container").removeClass("show");
      $(".footer-overflow-container").addClass("collapse");
      $(".footer-header").attr("data-bs-toggle", "collapse");
    }
  }
  $('.media-card').click(function () {
    $('.media-center-modal').addClass("active")

  });

  $('.masonry-media-card').click(function () {
    $('.media-center-modal').addClass("active")

  });

  $('.media-modal-close-button').click(function () {
    $('.media-center-modal').removeClass("active")

  });
  // Initial check
  handleFooterToggle();

  // Run the function on window resize
  $(window).resize(function () {
    handleFooterToggle();
  });

})






