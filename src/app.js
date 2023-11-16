/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector('.btn').addEventListener("click", function() {
    generateRandomCard();
  })
  
};

function generateRandomCard() {
  let allSuit = ["♦", "♣", "♥", "♠"];
  let allNumbers = ["2","3","4","5","6","7","8","9","10","K","Q","J","A"];

  let randomSuit = allSuit[Math.floor(Math.random()* allSuit.length)];
  let randomNumber = allNumbers[Math.floor(Math.random()* allNumbers.length)];

  if(randomSuit === "♦" || randomSuit === "♥") {
    document.querySelector('.top').style.color='red';
    document.querySelector('.bottom').style.color='red';
    document.querySelector('.number').style.color='red';
  } else {
    document.querySelector('.top').style.color='black';
    document.querySelector('.bottom').style.color='black';
    document.querySelector('.number').style.color='black';
  }
  document.querySelector('.top').innerHTML=randomSuit
  document.querySelector('.bottom').innerHTML=randomSuit
    document.querySelector('.number').innerHTML=randomNumber
}

