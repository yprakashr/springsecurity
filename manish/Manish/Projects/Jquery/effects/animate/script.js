$(function () {
  $("#btn1").on("click", function () {
    $(".box").css("position", "relative");
    $(".box").animate({ left: "50%" }, 5000);
    $(".box").animate({ height: "100px" }, 5000);
    $(".box").animate({ width: "100px" }, 5000);
    $(".box").animate({ height: "10px" }, 5000);
    $(".box").animate({ width: "10px" }, 5000);
    $(".box").animate({ left: "10px" }, 5000);
  });
  $("#btn2").on("click", function () {
    $(".box").stop();
    $(".box").stop();
    $(".box").stop();
    $(".box").stop();
    $(".box").stop();
    $(".box").stop();
  });
});
