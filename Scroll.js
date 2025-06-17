
/*
Derived from

*/

$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");
  var tagsR = $(".tag-R");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }

  for (var i = 0; i < tagsR.length; i++) {
    var tagR = tagsR[i];

    if ($(tagR).position().top < pageBottom) {
      $(tagR).addClass("visible");
    } else {
      $(tagR).removeClass("visible");
    }
  }
});
