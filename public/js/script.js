
$(document).ready(function() { // will be executed immediately

  //$(".fancyBox").fancybox();

});

$(window).load(function() { //Run a function when the page is fully loaded including graphics.
  // run code

  //$("#date").datepicker();
});

$(window).resize(function() {});

$(window).resize(function() {
  winHeight = $(window).height();
  winWidth = $(window).width();

});

$(window).scroll(function() { // FOR WINDOW IF SCROLLING
  winScroll = $(window).scrollTop();

});

function coming() {
  alert("This feature will be coming soon.");
}

function scrollToContact() {
  var contactPosition = $("#contactForm").offset().top;
  $("html, body").animate({
    scrollTop: contactPosition
  }, 1000);
}
