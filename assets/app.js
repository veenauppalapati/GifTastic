$("document").ready(function  (){

	// we are creating an event listener of on click... on the click of the button submit, the steps that follow shall be executed
	$("#submitButton").on("click", function(){

		// retrieve the value of userInput
		var userInput = $("#userinput").val();
		console.log(userInput);
		
	});
});