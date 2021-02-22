function showDiv() {
  document.getElementById('enterNumber').style.visibility = "visible";
  document.getElementById('button').style.display = "none";
  document.getElementById('displayText').style.visibility = "visible";
}


function playGame() {
  let userNumber = document.getElementById('numberInput').value;
}


function removeGuess() {
  let userNumber = document.getElementById('numberInput').value;
  let change = document.getElementById('displayText');
  document.getElementById('displayText').style.color = "white";
  if (userNumber < randomNum) {
    change.innerText = "Guess higher than " + userNumber;
  } else if (userNumber > randomNum)
    change.innerText = "Guess lower than " + userNumber;  
}


var randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);
var tries = 3;


function triesLeft() {
  let userNumber = document.getElementById('numberInput').value;
  if (userNumber != randomNum) {
    tries--;
    if (tries == 2) {
      document.getElementById('triesLeftCount').innerText = "2";
    } else if (tries == 1) {
    document.getElementById('triesLeftCount').innerText = "1";
     } else {
       document.getElementById('triesLeftCount').innerText = "GAME OVER";
       document.getElementById('enterNumber').style.visibility = "hidden";
       document.getElementById('triesLeft').style.visibility = "hidden";
       resetButton();
     }
  } else if (userNumber == randomNum) {
       document.getElementById('triesLeftCount').innerText = "You Win!";
       document.getElementById('enterNumber').style.visibility = "hidden";
       document.getElementById('triesLeft').style.visibility = "hidden";
       resetButton();
  }
}



function resetButton() {
  document.getElementById('resetButton').style.visibility = "visible";
}



function resetGame() {
  location.reload(true);
} 
