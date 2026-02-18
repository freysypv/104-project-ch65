$(document).ready(function() {
    $('#select-service').change(function() {
        let description = $(this).find('option:selected').data('description');

        if (description) {
            $('#data-description p').text(description);
        } else {
            $('#data-description p').text('No description available.');
        }
    });

    $('#select-service').change(function() {
        let price = $(this).find('option:selected').data('price');

        if (price) {
            $('#data-price p').text(price);
        } else {
            $('#data-price p').text('No price available call fosr information.');
        }
    });

    $('button[type="submit"]').click(function() {
        $('#form-select').text('');
    });
  
    $('button[type="reset"]').click(function() {
        $('#data-description p').text('');
    });


});










