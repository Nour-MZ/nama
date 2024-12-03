
$(document).ready(function () {


  //gasp animations
  const landingtimeline = gsap.timeline({ defaults: { duration: 1 } });

  landingtimeline.to(".landing-pattern-container", { y: 0 });
  landingtimeline.to(".main-header", { y: "0" }, 0.3);
  landingtimeline.to(".landing-content-main", { x: "0" });
  landingtimeline.to(".swiper-pagination", { opacity: "1", duration: 0.5 }, "<"); // Same start time
  landingtimeline.to(".important-links-container", { opacity: "1", duration: 0.5 }, "<");


  const linktl = gsap.timeline({ paused: true });

  linktl.to('.important-links-button', { duration: 0.6, delay: 1, rotation: 180, ease: "none" })
    .to('.important-links-overlay', { duration: 0.4, backgroundSize: '43rem', ease: "power3.in" }, "<")
    .to('.important-links-overlay-circle', { opacity: 1, duration: 1, ease: "none" }, ">0.2")
    .to('.important-links-item:nth-child(1)', { y: "0%", x: "50%", duration: 0.4, opacity: 1, ease: "none" }, "<0.2")
    .to('.important-links-item:nth-child(2)', { y: "-0%", x: "50%", duration: 0.4, opacity: 1, ease: "none" }, "<0.2")
    .to('.important-links-item:nth-child(3)', { y: "-50%", x: "50%", duration: 0.4, opacity: 1, ease: "none" }, "<0.2")
    .to('.important-links-item:nth-child(4)', { y: "-0%", x: "-50%", duration: 0.4, opacity: 1, ease: "none" }, "<0.2")




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

  // ScrollTrigger.batch(".media-card-data", {
  //   once: true,
  //   start: "top 95%",
  //   onEnter: (element, triggers) => {
  //       gsap.to(element, { y: 0, opacity: 1, stagger: 0.2, duration: 1.5 });
  //     },
  // });


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

  const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: 'true'
    },
  });

  //Landing Page section
  $('.hamburger-container').click(function () {


    $("body").toggleClass('active')
    $('.header-links-container').toggleClass("active");
    $('.main-header').addClass("active")

  })

  $('.important-links-container').click(function () {
    // Check if the clicked element doesn't have the 'active' class
    if (!$(this).hasClass("active")) {
      $("body").addClass('active')
      window.scrollTo({ top: 0, behavior: 'smooth' });
      $(this).addClass("active");
      $('.important-links-overlay').addClass("active");
      linktl.restart();
    }
    else {
      $("body").removeClass('active')
      // window.scrollTo({ top: 0, behavior: 'smooth' });
      $(this).removeClass("active");
      $('.important-links-overlay').removeClass("active");
    }
  });


  $('.important-links-x').click(function () {

    $('.important-links-container').removeClass("active");
    $('.important-links-overlay').removeClass("active")
    $("body").removeClass("active")

  });

  $('.important-links-overlay').click(function () {

    $('.important-links-container').removeClass("active");
    $('.important-links-overlay').removeClass("active")
    $("body").removeClass("active")

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
    } else {
      $(".footer-overflow-container").removeClass("show");
      $(".footer-overflow-container").addClass("collapse");
      $(".footer-header").attr("data-bs-toggle", "collapse");
    }
  }

  // Initial check
  handleFooterToggle();

  // Run the function on window resize
  $(window).resize(function () {
    handleFooterToggle();
  });

})






