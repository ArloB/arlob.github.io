function changeIcon(t){var e=[200,201,202,210,211,212,221,230,231,232],n=[300,301,302,310,311,312,313,314,321],o=[500,501,502,503,504,511,520,521,522,531],i=[600,601,602,611,612,615,616,620,621,622],a=[801,802,803,804,701,711,721,731,741,751,761,762,771,781];$(".weather").hide(),-1!==e.indexOf(t)?$(".thunder-storm").show():-1!==n.indexOf(t)?$(".sun-shower").show():-1!==o.indexOf(t)?$(".raining").show():-1!==i.indexOf(t)?$(".snowing").show():-1!==a.indexOf(t)?$(".cloudy").show():800==t?$(".sunny").show():$(".unknown").show()}function changeTemp(){toggle?(temp=Math.round(1.8*temp+32),$(".temp").text(temp+"°"),$(".CF").text("F"),toggle=!1):(temp=Math.round((temp-32)/1.8),$(".temp").text(temp+"°"),$(".CF").text("C"),toggle=!0)}$(".weather").hide(),$(".infobox").hide();var toggle=!0,button=document.getElementById(".toggle"),test,temp;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){$.ajax({url:"https://fcc-weather-api.glitch.me/api/current?lat="+t.coords.latitude+"&lon="+t.coords.longitude,success:function(t){$(".infobox").show(),$(".info").text(t.weather[0].description),$(".data").text(t.weather[0].main),changeIcon(t.weather[0].id),$(".temp").text(Math.round(t.main.temp)+"°"),$(".location").text(t.name+", "+t.sys.country),$(".CF").text("C"),test=t,temp=t.main.temp},cache:!1})});
