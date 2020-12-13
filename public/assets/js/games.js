// adds interactivity to the completed buttons next to the backlog games
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


  // grabs our value from the form input
  $(".formInput").on("submit", function (event) {
    event.preventDefault();
    var newGame = {
      name: $("#gameCreate").val().trim(),
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