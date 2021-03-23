console.log("Your index.js file is loaded correctly!");
function fade() {
    $('.preloader').fadeOut("slow");
}
setTimeout(fade, 1000);

var stickyNav = $("header").offset().top; 
var sticky = function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop>stickyNav){
        $("header").addClass("sticky");
    }else {
        $("header").removeClass("sticky");
    }
}
sticky();
$(window).scroll(function(){
    sticky();
});
//this function works, but its alignment changes on scroll//
//hero image alignment also changes on scroll//

$("a").hover(function(){
    $(this).css({
        color: "#6973ED"
    });
}, function(){
    $(this).css({
        color: "black"
    });
});

$("#email").hover(function(){
    $(this).css({
        color: "#000000"
    });
}, function(){
    $(this).css({
        color: "#333333"
    });
});