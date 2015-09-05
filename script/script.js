$(document).ready(function() {
getWidthAndHeight();
});
// make sure div stays full width/height on resize
$(window).resize(function() {
getWidthAndHeight();
});
function getWidthAndHeight (){
var winWidth = $(window).width();
var winHeight = $(window).height();
$(‘div#wrap’).css({‘width’: winWidth,’height’: winHeight,});
}