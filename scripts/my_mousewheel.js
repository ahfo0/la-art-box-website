if($(window).width() > 1023){
    $(document).ready(function() {
    $('html, body, *').mousewheel(function(e, delta) {
    this.scrollLeft -= (delta*100);
    e.preventDefault();
    });
    });
}
// pc만 적용하기 위해 새로고침
if(matchMedia("screen and (max-width: 1023px)").matches){ console.log("mobile"); }else if(matchMedia("screen and (min-width: 1024px)").matches){ console.log("pc"); }
window.onresize = function(){ document.location.reload(); };