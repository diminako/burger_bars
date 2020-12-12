// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".complete").on("click", function (event) {
    var id = $(this).data("id");
    $.ajax("/api/games/" + id, {
      type: "PUT",
      data: { completed: 1 }
    }).then(
      function () {
        location.reload();
      }
    );
  });

  $(".formInput").on("submit", function (event) {
    event.preventDefault();
    var newGame = {
      name: $("#gameAdd").val().trim(),
    };
    $.ajax("/api/games", {
      type: "POST",
      data: newGame
    }).then(
      function () {
        location.reload();
      }
    );
  });
});