$('.bill-calculator-submit').click(function() {
    const category = $('.bill-calculator-category').val();
    const lastReading = parseFloat($('.bill-calculator-last-reading').val());
    const currentReading = parseFloat($('.bill-calculator-current-reading').val());
    
    if (!category || isNaN(lastReading) || isNaN(currentReading)) {
        alert('Please fill in all required fields');
        return;
    }

    const consumption = currentReading - lastReading;

    const rate = 0.12;
    const totalBill = consumption * rate;

    $('.bill-calculator-consumption').text(consumption.toFixed(2) + ' kWh');
    $('.bill-calculator-total').text('$' + totalBill.toFixed(2));

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