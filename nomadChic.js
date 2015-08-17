//api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
  //This is the temperature function that takes what the user put into the where are you going text box
   function setTemp(){
   var loc=document.getElementById("where").value;
   console.log(loc);

	  $.simpleWeather({
	    location: loc, //2357536
	    woied:'',
	    unit: 'f',
	    success: function(weather) {
	      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
	      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
	      html += '<li class="currently">'+weather.currently+'</li>';
	      html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';
	      
	      for(var i=0;i<weather.forecast.length;i++) {
	        html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
	      }
	  
	      $("#weather").html(html);
	    },
	    error: function(error) {
	      $("#weather").html('<p>'+error+'</p>');
	    }
	  });

}


    // var feed = new Instafeed({
    //     get: 'tagged',
    //     tagName: 'outfitoftheday',
    //     clientId: 'dd5e29ec36214e2a91b4913c2d97a25f'
    // });
    // console.log(feed);
    // feed.run();


var gender;
var temp;
//This is for the function that creates the male female thing and prints the location
function packingList(){
	var gender= document.getElementById("who").value;
	//var loc=document.getElementById("where").value;
 	console.log(gender);
 	  var feed = new Instafeed({
        get: 'tagged',
        tagName: 'outfitoftheday',
        clientId: 'dd5e29ec36214e2a91b4913c2d97a25f'
    });
    console.log(feed);
    feed.run();
 	//console.log(loc);
}


//This is for the temperature lists
function tempList(){
	temp= document.getElementById("tempe").value;
 	console.log(temp);
}	


  var data;
  var tabletop;
  // window.onload = function() { init() };

  var public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/1eDDhMYGf9UVa8BcxHzRHeRxennwnP3GVauADiPr3OTk/pubhtml";
  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: makeList,
                     simpleSheet: true } )
  }

// function test(data){
// 	for (var i = 0; i < data.length-1; i++){
// 		if (data[i].Essentials==""){
// 			return false;
// 		}

// 		return true;
// 	}
// }
var essentialsList=[];
var fEssentialsList=[];

  //This shows the essentials list
function showEssentialsInfo(data, tabletop) {
    alert("Essentials")

		var el = document.getElementById("myList");
	 	console.log(data);
		for (var i = 0; i < data.length; i++) {
			el.innerHTML += "<label for='newsletter'>Essentials</label><br><input type='checkbox' name='newsletter' id='newsletter'>" + data[i].Essentials;
			console.log(data[i].Essentials);	
		 	essentialsList.push(data[i].Essentials);
	 	}	
}

function showfEssentialsInfo(data, tabletop) {
    alert("fEssentials")

		var el = document.getElementById("myList");
	 	console.log(data);
		for (var i = 0; i < data.length; i++) {
			el.innerHTML += "<label for='newsletter'>fEssentials</label><br><input type='checkbox' name='newsletter' id='newsletter'>" + data[i].fEssentials;
			console.log(data[i].fEssentials);	
		 	fEssentialsList.push(data[i].fEssentials);
	 	}	
}



function makeList(data, tabletop){ 
	showEssentialsInfo(data, tabletop);

  //showInfo(Essentials,tabletop);
	//Call Electronics
	//This is for if it is a female
	if (gender=="Female") {

		alert('Female packing list will be activated');
		
		showfEssentialsInfo(data, tabletop);
		//Call fEssentials
		//Call fHygiene
		//This is for the temperature Blazing
		if (temp=="B"){
			alert('Blazing packing list will be activated');
		}
		//This is for the temperature Hot
		else if (temp=="H"){
			alert('Hot packing list will be activated');
		}
		//This will pull the list for Warm
		else if (temp=="W"){
			alert('Warm packing list will be activated');
		}
		//This will pull the list for Cool
		else if (temp=="Cl"){
			alert('Cool packing list will be activated');			
		}
		//This will pull the list for Cold
		else if (temp=="Cd"){
			alert('Cold packing list will be activated');
		}
		//This will pull the list for Frigid
		else{
			alert('Frigid packing list will be activated');
		}
	}
	//This is for if it is a male
	else {
		alert('Male packing list will be activated');
		//Call mEssentials
		//This is for the temperature Blazing
		if (temp=="B"){
			alert('Blazing packing list will be activated');
		}
		//This is for the temperature Hot
		else if (temp=="H"){
			alert('Hot packing list will be activated');
		}
		//This will pull the list for Warm
		else if (temp=="W"){
			alert('Warm packing list will be activated');
		}
		//This will pull the list for Cool
		else if (temp=="Cl"){
			alert('Cool packing list will be activated');
		}
		//This will pull the list for Cold
		else if (temp=="Cd"){
			alert('Cold packing list will be activated');
		}
		//This will pull the list for Frigid
		else{
			alert('Frigid packing list will be activated');
		}
	}
}
