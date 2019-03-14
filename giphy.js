// variable that contains buttons with search inputs

var things  = ["Bugs Bunny","Bart Simpson","Homer Simpson", "Dexter Laboratory", "Rocko's Modern Life"];

// function to display info from giphy API and dynamically adding the function to a button
function displayInfo() {

    var input = $(this).attr("data-input");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
         input + "&api_key=UMEHjzguS96IWvRp25mDaMAc5hvegH3D&limit10";
        
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
            console.log(queryURL);
            console.log(response);
            var results = response.data;
            for(var i=0;i< 10;i++){
                var inputBox = $("<div>");                    
                var p = $("<p>").text("Rating: " + results[i].rating);
                var inputImage = $("<img>");
                inputImage.attr('src', results[i].images.fixed_height.url)
                inputBox.append(p);
                inputBox.prepend(inputImage);
            $("#results").prepend(inputBox);}  
    });     
}
// function that creates a new button inside the container div
      function addButtons() {
        $("#container").empty();
       
        for (var i = 0; i < things.length; i++) {
        var b = $("<button>");
          b.addClass("thing");
          b.attr("data-input", things[i]);
          b.text(things[i]);
          $("#container").append(b);
        }
      }
      $("#add-button").on("click", function(event) {
        event.preventDefault();
        var input = $("#search").val().trim();
        things.push(input);
        addButtons();
      });
      
      $(document).on("click", ".thing", displayInfo);
      addButtons();

    
// $(document).on("click", ".image", function(){
//       $(this).data().currentstate);

//     if($(this).data().currentstate === 'animated') {
//       $(this).attr('src', $(this).data().still)
//       $(this).data('currentstate', 'still')
//   } else {
//       $(this).attr('src', $(this).data().animated)
//       $(this).data('currentstate', 'animated')
//   }
//     // });




