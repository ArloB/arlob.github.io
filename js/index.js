function newColor(){color=randomColor({luminosity:"dark"})}function changeColor(){$("body").animate({"background-color":color},200),$("#quote-content").animate({color:color},200),$("#quote-button").animate({"background-color":color},150),$("#tweet").animate({"background-color":color},150),$("#quote-title").animate({color:color},200)}function getQuote(){$.ajax({url:"https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand",success:function(o){var t=o[Math.floor(11*Math.random())];$("#quote-title").text(t.title.rendered),$("#quote-content").html(t.content.rendered),$("#tweet").attr("href","https://twitter.com/intent/tweet?text="+decodeURIComponent('"'+t.content.rendered.replace(/<\/?[^>]+>/gi,"")+'" - '+t.title.rendered))},cache:!1}).done(changeColor)}newColor(),changeColor(),$("body").animate({"background-color":color},200),$(document).ready(getQuote()),$("#quote-button").on("click",function(o){o.preventDefault(),getQuote(),newColor()});
