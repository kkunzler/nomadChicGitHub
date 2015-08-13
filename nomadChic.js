//api.openweathermap.org/data/2.5/forecast?q={city name},{country code}

var gender;
var temp;
//This is for the function that creates the male female thing
function packingList(){
	var gender= document.getElementById("who").value;
 	console.log(gender);
}

//This is for the temperature lists
function tempList(){
	var temp= document.getElementById("tempe").value;
 	console.log(temp);
}	
//This is for the function that creates the individual lists for all users
function makeList(){
	//Tabletop.makeList({key: 'iedukj', callback: function(data,tabletop){console.log('essentials')}, simpleSheet:true})
	//Put the essentials here*******
	//Call Medical
	//Call Hygiene
	//The stuff below is code that could bring in the spreadsheet
	/*function init() {
  Tabletop.init( { key: '0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE',
                   callback: function(data, tabletop) { console.log(data) },
                   simpleSheet: true } )
}*/
	//Call Electronics
	// Should the variables for make and female be different to avoid confusion?
	// or are they the same so they do the same things?
	//This is for if it is a female
	if (gender=="Female") {
		//Call fEssentials
		//Call fHygiene
		//This is for the temperature Blazing
		if (temp=="B"){

		}
		//This is for the temperature Hot
		else if (temp=="H"){

		}
		//This will pull the list for Warm
		else if (temp=="W"){

		}
		//This will pull the list for Cool
		else if (temp=="Cl"){

		}
		//This will pull the list for Cold
		else if (temp=="Cd"){

		}
		//This will pull the list for Frigid
		else{

		}
	}
	//This is for if it is a male
	else {
		//Call mEssentials
		//This is for the temperature Blazing
		if (temp=="B"){

		}
		//This is for the temperature Hot
		else if (temp=="H"){

		}
		//This will pull the list for Warm
		else if (temp=="W"){

		}
		//This will pull the list for Cool
		else if (temp=="Cl"){

		}
		//This will pull the list for Cold
		else if (temp=="Cd"){

		}
		//This will pull the list for Frigid
		else{

		}
	}
}
