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
//================================================
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
    // This is our API key
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=9kmoXaUOhNIXuAzBROxg37xQmuBP2X01&limit=10";
    //  Here we are building the URL we need to query the database
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(queryURL);
      console.log(response);
      // variable to store the informationn from the data
      var results = (response.data);
      console.log(results);

      for(var i = 0; i<results.length; i++){
        
         var animalImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            animalImage.addClass("gifs")
           animalImage.attr("animate", results[i].images.original.url);
           animalImage.attr("still", results[i].images.original_still.url);
         animalImage.attr("src", results[i].images.original_still.url );

          animalImage.attr("datastate","still");
            $("#gifssection").prepend(animalImage);
          }
 
      $(".gifs").on("click", function() {
        var state = $(this).attr("datastate");
        if(state  === "still")
        {
          // alert("im working");
          $(this).attr("src", $(this).attr("animate"));
          $(this).attr("datastate", "animate")
        }
       else {
         $(this).attr("src", $(this).attr("still"))
         $(this).attr("datastate", "still")

       }
    });
          
        
    });

       

  });// CLOSING THE EVENT USERBUTTONS

//================================================

 }); // CLOSING THE EVENT SUBMIT BUTTON

//============== END OF EVENTLISTENER ============
//================================================

});// CLOSING THE READY FUNCTION