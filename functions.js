AOS.init();
bodymovin.loadAnimation({
  container: element, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: "logo.json", // the path to the animation json
});

$("#element").click(function() {
  window.location = "http://akash.nyc/Resume.pdf";
});

$(window).load(function () {
    //normally you'd wait for document.ready, but you'd likely to want to wait
    //for images to load in case they reflow the page
    $('#element').delay(5000) //wait 5 seconds
        .animate({
            //animate jQuery's custom "scrollTop" style
            //grab the value as the offset of #second from the top of the page
            'scrollTop': $('#content').offset().top
        }, 300); //animate over 300ms, change this to however long you want it to animate for
});
