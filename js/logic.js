
var vraagNum;
vraagNum = 2;
var goed = 0;
var fout = 0;


var vragen = new Array();
vragen[1] = "Welke vogel kan achteruit vliegen?";
vragen[2] = "Waar komt het woord <i>sarcofaag</i> vandaan?";
vragen[3] = "Hoe vaak haalt een mier adem?";
vragen[4] = "Wat is het snelste dier ter wereld?";
vragen[5] = "Wat is de meest voorkomende naam in de wereld?";
vragen[6] = "Welk dier heeft drie harten?";
vragen[7] = "Wat is het meest dodelijke dier ter wereld?";
vragen[8] = "Waar komt de doedelzak oorspronkelijk vandaan?";
vragen[9] = "Wat is het ongeluksgetal in Italie?";
vragen[10] = "Hoe lang is de totale lengte van je bloedvaten bij elkaar?";

var knop1 = new Array();
knop1[1] = "Specht";
knop1[2] = "Het is Egyptisch voor <i>opbergkist</i>";
knop1[3] = "Gewoon net zo vaak als wij";
knop1[4] = "Een Jachtluipaard";
knop1[5] = "John";
knop1[6] = "Een Octopus";
knop1[7] = "Een Mensenhaai";
knop1[8] = "Van de Romeinen";
knop1[9] = "15";
knop1[10] = "1.000 kilometer";

var knop2 = new Array();
knop2[1] = "Kolibrie";
knop2[2] = "Het is Grieks voor <i>vleesetend</i>";
knop2[3] = "Een mier haalt geen adem maar krijgt de lucht binnen via zijn onderlijf";
knop2[4] = "Een Slechtvalk";
knop2[5] = "Maria";
knop2[6] = "Een Koe";
knop2[7] = "Een Mug";
knop2[8] = "Van de Kelten";
knop2[9] = "16";
knop2[10] = "10.000 kilometer";

var knop3 = new Array();
knop3[1] = "Valk";
knop3[2] = "Het is Romeins voor <i>dodenrijk</i>";
knop3[3] = "1 keer per 1 a 2 minuten";
knop3[4] = "Een Zeilvis";
knop3[5] = "Max";
knop3[6] = "Een Boskikker";
knop3[7] = "Een Olifant";
knop3[8] = "Uit Schotland";
knop3[9] = "17";
knop3[10] = "100.000 kilometer";

var knop4 = new Array();
knop4[1] = "Ijsvogel";
knop4[2] = "Het is Perzisch voor <i>graf</i>";
knop4[3] = "Dertig keer per minuut";
knop4[4] = "Kangoeroe";
knop4[5] = "Mohammed";
knop4[6] = "Een Potvis";
knop4[7] = "Een Aligator";
knop4[8] = "Uit het Midden-Oosten";
knop4[9] = "18";
knop4[10] = "100.000.000 kilometer";

var antwoorden = new Array();
antwoorden[1] = 'b';
antwoorden[2] = 'b';
antwoorden[3] = 'c';
antwoorden[4] = 'b';
antwoorden[5] = 'd';
antwoorden[6] = 'a';
antwoorden[7] = 'b';
antwoorden[8] = 'd';
antwoorden[9] = 'c';
antwoorden[10] = 'c';


function onPhotoDataSuccess() {
	//
}

function onFail() {
	//
}


function pressA() {
	next('a');
}
function pressB() {
	next('b');
}
function pressC() {
	next('c');
}
function pressD() {
	next('d');
}
function next(antwoord) {
	if(typeof(antwoord) != "undefined") {
		if(antwoord == antwoorden[vraagNum-1]){
			goed++;
		} else {
			fout++;
		}
	}

	document.getElementById("fout").innerHTML="Fout: " + fout;
	document.getElementById("goed").innerHTML="Goed: " + goed;
	
	if(vraagNum<11) {
		document.getElementById("vraag").innerHTML="Vraag " + vraagNum + " : " + vragen[vraagNum] + '<br/><br/><img width=300 height=300 src="images/vraag' + vraagNum + '.jpg"></img>';
		document.getElementById("knop1").innerHTML=""+knop1[vraagNum];
		document.getElementById("knop2").innerHTML=""+knop2[vraagNum];
		document.getElementById("knop3").innerHTML=""+knop3[vraagNum];
		document.getElementById("knop4").innerHTML=""+knop4[vraagNum];		
		vraagNum++;
	} else {
		document.getElementById("vraag").innerHTML="De quiz is afgelopen, zie de score hieronder.";
		document.getElementById("knop1").style.visibility = 'hidden'; 
		document.getElementById("knop2").style.visibility = 'hidden'; 
		document.getElementById("knop3").style.visibility = 'hidden'; 
		document.getElementById("knop4").style.visibility = 'hidden'; 
		document.getElementById("restart").style.visibility = 'visible'; 		
	}

}


var app = {
    // Application Constructor
    initialize: function() {
    	console.log('initializing...');
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        navigator.notification.alert(
		        'Cordova is ready!',       // message
		        function() {},  // callback
		        'Congratulations',            // title
		        'Done'                      // buttonName
		       );
    }
};