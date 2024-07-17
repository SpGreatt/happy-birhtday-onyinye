const input = document.getElementById('inputNumber');
const button = document.getElementById('btn');
const unflip = document.getElementById('unflip');
const input2 = document.getElementById('inputNumber2');
const button2 = document.getElementById('btn2');

function myFunction() {
  if (parseInt(input.value) === 10) {
    flipCard();
  }
}

function flipCard() {
  const card = document.getElementById('card'); // assuming your card element has an id "card"
  card.classList.toggle('flip'); // toggle the "flip" class to trigger the animation
}

function unback(){
  const card = document.getElementById('card'); 
  card.classList.toggle('flip'); 
}

button.addEventListener("click", myFunction);
unflip.addEventListener("click", unback);

function other(){
  if(parseInt(input.value) === 10){
    swing();
  } else{
    alert("what's your problem this girl");
  }
}
function swing(){
  const card2 = document.getElementById('card2');
  card2.classList.toggle('flip');
}

button2.addEventListener("click", swing);