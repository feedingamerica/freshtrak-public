$(document).ready (function(){
    var navbarCollapse = function() {
    
        if ($(".main-wrapper #mainNav").offset().top > 100) {
         
          $(".main-wrapper #mainNav").addClass("navbar-shrink");
        } else {
          $(".main-wrapper #mainNav").removeClass("navbar-shrink");
        }
      };
       // Collapse now if page is not at top
       navbarCollapse();
       // Collapse the navbar when page is scrolled
       $(window).scroll(navbarCollapse);
});