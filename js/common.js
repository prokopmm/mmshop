var i, c, y, v, s, n;
v = document.getElementsByClassName("youtube");
if (v.length > 0) {
    s = document.createElement("style");
    s.type = "text/css";
    s.innerHTML = '.youtube{max-width:100%;height:inherit;overflow:hidden;position:relative;cursor:hand;cursor:pointer}.youtube .thumb{bottom:0;left:0;margin:auto;max-width:100%;position:absolute;right:0;top:0;width:100%;height:auto}.youtube .play{-webkit-transform: translateY(-50%);-moz-transform: translateY(-50%);-ms-transform: translateY(-50%);-o-transform: translateY(-50%);transform: translateY(-50%);height:97px;    left: 0;margin: auto;right: 0;position:absolute;top:50%;width:97px;background:url("img/play.png") no-repeat}';
    document.body.appendChild(s)
}
for (n = 0; n < v.length; n++) {
    y = v[n];
    i = document.createElement("img");
    i.setAttribute("src", "../../i.ytimg.com/vi/" + y.id + "/hqdefault.jpg");
    i.setAttribute("class", "thumb");
    c = document.createElement("div");
    c.setAttribute("class", "play");
    y.appendChild(i);
    y.appendChild(c);
    y.onclick = function() {
        var a = document.createElement("iframe");
        a.setAttribute("src", "../../www.youtube.com/embed/" + this.id + "@autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1&rel=0&showinfo=0");
        a.setAttribute("allowfullscreen","");
        a.style.width = this.style.width;
        a.style.height = this.style.height;
        this.parentNode.replaceChild(a, this)
    }
};

$(document).ready(function() {

    now = new Date();
    var perem = (24-now.getHours())*3600;
    $(".countdown").attr("data-timer", perem);
    $(".countdown").TimeCircles({
        "animation": "smooth",
        "use_inner_background": true,
        "circle_inner_bg_color": "#FF7C59",
        "bg_width": 1.2,
        "fg_width": 0.070,
        "circle_bg_color": "#FFF",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#009FF0",
                "show": false
            },
            "Hours": {
                "text": "Часов",
                "color": "#009FF0",
                "show": true
            },
            "Minutes": {
                "text": "Минут",
                "color": "#009FF0",
                "show": true
            },
            "Seconds": {
                "text": "Секунд",
                "color": "#009FF0",
                "show": true
            }
        }
    });
    timer_hour = $('.textDiv_Hours span').html();
    if (timer_hour == 4 || timer_hour == 3 || timer_hour == 2 ) {
        $('.textDiv_Hours h4').text('Часа');
    }
    if (timer_hour == 1 ) {
        $('.textDiv_Hours h4').text('Час');
    }

    $("a[href^='#']").click(function(){
                        var _href = $(this).attr("href");
                        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                        return false;
                });

    $(".rev_block").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        lazyLoad: false,
        nav: true,
        items: 1,
        margin: 10
    });
    $(".nature_slider").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        lazyLoad: false,
        nav: true,
        items:1,
        margin: 0,
        responsiveClass:true,
        dots:false,
        responsive:{
        665:{
            items:2,
            margin: 10,
            dots:false
        },
        960:{
            items:1,
            margin: 10,
            dots:false
        }
        
    }
    })
});