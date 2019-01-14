if(jQuery)
{
	alert("Hi");
}
//select all divs and give purple background
$("div").css("background", "purple");
//select divs with class highlight and make them 200px wide
$(".highlight").css("width", "200px");
//select divs with id third and give them a 2px orange border
$("#third").css("border", "2px solid orange");
//select the first div and change the color to pink
$("div: first-of-type").css("color", "pink");