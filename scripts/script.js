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
