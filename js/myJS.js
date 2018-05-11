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

    // 设置点击菜单的按钮之后 页面弹出的效果
    // var animation_style = 'bounceIn';
    var animation_style = 'fadeInLeft';

    $('ul.resp-tabs-list li[class^=tab-]').click(function() {

        var tab_name = $(this).attr('data-tab-name');

        $('.resp-tabs-container').addClass('animated ' + animation_style);
        $('.resp-tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('.resp-tabs-container').removeClass('animated ' + animation_style);
        });

        $(".content_2").mCustomScrollbar("destroy");
        $(".content_2").mCustomScrollbar({
            theme: "dark-2",
            contentTouchScroll: true,
            advanced: {
                updateOnContentResize: true,
                updateOnBrowserResize: true,
                autoScrollOnFocus: false
            }
        });

        if (tab_name == "fan")
            initialize();

        return false;
    });

    

   





})

// 切换页面
function load_Tech() {
    document.getElementById("content-container").innerHTML = '<object type="text/html" data="TechBlog.html" width="100%" height="100%"></object>';
}
function load_Fan() {
    document.getElementById("content-container").innerHTML = '<object type="text/html" data="FanJourney.html" width="100%" height="100%"></object>';
}