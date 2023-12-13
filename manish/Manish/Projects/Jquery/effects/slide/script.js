$(function () {
  $(".parent").on({
    click: function () {
      $(".child").slideToggle(200);
    },
    mouseenter: function () {
      $(this).css("cursor", "pointer");
    },
  });
});
