function initService(){
    $('#nails-service').hide();
    $('#grooming-service').hide();
    $('#full-service').hide();

    $('#hair').on('click', function() {
        $('#nails-service').hide();
        $('#grooming-service').hide();
        $('#full-service').hide();
        $('#hair-service').show();
    });
    
    $('#nails').on('click', function() {
        $('#nails-service').show();
        $('#grooming-service').hide();
        $('#full-service').hide();
        $('#hair-service').hide();
    });
    
    $('#grooming').on('click', function() {
        $('#nails-service').hide();
        $('#grooming-service').show();
        $('#full-service').hide();
        $('#hair-service').hide();
    });
    
    $('#full').on('click', function() {
        $('#nails-service').hide();
        $('#grooming-service').hide();
        $('#full-service').show();
        $('#hair-service').hide();
    });
}

window.onload=initService;