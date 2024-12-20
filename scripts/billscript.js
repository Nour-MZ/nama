$('.bill-calculator-submit').click(function() {
    // Get form values
    const category = $('.bill-calculator-category').val();
    const lastReading = parseFloat($('.bill-calculator-last-reading').val());
    const currentReading = parseFloat($('.bill-calculator-current-reading').val());
    
    // Validate inputs
    if (!category || isNaN(lastReading) || isNaN(currentReading)) {
        alert('Please fill in all required fields');
        return;
    }

    // Calculate consumption
    const consumption = currentReading - lastReading;
    
    // Calculate bill (example rate: $0.12 per kWh)
    const rate = 0.12;
    const totalBill = consumption * rate;

    // Update modal with results
    $('.bill-calculator-consumption').text(consumption.toFixed(2) + ' kWh');
    $('.bill-calculator-total').text('$' + totalBill.toFixed(2));

    // Show modal
    $('.bill-calculator-modal').addClass('active');;
});

// Close modal handlers
$('.bill-calculator-modal-close, .bill-calculator-modal-done').click(function() {
    $('.bill-calculator-modal').removeClass('active');;
});

// Close modal when clicking outside
$(window).click(function(event) {
    if ($(event.target).is('.bill-calculator-modal')) {
        $('.bill-calculator-modal').removeClass('active');;
    }
});