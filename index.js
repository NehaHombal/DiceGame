//i tried to code it but it dint work so below is angela yu's code which works top notch


// var n =Math.floor(Math.random() * 6)+1;
// var randomNumber = "images/dice" + n + ".png";
// var random1 =  document.querySelectorAll("img")[0].setAttribute("src",randomNumber);
// var random2 = document.querySelectorAll("img")[1].setAttribute("src",randomNumber);

// if (random1 > random2){
//     document.getElementsByTagName("h1").innerHtml("🎈Player 1 Wins");

// }else if(random2 > random1){
//     document.getElementsByTagName("h1").innerHtml("Player 2 Wins🎈");

// }else {
//     document.getElementsByTagName("h1").innerHtml("Draw!!!...");

// }

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img") [1].setAttribute("src", randomImageSource2);



var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img") [0].setAttribute("src", randomImageSource1);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else {
document.querySelector("h1").innerHTML = "Draw!";
}