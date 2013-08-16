var land = document.getElementById('thisLand');
var context = land.getContext('2d');
var animate = null;

var katamari = {
	x: 200,
	y: 200,
	radius: 20,
	color: 'green',
	speed: 1,
}
var charCode = {
	97: function(){
		return katamari.x -= katamari.speed
  	},
      
    100: function(){
      return katamari.x += katamari.speed
  	},
      
    119: function(){
      return katamari.y -= katamari.speed;
  	},
      
    115: function(){
      return katamari.y += katamari.speed;
  	}
      
}

function drawKatamari(){
context.beginPath();
context.arc(katamari.x, katamari.y,katamari.radius,0,2*Math.PI,false);
context.fillStyle = katamari.color;
context.fill();
context.lineWidth = 5;
context.strokeStyle = '#003300';
context.stroke();
}

function movement(e){
	if(charCode[e.charCode]!=undefined){
		charCode[e.charCode]();
	}
}
function gameLoop(){
	context.clearRect(0,0,land.width, land.height);
	drawKatamari();
	document.onkeypress = movement;
	// setInterval(gameLoop, 50);
}
gameLoop();
animate = setInterval(gameLoop,50);