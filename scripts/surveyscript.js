$('.survey-submit-button').click(function() {
    $('.survey-modal').addClass('active')
})

$('.survey-close-x').click(function() {
    $('.survey-modal').removeClass('active')
})

$('.survey-choice-container').click(function (e) { 
    e.preventDefault();
    $(this).parent().find('.survey-choice-container').removeClass('active')
    $(this).addClass('active')
});