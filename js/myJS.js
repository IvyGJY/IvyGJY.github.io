jQuery(document).ready(function($){

    $(window).load(function(){
        $('#spinner').fadeOut(200);
        $('#prelodad').delay(200).fadeOut('slow');
        $('.wrapper').fadeIn(200);
    });

    $('#menuTab').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true
    });


})