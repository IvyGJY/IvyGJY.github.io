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

        $(".content-2").mCustomScrollbar("destroy");
        $(".content-2").mCustomScrollbar({
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

    //切换中间的界面（点击 Read More 之后）
    function redimensionnement() {

        if (window.matchMedia("(max-width: 800px)").matches) {
            $(".content-2").mCustomScrollbar("destroy");
            $(".resp-vtabs .resp-tabs-container").css("height", "100%");
            $(".content-2").css("height", "100%");
        } else {

            $(".resp-vtabs .resp-tabs-container").css("height", "580px");
            $(".content-2").css("height", "580px");
            $(".content-2").mCustomScrollbar("destroy");
            $(".content-2").mCustomScrollbar({
                theme: "dark-2",
                contentTouchScroll: true,
                advanced: {
                    updateOnContentResize: true,
                    updateOnBrowserResize: true,
                    autoScrollOnFocus: false
                }
            });

        }

    }

    window.addEventListener('load', redimensionnement, false);
    window.addEventListener('resize', redimensionnement, false);

    // Fantastic Journey
    $('a.read_m').click(function(){
        var pagina = $(this).attr('href');
        var postdeatil = pagina + '-page';
        if (pagina.indexOf('#post-') != -1){
            $('#blog-page').hide();

            $(postdetail).show();
            $(".tab-FanJour").trigger('click');
        }
        return false;
    });
    $('a.read_more').click(function() {
        var pagina = $(this).attr('href');
        var postdetail = pagina + '-page';

        if (pagina.indexOf("#post-") != -1) {

            $('#blog-page').hide();

            $(postdetail).show();
            $(".tab-FanJour").trigger('click');
        }
        return false;
    });

    //pagination All
    $('.content-post a').click(function() {
        var pagina = $(this).attr('href');

        if (pagina == "#fanJour") {

            $('.content-post').hide();
            $('#blog-page').show();
            $(".tab-FanJour").trigger('click');

        }

        return false;

    });

    //pagination blog
    $('.content-post #pagination').click(function() {


        var pagina = $(this).attr('href');
        var postdetail = pagina + '-page';

        if (pagina.indexOf("#post-") != -1) {

            $('#blog-page').hide();
            $('.content-post').hide();

            $(postdetail).show();
            $(".tab-FanJour").trigger('click');
        }

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