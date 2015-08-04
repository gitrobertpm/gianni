// GALLERY JS

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

function stroll() {
	scrollBy(50,0);
};

