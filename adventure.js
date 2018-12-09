function hidebut1() {
	var button1 = document.getElementById("button1");
	button1.style.display = "none";
}

function hidebut2() {
	var button2 = document.getElementById("button2");
	button2.style.display = "none";
}

function hidebut3() {
	var button3 = document.getElementById("button3");
	button3.style.display = "none";
}
function showbut1() {
	var button1 = document.getElementById("button1");
	button1.style.display = "initial";
}

function showbut2() {
	var button2 = document.getElementById("button2");
	button2.style.display = "initial";
}

function showbut3() {
	var button3 = document.getElementById("button3");
	button3.style.display = "initial";
}
var audio= new Audio("sounds/crying-woman-manic-sound-effect.mp3");

function reload(){
	location.reload();
}

function start() {
	var title = "IRON KNIGHT";
	document.getElementById("title").innerHTML = title;
	var uitleg = "Game opdracht School";
	document.getElementById("description").innerHTML = uitleg;
	var mainimage = document.createElement("img");
	mainimage.src = "img/startbground.jpg";
	mainimage.id = "mainimage"
	var description = document.getElementById("description");
	var gameContainer = document.getElementById("game-container");
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(gameButtons, description);
	gameContainer.insertBefore(mainimage,gameButtons);
	mainimage.style.width = "1000px";
	button2.style.position = "relative";
	button2.style.margin = "0 auto";
	button2.style.bottom = "30px";
	button2.style.width = "350px";
	button2.style.height = "50px"
	button2.style.fontSize = "20px";
	description.style.marginTop = "0px";
	hidebut1();
	hidebut3();
	document.getElementById("button2").innerHTML = "START";
	button2.onclick= level1;
}
start();
////////////////////////////////////////////////////////////////////////////////////////////
function level1() {
	var uitleg = "dit is het kasteel van de goede koning willen de 3de het land is in rep en roer door een grootte oorlog tussen hem en zijn broer click op volgende voor meer";
	document.getElementById("description").innerHTML = uitleg;
	var mainimage = document.getElementById("mainimage");
	mainimage.src = "img/castle.gif";

	var description = document.getElementById("description");
	var gameContainer = document.getElementById("game-container");
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(gameButtons, description);
	gameContainer.insertBefore(mainimage,gameButtons);
	mainimage.style.width = "700px";
	button1.style.position = "relative";
	button1.style.margin = "0 auto";
	button1.style.bottom = "30px";
	button1.style.width = "350px";
	button1.style.height = "50px"
	button1.style.fontSize = "20px";
	document.getElementById("button2").innerHTML = "Volgende";
	button2.onclick= level2;

}
//dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood  //dood\\ 
//dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood  //dood\\   
//dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood  //dood\\ 
//dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood  //dood\\ 
//dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood  //dood\\ 
//dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood  //dood\\
//dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood  //dood\\
//dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood  //dood\\ 
//deze krijg je als je dood bent//
function DEAD() {
	var uitleg = "je bent dood volgende keer beter ";
	document.getElementById("description").innerHTML = uitleg;
	var mainimage = document.getElementById("mainimage");
	mainimage.src = "img/dead.gif";
	var description = document.getElementById("description");
	var gameContainer = document.getElementById("game-container");
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(gameButtons, description);
	gameContainer.insertBefore(mainimage,gameButtons);
	mainimage.style.width = "700px";
	button1.style.position = "relative";
	button1.style.margin = "0 auto";
	button1.style.bottom = "30px";
	button1.style.width = "350px";
	button1.style.height = "50px"
	button1.style.fontSize = "20px";
	hidebut1();
	showbut2();
	document.getElementById("button2").innerHTML = "RESTART";
	button2.onclick= reload;
	audio.play();
}
//dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood  //dood\\ 
//dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood  //dood\\   
//dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood  //dood\\ 
//dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood  //dood\\ 
//dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood  //dood\\ 
//dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood  //dood\\
//dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood  //dood\\
//dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood //dood  //dood\\ 


function level2() {
	var uitleg = "de broer is aan de winnede kant door dat hij een grootte leger heeft";
	document.getElementById("description").innerHTML = uitleg;
	var mainimage = document.getElementById("mainimage");
	mainimage.src = "img/002-fighting-gifs.gif";

	var description = document.getElementById("description");
	var gameContainer = document.getElementById("game-container");
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(gameButtons, description);
	gameContainer.insertBefore(mainimage,gameButtons);
	mainimage.style.width = "700px";
	button1.style.position = "relative";
	button1.style.margin = "0 auto";
	button1.style.bottom = "30px";
	button1.style.width = "350px";
	button1.style.height = "50px"
	button1.style.fontSize = "20px";
	document.getElementById("button2").innerHTML = "level3";
	button2.onclick= level3;
	}

/////////////////////////////////////////////////////////////////

	function level3() {
	var uitleg = "je kan zien wat er allemaal gebeurd als zijn broer langs komt";
	document.getElementById("description").innerHTML = uitleg;
	var mainimage = document.getElementById("mainimage");
	mainimage.src = "img/IY1WAM.gif";
	var description = document.getElementById("description");
	var gameContainer = document.getElementById("game-container");
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(gameButtons, description);
	gameContainer.insertBefore(mainimage,gameButtons);
	mainimage.style.width = "700px";
	button1.style.position = "relative";
	button1.style.margin = "0 auto";
	button1.style.bottom = "30px";
	button1.style.width = "350px";
	button1.style.height = "50px"
	button1.style.fontSize = "20px";
	document.getElementById("button2").innerHTML = "level4";
	button2.onclick= level4;
 	}

 	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 	///////////////////////////////	NOG NIET AF DEZE LEVELS ZIJN IN AANMAAK VAN KEUZENN DIE JE KAN MAKEN/////////////////////////////////////////  
	function level4() {
	var uitleg = "maar hier kom jij in het spel de koning heeft jou er op out gestuurd om het koningrijk te redden";
	document.getElementById("description").innerHTML = uitleg;
	var mainimage = document.getElementById("mainimage");
	mainimage.src = "img/FortunateMatureDunnart-size_restricted (1).gif";
	var description = document.getElementById("description");
	var gameContainer = document.getElementById("game-container");
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(gameButtons, description);
	gameContainer.insertBefore(mainimage,gameButtons);
	mainimage.style.width = "700px";
	button1.style.position = "relative";
	button1.style.margin = "0 auto";
	button1.style.bottom = "30px";
	button1.style.width = "350px";
	button1.style.height = "50px"
	button1.style.fontSize = "20px";
	showbut1();
	document.getElementById("button1").innerHTML = "Naar de tempel om aan god voor hulp te vragen";
	document.getElementById("button2").innerHTML = "Naar de bar voor informatie";
	button1.onclick= level5A;
	button2.onclick= level5B;
 	}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////EERSTE MEER KEUZEN VRAAG////////////////////////////////////////////////////////////////////
 	function level5A() {
	var uitleg = "De priester lachen je uit dat je om god zijn hulp vraagt maar jij hoort in je achter hoofd dat je naar de vijandelijk palijs moet gaan";
	document.getElementById("description").innerHTML = uitleg;
	var mainimage = document.getElementById("mainimage");
	mainimage.src = "img/giphy.gif";
	var description = document.getElementById("description");
	var gameContainer = document.getElementById("game-container");
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(gameButtons, description);
	gameContainer.insertBefore(mainimage,gameButtons);
	mainimage.style.width = "700px";
	button1.style.position = "relative";
	button1.style.margin = "0 auto";
	button1.style.bottom = "30px";
	button1.style.width = "350px";
	button1.style.height = "50px"
	button1.style.fontSize = "20px";
	hidebut1()
	document.getElementById("button2").innerHTML = "level6";
	button2.onclick= level6;
 	}


 	function level5B() {
	var uitleg = "de barman herkende je van een paar jaar geleden en geeft je een gratis biertje je valt plosting in slaap en wordt ergens naar toe gesleept en hoort een stem zeggen we bregen je waar je naar toe moet gaan";
	document.getElementById("description").innerHTML = uitleg;
	var mainimage = document.getElementById("mainimage");
	mainimage.src = "img/1456507089117690598.gif";
	var description = document.getElementById("description");
	var gameContainer = document.getElementById("game-container");
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(gameButtons, description);
	gameContainer.insertBefore(mainimage,gameButtons);
	mainimage.style.width = "700px";
	button1.style.position = "relative";
	button1.style.margin = "0 auto";
	button1.style.bottom = "30px";
	button1.style.width = "350px";
	button1.style.height = "50px"
	button1.style.fontSize = "20px";
	hidebut1()
	document.getElementById("button2").innerHTML = "level6";
	button2.onclick= level6;
 	}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 	function level6() {
	var uitleg = "Je loopt naar het kasteel maar oppeens hoor je iets je raken en je valt neer je wordt ergens naar getalaport";
	document.getElementById("description").innerHTML = uitleg;
	var mainimage = document.getElementById("mainimage");
	mainimage.src = "img/garou-markofthewolves-background-kain.gif";
	var description = document.getElementById("description");
	var gameContainer = document.getElementById("game-container");
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(gameButtons, description);
	gameContainer.insertBefore(mainimage,gameButtons);
	mainimage.style.width = "700px";
	button1.style.position = "relative";
	button1.style.margin = "0 auto";
	button1.style.bottom = "30px";
	button1.style.width = "350px";
	button1.style.height = "50px"
	button1.style.fontSize = "20px";
	showbut1();
	document.getElementById("button1").innerHTML = "Probeer tegen te werken";  
	document.getElementById("button2").innerHTML = "GA VERDER";
	button1.onclick= DEAD;
	button2.onclick= level7;
 	}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 	 	function level7() {
	var uitleg = "je word wakker in een weiland je ziet een vijand ren je op hen af of probeer je hem te sneaken??";
	document.getElementById("description").innerHTML = uitleg;
	var mainimage = document.getElementById("mainimage");
	mainimage.src = "img/farm.gif";
	var description = document.getElementById("description");
	var gameContainer = document.getElementById("game-container");
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(gameButtons, description);
	gameContainer.insertBefore(mainimage,gameButtons);
	mainimage.style.width = "700px";
	button3.style.position = "relative";
	button3.style.margin = "0 auto";
	button3.style.bottom = "30px";
	button3.style.width = "350px";
	button3.style.height = "50px"
	button3.style.fontSize = "20px";
	button1.style.position = "relative";
	button1.style.margin = "0 auto";
	button1.style.bottom = "30px";
	button1.style.width = "350px";
	button1.style.height = "50px"
	button1.style.fontSize = "20px";
	showbut1();
	document.getElementById("button1").innerHTML = "REN OP HEM AF!";
	document.getElementById("button2").innerHTML = "SNEAK";
	button1.onclick= level8a;
	button2.onclick= level8b;
	}

/////////////////////////////////////////////////////////////////////////
/////////////////////////                                         //////
///////////////////////////////////////////////////////////////////////
///////////////////////                                          /////
/////////////////////////////////////////////////////////////////////
/////////////////////                                          /////
 	 	function level8a() {
	var uitleg = "je hebt je vijand overmeesterd zijn laatste worden waren loop verder of je gaat dood";
	document.getElementById("description").innerHTML = uitleg;
	var mainimage = document.getElementById("mainimage");
	mainimage.src = "fight/0f38cabf990dc0898da6890dfe698307.gif";
	var description = document.getElementById("description");
	var gameContainer = document.getElementById("game-container");
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(gameButtons, description);
	gameContainer.insertBefore(mainimage,gameButtons);
	mainimage.style.width = "700px";
	button1.style.position = "relative";
	button1.style.margin = "0 auto";
	button1.style.bottom = "30px";
	button1.style.width = "350px";
	button1.style.height = "50px"
	button1.style.fontSize = "20px";
	showbut1();
	document.getElementById("button1").innerHTML = "Blijf wachten";
	document.getElementById("button2").innerHTML = "Ga verder !";
	button1.onclick= waarom;
	button2.onclick= level9;

 	}


 	 	function level8b() {
	var uitleg = "hij zag je aankomen volgende keer beter";
	document.getElementById("description").innerHTML = uitleg;
	var mainimage = document.getElementById("mainimage");
	mainimage.src = "fight/HeftyRashAzurevase-size_restricted.gif";
	var description = document.getElementById("description");
	var gameContainer = document.getElementById("game-container");
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(gameButtons, description);
	gameContainer.insertBefore(mainimage,gameButtons);
	mainimage.style.width = "700px";
	button1.style.position = "relative";
	button1.style.margin = "0 auto";
	button1.style.bottom = "30px";
	button1.style.width = "350px";
	button1.style.height = "50px"
	button1.style.fontSize = "20px";
	hidebut2();
	document.getElementById("button1").innerHTML = "Ga verder !";
	button1.onclick= DEAD;

 	}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////                                                                                                                  //////////////////////////////
/////////////////////////////////////////////                                                                        //////////////////////////////////////////////////
///////////////////////////////                                                                                                ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	 	function waarom() {
	var uitleg = "je wachtte en wachtte en toen werd je neergeshoten door een pijl en je gaat dood";
	document.getElementById("description").innerHTML = uitleg;
	var mainimage = document.getElementById("mainimage");
	mainimage.src = "fight/HeftyRashAzurevase-size_restricted.gif";
	var description = document.getElementById("description");
	var gameContainer = document.getElementById("game-container");
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(gameButtons, description);
	gameContainer.insertBefore(mainimage,gameButtons);
	mainimage.style.width = "700px";
	button3.style.position = "relative";
	button3.style.margin = "0 auto";
	button3.style.bottom = "30px";
	button3.style.width = "350px";
	button3.style.height = "50px"
	button3.style.fontSize = "20px";
	button1.style.position = "relative";
	button1.style.margin = "0 auto";
	button1.style.bottom = "30px";
	button1.style.width = "350px";
	button1.style.height = "50px"
	button1.style.fontSize = "20px";
	hidebut1();
	document.getElementById("button2").innerHTML = "Ga verder";
	button2.onclick= 	DEAD;
	}

 	function level9() {
	var uitleg = "je  bent door gelopen en vindt in de verte een dorpje en je hoort gepraat dat willem 3 dood gemaakt is door zijn broer toen je dat hoorde rende je naar de haven terug";
	document.getElementById("description").innerHTML = uitleg;
	var mainimage = document.getElementById("mainimage");
	mainimage.src = "img/tumblr_o83tf8Wivx1u2nmaho2_500.gif";
	var description = document.getElementById("description");
	var gameContainer = document.getElementById("game-container");
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(gameButtons, description);
	gameContainer.insertBefore(mainimage,gameButtons);
	mainimage.style.width = "700px";
	button1.style.position = "relative";
	button1.style.margin = "0 auto";
	button1.style.bottom = "30px";
	button1.style.width = "350px";
	button1.style.height = "50px"
	button1.style.fontSize = "20px";
	hidebut1()
	document.getElementById("button2").innerHTML = "level10";
	button2.onclick= level10;
 	}
 	function level10() {
	var uitleg = "Je betaald met alle geld wat je hebt een plaats op een boot en vaart inmiddelijk weg";
	document.getElementById("description").innerHTML = uitleg;
	var mainimage = document.getElementById("mainimage");
	mainimage.src = "img/587fc929189ac69ecb3247e689f178f1--tall-ships-nautical-art.jpg";
	var description = document.getElementById("description");
	var gameContainer = document.getElementById("game-container");
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(gameButtons, description);
	gameContainer.insertBefore(mainimage,gameButtons);
	mainimage.style.width = "700px";
	button1.style.position = "relative";
	button1.style.margin = "0 auto";
	button1.style.bottom = "30px";
	button1.style.width = "350px";
	button1.style.height = "50px"
	button1.style.fontSize = "20px";
	document.getElementById("button2").innerHTML = "volgende";
	button2.onclick= level11;
	}
 	function level11() {
	var uitleg = "Na 3 maanden varen zie eindelijk het kasteel in de verte maar je ziet iets in de verte wat je niet wouw zien";
	document.getElementById("description").innerHTML = uitleg;
	var mainimage = document.getElementById("mainimage");
	mainimage.src = "img/b15080edb11dc1fea7def471fbbdcb7e.jpg";
	var description = document.getElementById("description");
	var gameContainer = document.getElementById("game-container");
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(gameButtons, description);
	gameContainer.insertBefore(mainimage,gameButtons);
	mainimage.style.width = "700px";
	button1.style.position = "relative";
	button1.style.margin = "0 auto";
	button1.style.bottom = "30px";
	button1.style.width = "350px";
	button1.style.height = "50px"
	button1.style.fontSize = "20px";
	document.getElementById("button2").innerHTML = "volgende";
	button2.onclick= level12;
	}
	function level12() {
	var uitleg = "je wordt aangevallen door het leger van willem 3 zijn broer en je weet zeker dat je dood gaat ";
	document.getElementById("description").innerHTML = uitleg;
	var mainimage = document.getElementById("mainimage");
	mainimage.src = "img/Dany-Ships-5.gif";
	var description = document.getElementById("description");
	var gameContainer = document.getElementById("game-container");
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(gameButtons, description);
	gameContainer.insertBefore(mainimage,gameButtons);
	mainimage.style.width = "700px";
	button1.style.position = "relative";
	button1.style.margin = "0 auto";
	button1.style.bottom = "30px";
	button1.style.width = "350px";
	button1.style.height = "50px"
	button1.style.fontSize = "20px";
	document.getElementById("button2").innerHTML = "volgende";
	button2.onclick= level13;
	}
	function level13() {
	var uitleg = "je schip zinkt en iedereen is dood niet alles is goed gekommen net als in het echt als je iets wilt goed doen doe het dan goed en niet middelmatig";
	document.getElementById("description").innerHTML = uitleg;
	var mainimage = document.getElementById("mainimage");
	mainimage.src = "img/77d511174f07f3201fe6fd09233e8d1d.gif";
	var description = document.getElementById("description");
	var gameContainer = document.getElementById("game-container");
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(gameButtons, description);
	gameContainer.insertBefore(mainimage,gameButtons);
	mainimage.style.width = "700px";
	button1.style.position = "relative";
	button1.style.margin = "0 auto";
	button1.style.bottom = "30px";
	button1.style.width = "350px";
	button1.style.height = "50px"
	button1.style.fontSize = "20px";
	document.getElementById("button2").innerHTML = "volgende";
	button2.onclick= einde;
	}
	function einde() {
	var uitleg = "het moraal is van het verhaal is dat je kan alles wel willen en je kan dingen zeggen maar wees klaar voor wat je dan tegenmoet komt";
	document.getElementById("description").innerHTML = uitleg;
	var mainimage = document.getElementById("mainimage");
	mainimage.src = "img/dead.gif";
	var description = document.getElementById("description");
	var gameContainer = document.getElementById("game-container");
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(gameButtons, description);
	gameContainer.insertBefore(mainimage,gameButtons);
	mainimage.style.width = "700px";
	button1.style.position = "relative";
	button1.style.margin = "0 auto";
	button1.style.bottom = "30px";
	button1.style.width = "350px";
	button1.style.height = "50px"
	button1.style.fontSize = "20px";
	hidebut1();
	showbut2();
	document.getElementById("button2").innerHTML = "RESTART";
	button2.onclick= reload;
	audio.play();
    }