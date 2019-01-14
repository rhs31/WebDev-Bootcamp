// // Check off specific todos by clicking
// $("li").click(function(){
// 	if($(this).css("color") === "rgb(128, 128, 128)")
// 	{
// 		$(this).css 
// 		({
// 			color: "black",
// 			textDecoration: "none" 
// 		});
// 	}
// 	else
// 	{
// 		// $(this).css("color", "gray");
// 		// $(this).css("text-decoration", "line-through");
// 		$(this).css //this could be done with above two lines, but I made it an object with certain properties instead
// 		({
// 			color: "gray",
// 			textDecoration: "line-through" //in js objects, this must be camel-cased
// 		});
// 	}
// });
// ABOVE IS OVERLY COMPLICATED WAY OF CROSSING OFF

//check off specific todos by clicking, simplified
$("ul").on("click", "li", function() //with on, we have to go through the ul, because we must add a listener to something that exists when the page loads. li is an argument, because it's happneing on the li within the ul (that may or may not be there initially)
{
	$(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(event)
{
	$(this).parent().fadeOut(500, function()
	{
		$(this).remove(); //removes li, the parent element
	});
	event.stopPropagation(); //this stops event bubbling, ie stops events for parent html from happening. 
});

//add todo
$("input[type='text']").keypress(function(event)
{
	if(event.which === 13) //13 is the enter key
	{
		
		//grab new todo text from input
		var todoText = $(this).val();
		//clear input box
		$(this).val("");
		//create li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});
$(".fa-plus").click(function()
{
	$("input[type='text'").fadeToggle();
});