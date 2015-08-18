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

//This is the variables we use
var gender;
var baby;
var temp;
var el = document.getElementById("myList");
var insta = document.getElementById("instafeed");
var data;
var tabletop;
//This is for the function that creates the male/female option and prints the location
function setUp(){
	gender = document.getElementById("who").value;
	baby = document.getElementById("baby").value;
 	//This is what generates the instagram feed
 	var feed = new Instafeed({
 		target:"outfittag",
        get: 'tagged',
        tagName: 'outfitofthedaygwc',
        clientId: 'dd5e29ec36214e2a91b4913c2d97a25f'
    });
    //This is where the insta posts from each city would show up
 //    var locfeed = new Instafeed({
 //    target:"loctag",
 //    get: 'tagged',
 //    tagName: loc,
 //    clientId: 'dd5e29ec36214e2a91b4913c2d97a25f',
 //    // rest of settings
	// });
    console.log(feed);
    //console.log(locfeed);
    insta.innerHTML = "";
    feed.run();
    //locfeed.run();
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


	 	el.innerHTML+="<h4>" + listName + "</h4>" + "<ul id='nobullet'>";
		for (var i = 0; i < data.length; i++) {

			if (data[i][listName]==""){
				el.innerHTML+="</ul>";
				return false;
		 		}

			el.innerHTML += "<li><input type='checkbox' name='newsletter' id='newsletter'>" + data[i][listName] + "</li>";
	 	}
}

//This is the function that has all of our lists
function makeList(data, tabletop){ 
	showInfo(data, "Essentials", tabletop);
	showInfo(data, "Medical", tabletop);
	showInfo(data, "Hygiene", tabletop);
	showInfo(data, "Electronics", tabletop);

	//Call Electronics
	//This is for if it is a female
	if (gender=="Female") {

		//Call Female Essentials
		showInfo(data, "Female Essentials", tabletop);
		showInfo(data, "Female Hygiene", tabletop);
		
		//Call Female Hygiene		
	}

	//This is for if it is a male
	if (gender=="Male"){
		showInfo(data, "Male Essentials", tabletop);
	}

	if (baby=="Yes"){
		showInfo(data, "Baby Essentials")
	}


	//This is for the temperature Blazing
	if (temp=="B"){
		showInfo(data, "Blazing", tabletop);
		showInfo(data, "Beach/Pool", tabletop);
	}
	//This is for the temperature Hot
	else if (temp=="H"){
		showInfo(data, "Hot", tabletop);
		showInfo(data, "Beach/Pool", tabletop);
	}
	//This will pull the list for Warm
	else if (temp=="W"){
	showInfo(data, "Warm", tabletop);
	showInfo(data, "Beach/Pool", tabletop);	
	}
	//This will pull the list for Cool
	else if (temp=="Cl"){
		showInfo(data, "Cool", tabletop);
		showInfo(data, "Beach/Pool", tabletop);		
	}
	//This will pull the list for Cold
	else if (temp=="Cd"){
		showInfo(data, "Cold", tabletop);
	}
	//This will pull the list for Frigid
	else if (temp=="F"){
		showInfo(data, "Frigid", tabletop);
	}

	else{
		el.innerHTML = "To view a packing list, go back to the Add a Trip page and finish filling in your information. Then click Start Your Packing List"
	}
}