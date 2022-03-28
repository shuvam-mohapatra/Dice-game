// Dice 1
var randomNumber1 = Math.round((Math.random() * 5) + 1);
var randomDiceImg = "dice" + randomNumber1 + ".png";
var imageSource = "images/" + randomDiceImg;
var image1 = document.querySelectorAll("img")[0].setAttribute("src", imageSource);

// Dice 2
var randomNumber2 = Math.round((Math.random() * 5) + 1);
var imageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

// Winner text

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player1 Wins";
}

else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player2 Wins";
}

else if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}
