$("document").ready(function(){

  // we created an array to store the buttons

  var animals=[];
  console.log(animals);
//================================================
//===============FUNCTIONS ===================//

function renderButtons(){

$("#buttons-view").empty();
  /*------------------------------------------*/
  for (var i = 0; i < animals.length; i++){
     
    // we created a button tag
    var button = $("<button>");
    button.addClass("userButtons");
    button.attr("data-name", animals[i]);
    var buttonName = button.text(animals[i]); 
     $("#buttons-view").append(buttonName);

  }

  /*------------------------------------------*/
}

//============= END OF FUNCTIONS ==================
//================================================
//===============EVENTLISTENER ===================//
  
  $("#submitButton").on("click", function(event){
  event.preventDefault();

  var animal = $("#userinput").val().trim();
  animals.push(animal);
  renderButtons();

  $("#userinput").val("");
/* ---------------------------------------------*/
    
  $(".userButtons").on("click", function(){
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=9kmoXaUOhNIXuAzBROxg37xQmuBP2X01&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(queryURL);
      console.log(response);

      var results = (response.data);
       // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var animalDiv = $("<div>");

            // Creating and storing an image tag
            var animalImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            animalImage.attr("src", results[i].images.fixed_height.url);

             // Appending the paragraph and image tag to the animalDiv
            
            animalDiv.append(animalImage);
            $("#gifssection").prepend(animalDiv);
          }


    });

  });// CLOSING THE EVENT USERBUTTONS

//================================================

 }); // CLOSING THE EVENT SUBMIT BUTTON

//============== END OF EVENTLISTENER ============
//================================================

});// CLOSING THE READY FUNCTION