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

// $('.container').delay(3000).animate({
//     scrollTop: $('#content').offset().top
//   }, 2000);
