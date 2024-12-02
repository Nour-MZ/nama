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
  // $("html, body").animate({ scrollTop: 0 }, "slow");
  window.scrollTo({ top: 0, behavior: 'smooth' });
  $(this).toggleClass("active");
  $('.important-links-overlay').toggleClass("active")

});

  // Events Section
$('.events-card').click(function () {
  $('.events-card').removeClass("active")
  $(this).addClass("active");

});
