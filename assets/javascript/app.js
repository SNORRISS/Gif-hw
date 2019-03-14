var topics = ["Cat","Dog","Fox","CS:GO","Path of Exile","Tekken", "Dota", "Tetris","Sonic","Splatoon"];


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
    console.log(results);

    for (var i = 0; i < results.length; i++) {
      var newDiv = $("<div>");
      var p = $("<p>").text("Rating: " + results[i].rating);

      var divImage = $("<img>");

      divImage.attr("src", results[i].images["480w_still"].url);
      divImage.attr("ani", results[i].images.fixed_height.url);

      newDiv.append(p);
      newDiv.append(divImage);

      $("#gifs").prepend(newDiv);
    }
  });
});

$(document).on("click", "img", function() {
  var source = $(this).attr("src");
  var ani = $(this).attr("ani");
  $(this).attr("src", ani);
  $(this).attr("ani", source);

});

function appendButtons() {

  for(var i = 0; i < topics.length; i++){
    newButton = $("<button>");
    newButton.attr("class", "gif-search");
    newButton.text(topics[i]);
    newButton.attr("data-search", topics[i]);
    console.log(newButton);
    $("#buttons").append(newButton);
  }

}



$(document).on("click", ".submit-button", function() {

  var search = $("#search-bar").val();
  topics.push(search);

  $("#buttons").html("");

  
  appendButtons();


});


appendButtons();
