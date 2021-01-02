$(function(){
  $("p:first").css("margin-top", "2em");
  $(".voeux").hide();

  function showp1() {
    $("p:eq(1)").show();
    $("div p:eq(1)").css("background-color", "rgba(0,0,255,0.5)");
  }
  setTimeout(showp1, 1000);

  function showp2() {
    $("p:eq(2)").show();
    $("p:eq(2)").css("background-color", "orange");
  }
  setTimeout(showp2, 2000);

  function showp3() {
    $("p:last").show();
    $("p:last").css("background-color", "pink");
  }
  setTimeout(showp3, 3000);

  function newWish() {
    $(".voeux").text("Happy birthday !");
    $(".card").addClass("newBody");
  }
  setTimeout(newWish, 4000);
});
