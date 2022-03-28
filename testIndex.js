// alert("Working");





if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
}
function rollDice(){

  var name1 = document.querySelector(".p1").innerHTML = prompt("Enter your Player1's name.");
  var name2 = document.querySelector(".p2").innerHTML = prompt("Enter your Player2's name.");
    alert("Please Roll the Dice");
  // Dice 1
  var randomNumber1 = Math.round((Math.random() * 5) + 1);
  var randomDiceImg = "dice" + randomNumber1 + ".png";
  var imageSource = "images/" + randomDiceImg;
  var image1 = document.querySelectorAll("img")[0].setAttribute("src", imageSource);

  // Dice 2
  var randomNumber2 = Math.round((Math.random() * 5) + 1);
  var imageSource2 = "images/dice" + randomNumber2 + ".png";
  var image2 = document.querySelectorAll("img")[1].setAttribute("src", imageSource2);
  winner(randomNumber1, randomNumber2, name1, name2);
}
function winner(randomNumber1,randomNumber2, name1, name2){
  if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = name1 + " Wins";
  }

  else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = name2 + " Wins";
  }

  else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
// rollDice();
