function newColor(){color=Please.make_color({format:"hex",vibrance:1,value:.5})}function changeColor(){$("body").animate({"background-color":color},200),$("#quote-content").animate({color:color},200),$("#quote-button").animate({"background-color":color},150),$("#tweet").animate({"background-color":color},150),$("#quote-title").animate({color:color},200)}function getQuote(){$.ajax({url:"https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",success:function(o){var t=o.shift();$("#quote-title").text(t.title),$("#quote-content").html(t.content),$("#tweet").attr("href","https://twitter.com/intent/tweet?text="+decodeURIComponent('"'+t.content.replace(/<\/?[^>]+>/gi,"")+'" \n- '+t.title)),void 0!==t.custom_meta&&void 0!==t.custom_meta.Source&&$("#quote-title").append(", "+t.custom_meta.Source)},cache:!1}).done(changeColor)}newColor(),changeColor(),$("body").animate({"background-color":color},200),$(document).ready(getQuote()),$("#quote-button").on("click",function(o){o.preventDefault(),getQuote(),newColor()});
