//api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
  //This is the temperature function that takes what the user put into the where are you going text box
function setTemp(){
   var loc=document.getElementById("where").value;
   console.log(loc);
  $.simpleWeather({
    location: loc,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });

	  // $.simpleWeather({
	  //   location: loc, //2357536
	  //   woied:'',
	  //   unit: 'f',
	  //   success: function(weather) {
	  //     html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
	  //     html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
	  //     html += '<li class="currently">'+weather.currently+'</li>';
	  //     html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';
	      
	  //     for(var i=0;i<weather.forecast.length;i++) {
	  //       html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
	  //     }
	  
	  //     $("#weather").html(html);
	  //   },
	  //   error: function(error) {
	  //     $("#weather").html('<p>'+error+'</p>');
	  //   }
	  // });
}


    // var feed = new Instafeed({
    //     get: 'tagged',
    //     tagName: 'outfitoftheday',
    //     clientId: 'dd5e29ec36214e2a91b4913c2d97a25f'
    // });
    // console.log(feed);
    // feed.run();


var gender;
var baby;
var temp;
var el = document.getElementById("myList");
var data;
var tabletop;
//This is for the function that creates the male female thing and prints the location
function setUp(){
	gender = document.getElementById("who").value;
	baby = document.getElementById("baby").value;
 	var feed = new Instafeed({
        get: 'tagged',
        tagName: 'outfitoftheday',
        clientId: 'dd5e29ec36214e2a91b4913c2d97a25f'
    });
    console.log(feed);
    feed.run();
}


//This is for the temperature lists
function tempList(){
	temp = document.getElementById("tempe").value;
}

var public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/1eDDhMYGf9UVa8BcxHzRHeRxennwnP3GVauADiPr3OTk/pubhtml";
function init() {
	el.innerHTML = "";
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: makeList,
                     simpleSheet: true } )
}


//This shows the lists
function showInfo(data, listName, tabletop) {


	 	el.innerHTML+="<h4>" + listName + "</h4>"
		for (var i = 0; i < data.length; i++) {

			if (data[i][listName]==""){
				return false;
		 		}

			el.innerHTML += "<br><input type='checkbox' name='newsletter' id='newsletter'>" + data[i][listName];
	 	}
}


function makeList(data, tabletop){ 
	showInfo(data, "Essentials", tabletop);
	showInfo(data, "Medical", tabletop);
	showInfo(data, "Hygiene", tabletop);
	showInfo(data, "Electronics", tabletop);

	//Call Electronics
	//This is for if it is a female
	if (gender=="Female") {

		//Call fEssentials
		showInfo(data, "fEssentials", tabletop);
		showInfo(data, "fHygiene", tabletop);
		
		//Call fHygiene		
	}

	//This is for if it is a male
	else {
		showInfo(data, "mEssentials", tabletop);
	}

	if (baby=="Yes"){
		showInfo(data, "bEssentials")
	}


	//This is for the temperature Blazing
	if (temp=="B"){
		showInfo(data, "eBlazing", tabletop);
		showInfo(data, "Beach/Pool", tabletop);
	}
	//This is for the temperature Hot
	else if (temp=="H"){
		showInfo(data, "eHot", tabletop);
		showInfo(data, "Beach/Pool", tabletop);
	}
	//This will pull the list for Warm
	else if (temp=="W"){
	showInfo(data, "eWarm", tabletop);
	showInfo(data, "Beach/Pool", tabletop);	
	}
	//This will pull the list for Cool
	else if (temp=="Cl"){
		showInfo(data, "eCool", tabletop);
		showInfo(data, "Beach/Pool", tabletop);		
	}
	//This will pull the list for Cold
	else if (temp=="Cd"){
		showInfo(data, "eCold", tabletop);
	}
	//This will pull the list for Frigid
	else{
		showInfo(data, "eFrigid", tabletop);
	}
}
