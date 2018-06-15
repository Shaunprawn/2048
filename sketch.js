// function setup() {
//   createCanvas(800, 800);
// 	grid = [
// 	[0,0,0,0],
// 	[0,0,0,0],
// 	[0,0,0,0],
// 	[0,0,0,0],
//   ];
//   console.table(grid);
// 	addNumber();
// 	addNumber();
// 	console.table(grid);
// }

var a1 = document.getElementById('10')
var num = "10";
num = num.split('');
var numArr = []
for (var i=0; i<num.length; i++){
  var num1 = parseInt(num[i])
  numArr.push(num1)
}
console.log(numArr)



//a1.innerText = 'first';
var num2 = numArr[0]-1;
numArr.shift();
numArr.unshift(num2);
numArr = numArr.join("");
// numArr = numArr.toString();

console.log(typeof(numArr));



function addNumber(){
	var options = [];
	for (var i=0 ; i < 4; i++){
		for (var j=0; j < 4; j++){
			if (grid[i][j] === 0){
				options.push({
					x: i,
					y: j
				});

				
			}
		}
	}
	if (options.length > 0);
	var spot = random(options);
	var r = random(1)
	grid[spot.x][spot.y] = r > 0.5 ? 2 : 4
}

//function draw() {
  // background(255);
  // for(var i=0;i<4;i++){
  //   for(var j=0; i<4; j++){
  //     noFill();
  //     strokeWeight(2);
  //     stroke(0);
  //     rect(i * w, j * w, w , w);
  //     var val = grid [i][j];
  //     if (grid[i][j] !== 0){
  //       textAlign(CENTER);
  //       text(val, i*w+w/2, j*w+w/2);
  //     }

  //   }
  // }  
//}

// function randomNum (){
//   var rn = Math.random(1)
//   if (arr == " " || 0) {
//     // place number in grid = rn > 0.5 ? 2 : 4)
//     else {
      
//     }
//   }
// }

function randomNum () {
var chooseB = Math.floor((Math.random() * 15)+1);
  if (chooseB == " "){
document.getElementById(chooseB).value = (Math.random(1) > 0.5 ? 2 : 4);
  } else {
    randomNum();
  }
}
