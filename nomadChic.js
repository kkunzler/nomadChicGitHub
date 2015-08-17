//api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
   var loc=document.getElementById("dest").value;
   console.log(loc);

  $(document).ready(function() {
  $.simpleWeather({
    location: 'loc', //2357536
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
});


    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'outfitoftheday',
        clientId: 'dd5e29ec36214e2a91b4913c2d97a25f'
    });
    console.log(feed);
    feed.run();


var gender;
var temp;
//This is for the function that creates the male female thing and prints the location
function packingList(){
	var gender= document.getElementById("who").value;
	var loc=document.getElementById("where").value;
 	console.log(gender);
 	//console.log(loc);
}


//This is for the temperature lists
function tempList(){
	temp= document.getElementById("tempe").value;
 	console.log(temp);
}	

//var spreadsheet="https://docs.google.com/spreadsheets/d/1eDDhMYGf9UVa8BcxHzRHeRxennwnP3GVauADiPr3OTk/pubhtml"
//This is for the function that creates the individual lists for all users

// function makeList(){
// 	var tabletop=Tabletop.makeList({key: spreadsheet, callback: showInfo, simpleSheet:true})
// 	  window.onload = function() { makeList()};
// 	}
	//Put the essentials here*******
	//Call Medical
	//Call Hygiene
	//The stuff below is code that could bring in the spreadsheet
// function showInfo(Essentials, tabletop) {
//     alert("Successfully processed!")
//     console.log(Essentials);
//   }
  var data;
  var tabletop;
  // window.onload = function() { init() };

  var public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/1eDDhMYGf9UVa8BcxHzRHeRxennwnP3GVauADiPr3OTk/pubhtml";
  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
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
  //This shows the essentials list
function showInfo(data, tabletop) {
    alert("Successfully processed!")


	    var el = document.getElementById("myList");
	    console.log(data);
	  	for (var i = 0; i < data.length; i++) {
	    	el.innerHTML += data[i].Essentials;
	    	console.log(data[i].Essentials);
	    	essentialsList.push(data[i].Essentials);
	  	}
		makeList();  	
	}  	


  function init1() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo1,
                     simpleSheet: true } )
  }

  //This shows the essentials list
  function showInfo1(data, tabletop) {
    alert("Successfully processed!")
    var el = document.getElementById("myList");
    console.log(data);
  	for (var i = 0; i < data.length; i++) {
    	el.innerHTML += data[i].fEssentials;
    	console.log(data[i].fEssentials);
  	}
  }

function makeList(){ 

  //showInfo(Essentials,tabletop);
	//Call Electronics
	//This is for if it is a female
	if (gender=="Female") {

		alert('Female packing list will be activated');
		console.log(essentialsList);
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
