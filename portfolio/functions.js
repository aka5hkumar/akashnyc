bodymovin.loadAnimation({
  container: element, // the dom element that will contain the animation
  renderer: 'svg',
  loop: 1,
  autoplay: true,
  path: "logo.json", // the path to the animation json
});

$("#element").click(function() {
  $('body,html').animate({
      scrollTop: 0
  }, 800);
});