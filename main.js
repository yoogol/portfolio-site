console.log("Loading");

$(".text-box").on("click", function() {
  console.log("text box clicked");
  $(".name").css("color", "black").css("font-size", "18px");
  $(".title").css("color", "black");
  $(".text-container").css("align-items", "flex-start");

})

$(".about").on("click", function() {
  console.log("about clicked");
  $(".circle").html("about").removeClass("hidden");

})


$(".projects").on("click", function() {
  console.log("projects clicked");
  $(".circle").html("projects").removeClass("hidden")
})

$(".contact").on("click", function() {
  console.log("contact clicked");
  $(".circle").html("contact").removeClass("hidden")
})

$(".name").on("click", function() {
  console.log("contact clicked");
  $(".circle").html("contact").addClass("hidden");
  $(".name").css("font-size", "60px");
  $(".text-container").css("align-items", "center")
})
