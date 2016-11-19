$(function(){
$.ajax({
  type:'POST',
  url:'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBPZRifGWVdZLzC1-orf8ZbgJSxiBxseY4',
  success:function(data)
  {
    var latitude = data.location.lat.toFixed();
    var longitude =data.location.lng.toFixed();
    console.log(data);
    $.ajax({
      type:'POST',
     url:'https://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude +','+longitude+'&key=AIzaSyB8qJooKIKffcOLe8lbHBAyA1RjTy0zfwo', success:function(some_data)
      {
        console.log(some_data);
        var zipcode = some_data.results[0].address_components[5].long_name;
        var country = some_data.results[0].address_components[4].short_name.toLowerCase();
        
        
     $.ajax({
       datatype:'jsonp',
       jsonCallback:'jsonp',
       url:'http://api.openweathermap.org/data/2.5/weather?zip='+zipcode+','+country+'&APPID=529089e36675b3919f42423398a84037',
		error:function(){
			alert("Problem with source");
			
		},
       success:function(weat)
       {
         console.log(weat);
         var name = weat.name;
         var weather = weat.weather[0].description;
         var temp = (weat.main.temp)-273.15;
         var ftemp = temp * 1.8 + 32 ;
         console.log(name,weather);
         $("#weather").html("<p align='center' >" + name + ',' + country.toUpperCase() + "</p>");
         $('#weather').css('marginTop','7%');
         $('#weather').css('fontSize','30px');

													
													
$("weather1").css('fontSize','25px');      
  $("#weather2").html("<p align='center' >" + weather + "</p>"); 
   $('#weather2').css('fontSize','25px');   
       if (ftemp > 90)
         {
           $('body').css('backgroundImage','url("https://lintvksnt.files.wordpress.com/2015/09/sunshine.jpg?w=650")');
      $('body').css('backgroundSize','cover');
         }
       else if(ftemp > 65 && ftemp <90)
       {
       $('body').css('backgroundImage','url("https://icons.wxug.com/data/wximagenew/p/Poobah/1305.jpg")');
         $('body').css('backgroundSize','cover');
  
       }
         else
           {
     $('body').css('backgroundImage','url("https://newevolutiondesigns.com/images/freebies/winter-wallpaper-12.jpg")');        
             $('body').css('backgroundSize','cover');
           }
         $("#weather1").html("<p align='center' class='fahr'>" + ftemp + 'F'+ "</p>");
        var celsius = false;
     $('#button').click(function(){  
			 celsius = !celsius;
			 if(celsius)
  {
		$("#weather1").html("<p align='center' class='cel'>" + temp + 'C' + "</p>");
	}
		 else
			 {
				 $("#weather1").html("<p align='center' class='cel'>" + ftemp + 'F' + "</p>");
			 }

              
                      
       
     }); 
       }
       
       
         });
  
      
      }
      
      
      
    }); 
  
  
  }
  
  
});
});