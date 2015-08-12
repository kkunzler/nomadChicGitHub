//api.openweathermap.org/data/2.5/forecast?q={city name},{country code}

var gender;
var temp;

function packingList(){
	var gender= document.getElementById("who").value;
 	console.log(gender);
}


function tempList(){
	var temp= document.getElementById("tempe").value;
 	console.log(temp);
}	

function makeList(){
	//Put the essentials here*******
	//Call Medical
	//Call Hygiene
	//Call Electronics
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
