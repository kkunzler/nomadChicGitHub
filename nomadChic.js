//api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'outfitoftheday',
        clientId: 'dd5e29ec36214e2a91b4913c2d97a25f'
    });
    console.log(feed);
    feed.run();

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

  //This shows the essentials list
function showInfo(data, tabletop) {
    alert("Successfully processed!")

    //while (test(data)){

	    var el = document.getElementById("myList");
	    console.log(data);
	  	for (var i = 0; i < data.length; i++) {
	    	el.innerHTML += data[i].Essentials;
	    	console.log(data[i].Essentials);
	    	//console.log(data[i].Electronics);
	    	//console.log(data[i].Medical);
	    	//console.log(data[i].Hygiene);
	  	}
	}  	
//}

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
    	el.innerHTML += data[i].Electronics;
    	console.log(data[i].Electronics);
  	}
  }

  //showInfo(Essentials,tabletop);
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

