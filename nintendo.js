
let canvas = document.getElementById("canvas")
let c = canvas.getContext("2d")
const gamewidth = 700
const gameheight = 700
let constant = 200;
let relativex = Math.random()
document.body.style.backgroundColor = "cornflowerblue"
canvas.style.backgroundColor = "grey"
let highscore = 0
let changable = 250
let diff = 300
let hostiles = []
let bag = 4
 
canvas.style.backgroundImage = "url('Images/matter.jpg')"

let audio = new Audio("sounds/duuh.mp3")
alert("Press any button to Start the game")
function setScore(){
    audio.play()
    if(time > highscore){
highscore = time
    }
    else{
        console.log("")
    }
}
function easy(){
    diff = "easy"
}
function hard(){
    diff = "hard"
}
function insane(){
    diff = "insane"
}

function difficulty(){
    if(diff == "easy"){
changable = 600
    }
    else if(diff == "hard"){
changable = 400
    }
    else if(diff == "insane"){
changable = 200
    }
}


class Enemy{
    constructor(){
        this.px =0 
        this.py = 0
        this.r = 15
        this.yvel = Math.random()*bag
        this.xvel = Math.random()*bag
        this.cond = true
        
        
    }
    make(){
    c.beginPath()
    c.arc(this.px,this.py,this.r,0,2*Math.PI,false)
    c.fillStyle = "red"
    c.fill()
    c.stroke()
    c.closePath()  
    }
    move(){
        this.px += this.xvel
        this.py += this.yvel
    }
    cond1(){
    if(relativex>=0  &&relativex<=0.2&& this.cond == true){
        this.px = 0
        this.py = Math.random()*gameheight
        this.xvel = 5
        relativex = Math.random()
        
   }
   else if(relativex>=0.2&& relativex <0.4&& this.cond == true){
this.px = gamewidth -this.r
this.py = Math.random()*gameheight
this.xvel = -5
relativex = Math.random()

   }
   else if(relativex >=0.4&&relativex <0.6&& this.cond == true){
       this.py = 0
       this.px = Math.random()*gamewidth
       this.yvel = 5
       relativex = Math.random()
       
               }
   else if(relativex >=0.6&& relativex<0.8&& this.cond == true){
           this.py = gameheight-this.r
           this.px = Math.random()*gamewidth
           this.yvel = -5
           relativex = Math.random()
           
     }
     else if (relativex >0.8){
         
         relativex = Math.random()
     }
     
     this.cond = false
    }
    touch(){
if (this.px+this.r >= player.px-15&& this.px-this.r<player.px+15&&this.py+this.r>player.py-15&&this.py-this.r <player.py+15){
setScore()
time = 0
for (let i = 0;i<prop;i++){
    hostiles.pop()
}
hostiles.push(new Enemy())


}
    }
   
    }

hostiles.push(new Enemy())
let prop = hostiles.length



let player = {
px : 300,
py : 300,
r :15,


create : function(){
        c.beginPath()
        c.arc(this.px,this.py,this.r,0,2*Math.PI,false)
        c.fillStyle = "blue"
        c.fill()
        c.stroke()
        c.closePath()
}
}
var time = 0
setInterval(function(){
    time++
},1000)



setInterval(function(){
    hostiles.push(new Enemy())
    constant+=30
    changable = 50
},changable)


function displayall(){
    for(let j = 0;j<=prop-1;j++){
        if (hostiles[j]!= ""){
    hostiles[j].make()
    hostiles[j].move()
    hostiles[j].cond1()
    hostiles[j].touch()
    

    prop = hostiles.length
    
    }
}
}
function gucci (){
    if (time > 30&&time<60){
        bag = 8
    }
    else if (time >60){
        bag = 10
    }
    else if(time <0){
        bag = 4
    }
}

function loop (){
    requestAnimationFrame(loop)
    c.clearRect(0,0,gamewidth,gameheight)
    displayall()
   player.create()
   document.getElementById("para").innerHTML = "Score : "+time
   document.getElementById("highscore").innerHTML = "Highscore : "+highscore
gucci()

}
document.getElementById("canvas").addEventListener("mousemove",function(e){
    player.px = e.clientX - 444
    player.py = e.clientY -25
},true)

