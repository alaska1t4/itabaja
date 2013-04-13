$(".li_name").click(function() {
  $(this).siblings("li").removeClass("active");
  $(this).addClass("active");
});
