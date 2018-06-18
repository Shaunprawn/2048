// function setup() {
//   createCanvas(800, 800);
// 	grid = [
// 	[0,0,0,0],
// 	[0,0,0,0],
// 	[0,0,0,0],
// 	[0,0,0,0]
//   ];
//   console.table(grid);
// 	addNumber();
// 	addNumber();
// 	console.table(grid);
// }

//need to add in j logic early
//grid movement must happen before k<j


// for (var i = 0; i < 4; i++) {   //movement along the x axis
//   for (var j = 1; j < 4; j++) {   //movement along the y axis
//     var boxId = j.toString()+i.toString(); 
//     var box = document.getElementById(boxId);


//       for (var k = 0; k < j; k++) {
//         var refBox = k.toString()+i.toString();
//         var ref = document.getElementById(refBox);

        // if (ref.childNodes.length<1 && boxId.childNodes.length == 1) {
        //   var cln = boxId.lastChild.cloneNode(true); //clone
        //   ref.appendChild(cln);
        //   boxId.removeChild(boxId.childNodes[0]);
        //   console.log(cln);
        // } else {
        //   return;
        // }



//         boxId = boxId.split('');
//         console.log("boxID "+boxId)
//         var boxArr = [];
//           for (var i=0; i<boxId.length; i++){   //pushes num into array
//             var id1 = parseInt(boxId[i]);
//             boxArr.push(id1);
//             console.log(boxArr);
//           }

//         for (var l=0; l<boxArr.length; l++){

//         }
//            // if (.childNodes.length<1) { //if box is empty - execute
//               //INSERT FUNCTION TO MOVE HERE
//     }
//   }
// }

// var num = "10";
// num = num.split('');         //split string
// var numArr = []              //create array
// for (var i=0; i<num.length; i++){   //pushes num into array
//   var num1 = parseInt(num[i])
//   numArr.push(num1)
// }

// var num2 = numArr[0]-1; //reduce first index in array grid by 1
// numArr.shift();         //take out index[0]
// numArr.unshift(num2);   //add back new index [0] value
// numArr = numArr.join(""); //convert array to string

function randomNumGen () {
  var foo = true;


  while (foo) {
    //create random number 2 or 4
    var z = Math.random() > 0.9 ? 2 : 4;
    console.log('random number: ' + z);



    //random row and column
    var row = Math.floor(Math.random()*4);
    var col = Math.floor(Math.random()*4);
    var ranGrid = [row, col];
    ranGrid = ranGrid.join("");
    var ranBox = document.getElementById(ranGrid);

    if (ranBox.childNodes.length<1) {
      //add random number to random row/column
      var createPara = document.createElement("p");
      createPara.innerText = z;
      ranBox.appendChild(createPara);
      foo = false;
    }
  }
}

function open () {

}

var numArr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
};

shuffle(numArr)

var box = document.getElementsByClassName('smallBox');

for (var i = 0; i < box.length; i++) {
  let a = numArr.pop()
  box[i].childNodes[0].src = 'cb_cards/' + a + '.png';
  box[i].childNodes[0].className = a;
  box[i].addEventListener('click', function (){
    this.childNodes[0].style.visibility = "visible";
})
};


