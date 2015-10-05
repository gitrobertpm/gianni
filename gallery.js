// GALLERY JS

// GET WINDOW HEIGHT AND WIDTH
var width = window.innerWidth;
var height = window.innerHeight;

// SHORTCUT FUNCIOTN FOR GRABBING ID AND SETTING BACKGROUND AND DISPLAY VALUES
function set(idee, background, display, bs, br, bp) {
	var setIdee = document.getElementById(idee);
	setIdee.style.background = background;
	setIdee.style.display = display;
	setIdee.style.backgroundSize = bs;
	setIdee.style.backgroundRepeat = br;
	setIdee.style.backgroundPosition = bp;
};

// SET IMAGES
if (width < 700) {
	set("art1", "url('img/nightAndDaySm.png')", "block", "100% 100%", "no-repeat");
	set("art2", "url('img/mushroomsSm.png')", "block", "100% 100%", "no-repeat");
	set("art3", "url('img/renderBugs1Sm.png')", "block", "100% 100%", "no-repeat");
	set("art4", "url('img/lakeHouseSm.png')", "block", "100% 100%", "no-repeat");
	set("art5", "url('img/renderBugs2Sm.png')", "block", "100% 100%", "no-repeat");
	set("art6", "url('img/desertSm.png')", "block", "100% 100%", "no-repeat");
	set("art7", "url('img/shapesSm.png')", "block", "100% 100%", "no-repeat");
	set("art8", "url('img/hippyStillLifeSm.png')", "block", "100% 100%", "no-repeat");
	set("art9", "url('img/shelvesSm.png')", "block", "100% 100%", "no-repeat");
	set("art10", "url('img/rubyRingSm.png')", "block", "100% 100%", "no-repeat");
	set("art11", "url('img/rockCatSm.png')", "block", "100% 100%", "no-repeat");
	set("art12", "url('img/twoRocksSm.png')", "block", "100% 100%", "no-repeat");
	set("art13", "url('img/remedySm.png')", "block", "100% 100%", "no-repeat");
	set("art14", "url('img/sunraysSm.png')", "block", "100% 100%", "no-repeat");
	set("art15", "url('img/nightAndDaySm.png')", "block", "100% 100%", "no-repeat");
} else if (width > 699) {
	set("art1", "url('img/nightAndDay.png')", "block", "100% 100%", "no-repeat");
	set("art2", "url('img/mushrooms.png')", "block", "100% 100%", "no-repeat");
	set("art3", "url('img/renderBugs1.png')", "block", "100% 100%", "no-repeat");
	set("art4", "url('img/lakeHouse.png')", "block", "100% 100%", "no-repeat");
	set("art5", "url('img/renderBugs2.png')", "block", "100% 100%", "no-repeat");
	set("art6", "url('img/desert.png')", "block", "100% 100%", "no-repeat");
	set("art7", "url('img/shapes.png')", "block", "100% 100%", "no-repeat");
	set("art8", "url('img/hippyStillLife.png')", "block", "100% 100%", "no-repeat");
	set("art9", "url('img/shelves.png')", "block", "100% 100%", "no-repeat");
	set("art10", "url('img/rubyRing.png')", "block", "100% 100%", "no-repeat");
	set("art11", "url('img/rockCat.png')", "block", "100% 100%", "no-repeat");
	set("art12", "url('img/twoRocks.png')", "block", "100% 100%", "no-repeat");
	set("art13", "url('img/remedy.png')", "block", "100% 100%", "no-repeat");
	set("art14", "url('img/sunraysSm.png')", "block", "100% 100%", "no-repeat");
	set("art15", "url('img/nightAndDay.png')", "block", "100% 100%", "no-repeat");
}


for (i = 0; i < document.getElementsByClassName("picLamp").length; i++) {
	document.getElementsByClassName("picLamp")[i].setAttribute("style", "background: url('img/picLamp.png'); background-repeat: no-repeat; background-size: 100% 100%");
}

var walkR, walkL;

function goRight() {
	clearInterval(walkL);
	walkR = setInterval(function(){ walkRight(); }, 10);
	function walkRight() {
		scrollBy(1,0);
	};
	document.getElementById("goRight").disabled = true;
	document.getElementById("goLeft").disabled = false;
};

function goLeft() {
	clearInterval(walkR);
	walkL = setInterval(function(){ walkLeft(); }, 10);
	function walkLeft() {
		scrollBy(-1,0);
	};
	document.getElementById("goLeft").disabled = true;
	document.getElementById("goRight").disabled = false;
};


function stop() {
	clearInterval(walkR);
	clearInterval(walkL);
	document.getElementById("goRight").disabled = false;
	document.getElementById("goLeft").disabled = false;
};

document.addEventListener("DOMMouseScroll", stroll);
document.addEventListener("mousewheel", stroll);
document.addEventListener("wheel", stroll);
document.addEventListener("touchstart", stroll);

function stroll() {
	//if (window.event.wheelDelta.detail > 0) {
		scrollBy(50,0);
	// } else if (window.event.wheelDelta.detail < 0) {
		// scrollBy(-50,0);
	// }
	//alert(event.deltaX );
};

