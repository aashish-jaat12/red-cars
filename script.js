const game =document.getElementById('game')
const bluecar =document.getElementById('bluecar')
const redcar = document.getElementById('readcar')
const gameover =document.getElementById('gameover')
const score =document.getElementById('score')
const scoreon=document.getElementById('scoreon')
const sound=document.getElementById('sound')
const oonosound=document.getElementById('oonosound')
 let counter =0;
bluecar.addEventListener('animationiteration', function(){

const rendam = ((Math.floor(Math.random() *3))*130)
    bluecar.style.left =rendam + "px"
     counter++
     scoreon.innerHTML =`Score: ${counter}`
})


///////////car right
 function  right(){

    const redcarleft =parseInt(window.getComputedStyle(redcar).getPropertyValue("left"))
   if(redcarleft < 260) {redcar.style.left=(redcarleft +130) + "px"}
sound.play();
}

const carright = document.getElementById('carright')


carright.addEventListener('click', ()=>{

   right()
})

//////////car lift


window.addEventListener('keydown',(e)=> {

if(e.key == 'ArrowRight')
{
    const redcarleft =parseInt(window.getComputedStyle(redcar).getPropertyValue("left"))
   if(redcarleft < 260) {redcar.style.left=(redcarleft +130) + "px"}
    sound.play()
}
if(e.key == 'ArrowLeft'){
    const redcarleft =parseInt(window.getComputedStyle(redcar).getPropertyValue("left"))
   if(redcarleft > 0) {redcar.style.left=(redcarleft -130) + "px"}
    sound.play()
}

})

 function  left(){
 const redcarleft =parseInt(window.getComputedStyle(redcar).getPropertyValue("left"))
   if(redcarleft > 0) {redcar.style.left=(redcarleft -130) + "px"}
sound.play()
}

const carleft = document.getElementById('carleft')


carleft.addEventListener('click', ()=>{

   left()
})

 

////////////////////gameover
setInterval( function gameovers() {
  

var bluecartops =parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"))
var bluecarlefts =parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"))
var redcarlefts =parseInt(window.getComputedStyle(redcar).getPropertyValue("left"))

if((bluecarlefts===redcarlefts) && (bluecartops > 340) && (bluecartops<540)){
      
      gameover.style.display = 'block';
      game.style.display= "none";
      score.innerHTML =`Score: ${counter}`
     oonosound.play()

         }



},10)

