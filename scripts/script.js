   
   $(document).ready(function () {


    //gasp animations
    const landingtimeline = gsap.timeline({ defaults: { duration: 1 } });

    landingtimeline.to(".landing-pattern-container", { y: 0 });
    landingtimeline.to(".main-header", { y: "0" }, 0.3);
    landingtimeline.to(".landing-content-main", { x: "0" });
    landingtimeline.to(".swiper-pagination", { opacity: "1", duration: 0.5 }, "<"); // Same start time
    landingtimeline.to(".important-links-container", { opacity: "1", duration: 0.5 }, "<");
  
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
          gsap.to('.about-us-content', { x: 0, opacity: 1, stagger: 0.2 , duration: 1});
          

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
          gsap.to('.lnews-card', { y: 0, opacity: 1, stagger: 0.2, duration: 1 });
      },
    });

    ScrollTrigger.batch(".events-section", {
      once: true,
      start: "top 95%",
      onEnter: (element, triggers) => {
          gsap.to('.twitter-feed-container', { x: 0, opacity: 1, stagger: 0.2, duration: 1.5 });
          gsap.to('.events-container', { x: 0, opacity: 1, stagger: 0.2, duration: 1.5 });
        },
    });

    ScrollTrigger.batch(".media-section", {
      once: true,
      start: "top 95%",
      onEnter: (element, triggers) => {
          gsap.to('.media-subtitle', { x: 0, opacity: 1, stagger: 0.2, duration: 1 });
          gsap.to('.media-card', { y: 0, opacity: 1, stagger: 0.2, duration: 1.5 });
          gsap.to('.media-card-data', { y: 0, opacity: 1, stagger: 0.2, duration: 1.5, delay: 1.5 });
        },
    });

    ScrollTrigger.batch(".footer-links-container", {
      once: true,
      start: "top 95%",
      onEnter: (element, triggers) => {
          gsap.to((element), { x: 0, opacity: 1, stagger: 0.2, duration: 1 });
          gsap.to(('.footer-lower-container'), { y: 0, opacity: 1,delay: 1, stagger: 0.2, duration: 1 });
          
          gsap.to(('.footer-lower-links-container'), { x: 0, opacity: 1,delay: 2, stagger: 0.2, duration: 1 });
          gsap.to(('.footer-copyrights-container'), { x: 0, opacity: 1,delay: 2, stagger: 0.2, duration: 1 });
          
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
  $('.important-links-container').click(function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    $(this).toggleClass("active");
    $('.important-links-overlay').toggleClass("active")

  });


  $('.important-links-x').click(function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    $('.important-links-container').removeClass("active");
    $('.important-links-overlay').removeClass("active")

  });
    // Events Section
  $('.events-card').click(function () {
    $('.events-card').removeClass("active")
    $(this).addClass("active");

  });

    
   })
   
   
   
   
   
   
  