$(function () {
  // ***********************************
  $("#btn1").on("click", function () {
    $("p").toggle(200);
  });

  // ***********************************
  $("#btn2").on("click", function () {
    $("p").fadeOut(500);
  });

  // ***********************************
  $("#btn3").on("click", function () {
    $("p").fadeIn(500);
  });

  // ***********************************
  $("#btn4").on("click", function () {
    $("p").fadeToggle(500);
  });

  // ***********************************
  $("#btn5").on("click", function () {
    $("p").fadeTo(500, 0.5);
  });
});
