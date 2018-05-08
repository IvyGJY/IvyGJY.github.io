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

    function load_home() {
        document.getElementById("tech").innerHTML = '<object type="text/html" data="TechBlog.html" width="100%" height="580px"></object>';
          }


})