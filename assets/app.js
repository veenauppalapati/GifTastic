$("document").ready(function(){

  // we created an array to store the buttons

  var animals=[];
  console.log(animals);
//================================================

function renderButtons(){

  /*------------------------------------------*/
  for (var i = 0; i < animals.length; i++){
    $(".buttonsection").empty();
    // we created a button tag
    var button = $("<button>");
    button.addClass("userButtons");
    button.attr("data-name", animals[i]);
    var buttonName = button.text(animals[i]); 
     $("#buttons-view").append(buttonName);
  }
  /*------------------------------------------*/
}
renderButtons();

//================================================
//===============EVENTLISTENER ===================//
  
  $("#submitButton").on("click", function(event){
  event.preventDefault();

  var animal = $("#userinput").val().trim();
  animals.push(animal);
  renderButtons();

/* ---------------------------------------------*/

  $(".userButtons").on("click", function(){

  alert("I'm working");

  });

//================================================

 }); // CLOSING THE USER

//================================================

});// CLOSING THE READY FUNCTION