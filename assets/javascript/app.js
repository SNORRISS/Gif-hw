$(document).on("click", ".gif-search", function() {
  console.log("gif searching");
  var search = $(this).attr("data-search");

  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    search +
    "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.data;

    for (var i = 0; i < results.length; i++) {
      var newDiv = $("<div>");
      var p = $("<p>").text("Rating: " + results[i].rating);

      var divImage = $("<img>");

      divImage.attr("src", results[i].images.fixed_height.url);

      newDiv.append(p);
      newDiv.append(divImage);

      $("#gifs").prepend(newDiv);
    }
  });
});

$(document).on("click", ".submit-button", function() {
  var search = $("#search").val();
  newButton = $("<button>");
  newButton.attr("class", "gif-search");
  newButton.text(search);
  newButton.attr("data-search", search);

  $("#buttons").append(newButton);
});
