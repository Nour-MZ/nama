$('.bill-calculator-submit').click(function() {
    const category = $('.bill-calculator-category').val();
    const lastReading = parseFloat($('.bill-calculator-last-reading').val());
    const currentReading = parseFloat($('.bill-calculator-current-reading').val());
    
    if (!category || isNaN(lastReading) || isNaN(currentReading)) {
        alert('Please fill in all required fields');
        return;
    }


    $('.bill-calculator-modal').addClass('active');;
});

$('.bill-calculator-modal-close, .bill-calculator-modal-done').click(function() {
    $('.bill-calculator-modal').removeClass('active');;
});

$(window).click(function(event) {
    if ($(event.target).is('.bill-calculator-modal')) {
        $('.bill-calculator-modal').removeClass('active');;
    }
});