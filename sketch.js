
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
  box[i].addEventListener('click', function (event) {checkTurn(event.target)});
};


var pairsFound = 0;
var cardsPicked  = {};
function checkTurn(cardClicked) {
  var cardClickedId = cardClicked.id;
  var tempArr = Object.keys(cardsPicked);

    if(cardClicked.childNodes[0].style.visibility == "visible") {
      return;
    } else if (tempArr.length == 0) {
      cardClicked.childNodes[0].style.visibility = "visible";//flip card
      cardsPicked.firstName = cardClicked.childNodes[0].className;
      cardsPicked.firstId = cardClickedId;
    } else if (tempArr.length == 2) {
      cardClicked.childNodes[0].style.visibility = "visible";
      cardsPicked.secondName = cardClicked.childNodes[0].className;
      cardsPicked.secondId = cardClickedId;
      setTimeout(function () {checkWinRound()}, 1000);
      

      //flip card and check for win and proceed accordingly
    }

  function checkWinRound(){
    if (cardsPicked.firstName != cardsPicked.secondName){
      document.getElementById(cardsPicked.firstId).childNodes[0].style.visibility = "hidden";
      document.getElementById(cardsPicked.secondId).childNodes[0].style.visibility = "hidden";
      cardsPicked = {};
    } else {
      pairsFound++;
      if (pairsFound == 8){
        alert("YOU WIN!!!")
      }
      cardsPicked = {};
    }
  }

};
