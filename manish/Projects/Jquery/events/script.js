$(document).ready(function () {
  $("#btn1").click(function () {
    $("#c").hide;
  });

  //   ***************************************
  $("#btn2").click(function () {
    $("#c").show();
  });

  //   ***************************************
  $("#a").hover(
    function () {
      $(this).css("color", "red");
    },
    function () {
      $(this).css("color", "black");
    }
  );

  //   ***************************************
  $("#b").mousedown(function () {
    $(this).css("color", "blue");
  });

  //   ***************************************
  $("#b").mouseup(function () {
    $(this).css("color", "black");
  });

  //   ***************************************
  $("#name").focus(function () {
    $(this).css("background-color", "plum");
  });

  //   ***************************************
  $("#name").blur(function () {
    $(this).css("background-color", "white");
  });

  //   ***************************************
  $("#c").on({
    mouseenter: function () {
      $(this).css("color", "orangered");
    },
    mouseleave: function () {
      $(this).css("color", "green");
    },
    click: function () {
      $(this).css("color", "purple");
    },
  });
});
