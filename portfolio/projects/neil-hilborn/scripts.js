$("#credits").on("click", function(){
    $("#body").addClass("hidden");
    $("#creditsPage").removeClass("hidden");
  });
  
  $("#goBack").on("click", function(){
    $("#creditsPage").addClass("hidden");
    $("#body").removeClass("hidden");
  });
  
  
  $("document").ready(function(){
    $(".letters").fadeOut(3500);
  });
  
