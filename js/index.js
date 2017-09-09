function newColor() {
  color = Please.make_color({
    format: "hex",
    vibrance: 1,
    value: 0.5
  });
}
function changeColor() {
  $("body").animate({ "background-color": color }, 200);
  $("#quote-content").animate({ color: color }, 200);
  $("#quote-button").animate({ "background-color": color }, 150);
  $("#tweet").animate({ "background-color": color }, 150);
  $("#quote-title").animate({ color: color }, 200);
}
function getQuote() {
  $.ajax({
    url:
      "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
    success: function(data) {
      var post = data.shift();
      $("#quote-title").text(post.title);
      $("#quote-content").html(post.content);
      $("#tweet").attr(
        "href",
        "https://twitter.com/intent/tweet?text=" +
          decodeURIComponent('"' + post.content.replace(/<\/?[^>]+>/gi, "") + '" '+ "\n" + "- "+ post.title)
      );
      if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-title').append(", " + post.custom_meta.Source);
        }
    },
    cache: false
  }).done(changeColor);
}
newColor();
changeColor();
$("body").animate({ "background-color": color }, 200);
$(document).ready(getQuote());
$("#quote-button").on("click", function(e) {
  e.preventDefault();
  getQuote();
  newColor();
});