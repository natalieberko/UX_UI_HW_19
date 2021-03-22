console.log("Your index.js file is loaded correctly!");
function fade() {
    $('.preloader').fadeOut("slow");
}
setTimeout(fade, 1000);

$(document).ready(function(){
$(".viewProject").hover(function(){
    $(this).animate({ width: "50px" , height: "50px"});
}, function() {
    $(this).animate({ width: "100px", height: "100px" });
});
});