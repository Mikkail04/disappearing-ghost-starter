$(".hide-button").click(function(){
    $(".ghost-image").hide();                   
    });
$(".show-button").click(function(){
    $(".ghost-image").show();                   
    });
$(".update-img-button").click(function(){
    $("img").attr("src", "https://www.kindpng.com/picc/m/103-1038268_not-scary-cartoon-ghost-hd-png-download.png");                   
    });
$(".message-button").click(function(){
  let input = $(".input").val();
    $(".message").append("<p>"+input+"</p>");                   
    });
$(".name-button").click(function(){
    $("h1").text("My name is Carl and I promise i'm not a ghost.");                   
    });
$(".bg-color-button").click(function(){
    $("body").css("background-color", "gold");                   
    });
$(".bg-color-button").click(function(){
    $(".secret-extra-button").show();                   
    });
$(".secret-extra-button").click(function(){
    $("h1").append("Woahh! Thanks for finding me! I was trapped there for so long! Have a great day!");                   
    });
