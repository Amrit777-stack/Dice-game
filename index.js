var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
var random1=(Math.floor(randomNumber1)+1);
document.querySelector(".img1").setAttribute("src","./images/dice"+random1+".png");
var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
var random2=(Math.floor(randomNumber2)+1);
document.querySelector(".img2").setAttribute("src","./images/dice"+random2+".png");
if (random1>random2)
{
    document.querySelector("h1").innerHTML="Player 1 Won &#127881"
}
else if(random1<random2)
{
    document.querySelector("h1").innerHTML="Player 2 Won &#127881"
}
else{
      document.querySelector("h1").innerHTML="Oops! Round tied&#128517"
}
function refreshPage() {
  location.reload();
}
