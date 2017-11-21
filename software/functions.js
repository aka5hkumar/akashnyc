bodymovin.loadAnimation({
  container: element, // the dom element that will contain the animation
  renderer: 'svg',
  loop: 1,
  autoplay: true,
  path: "logo.json", // the path to the animation json
});

$("#element").click(function() {
  window.location = "../#content";
});
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        $('#back-to-top').tooltip('show');

});
