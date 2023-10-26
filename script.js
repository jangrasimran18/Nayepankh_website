$(document).ready(function() {
  const slideWidth = $(".slide").width();
  $(".slide:last-child").prependTo(".slider");

  function slideNext() {
    $(".slider").animate(
      {
        marginLeft: -slideWidth
      },
      1000,
      function() {
        $(".slide:first-child").appendTo(".slider");
        $(".slider").css("margin-left", 0);
      }
    );
  }

  setInterval(slideNext, 3000); // Adjust the interval (in milliseconds) for autoplay
});


