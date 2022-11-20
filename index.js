for (i = 0; i < document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener('click', handleClick);
}
function handleClick() {
  
  var clickedButton = this.innerHTML;
  sound(clickedButton);
pressAnimation(clickedButton);
}

document.addEventListener("keydown", keyPressed);
function keyPressed(e) {
  sound(e.key);
   pressAnimation(e.key);
}

function sound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom1 = new Audio("sounds/tom-2.mp3");
      tom1.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/tom-3.mp3");
      tom1.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;
    case "j":
      var tom1 = new Audio("sounds/kick-bass.mp3");
      tom1.play();
      break;
    case "k":
      var tom1 = new Audio("sounds/snare.mp3");
      tom1.play();
      break;
    case "l":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;
    default:
      break;
  }
}
function pressAnimation(anim){
    var activeBtn=document.querySelector("."+anim);
    activeBtn.classList.add("pressed")
    setTimeout(function () {
        activeBtn.classList.remove("pressed")
    },100)
}
