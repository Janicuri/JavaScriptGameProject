let canvas = document.getElementById("canvas")
let c = canvas.getContext("2d")

const gamewidth = 600
const gameheight = 600
var lowerpipe = document.getElementById("lowerpipe")
var upperpipe = document.getElementById("upperpipe")
var bird = document.getElementById("bird")
var score = 0
var highScore = 0
var hit = new Audio("sounds/hit.mp3")
var point = new Audio("sounds/point.mp3")
var wing =new Audio("sounds/wing.mp3")

class Ball{
    constructor(){
        this.px = 200
        this.py = 200
        this.r = 15
        this.yvel = 5
        this.temp = 0
    }
    make(){
    c.beginPath()
    c.arc(this.px,this.py,this.r,0,2*Math.PI,false)
    //c.drawImage(bird,this.px,this.py,this.r,this.r)
    //c.drawImage(bird,this.px,this.py,this.r,0,2*Math.PI,false)
    c.fillStyle = "red"
    c.fill()
    c.stroke()
    c.closePath()  
    }
    jump(){
        this.temp = this.py-70
        this.yvel = -5
        
    }
    gravity(){
this.py+=this.yvel
if (this.py+this.r >=gameheight){
    this.yvel = 0
    hit.play()
    this.lose()
    

}

    }
 hop(){
    if (this.py<=this.temp){
        this.yvel = 5
    }
    }
lose(){
    alert("GAME OVER!!!")
this.py = 200
this.yvel = 0
this.temp = 0
if(highScore < score){
highScore=score
}
else{
    console.log("fk")
}
score = 0
console.log("You lose")
for (var ia = 0;ia<okok;ia++){
    arrr[ia] = "";
}
arrr.push(new Pipe())
okok = arrr.length
create()


}
}


class Pipe{
constructor(){
    this.px = 600
    this.py = 0
    this.w = 50 
    this.h = Math.random()*450
    this.py2 =  this.h + 120
    this.h2 = gameheight - this.py2
    this.velocity = -3
    this.pussy = false
}
make(){
        c.beginPath()
        c.fillStyle = "green"
        //c.drawImage(image,this.px,this.py,this.w,this.h);
        c.drawImage(upperpipe,this.px,this.py,this.w,this.h)
        c.drawImage(lowerpipe,this.px,this.py2,this.w,this.h2)
        // c.fillRect(this.px,this.py,this.w,this.h)
        // c.fillRect(this.px,this.py2,this.w,this.h2)
        c.stroke()
        c.closePath()
}
cond(){
if (ball1.py - ball1.r+3>=this.py+ this.h&&ball1.px>=this.px&&ball1.px <= this.px + this.w&&ball1.py+ball1.r<=this.py2){
this.plus()
this.pussy = true
}
else if(ball1.py-ball1.r+4<=this.py+this.h&&ball1.px+ball1.r-4>=this.px&&ball1.px-ball1.r<= this.px+this.w){
    hit.play()
ball1.lose()

}
else if(ball1.py+ball1.r-4>=this.py2&&ball1.px+ball1.r-4>=this.px&&ball1.px-ball1.r <= this.px+this.w){
    hit.play()
    ball1.lose()
    }




}
plus(){
if (this.pussy == false){
score++
point.play()
}
}
move(){
    this.px += this.velocity
}
}



arrr = []
arrr.push(new Pipe())
let okok = arrr.length
let ball1 = new Ball()

function create(){
    if (arrr[okok-1].px-100<= ball1.px){
        arrr.push(new Pipe())
        okok = arrr.length
    }
    
}

let j;

function remove(){
    for(j = 0 ;j<=okok-1;j++){
    if (arrr[j] != ""){
        arrr[j].make()
        arrr[j].move()
        arrr[j].cond()
        
    }    
}
}

function league(){
    if (score >= 20&&score<40){
        canvas.style.backgroundImage = "url('Images/night_background.png')"
    }
    else if (score >= 40&&score<60){
        
        canvas.style.backgroundImage = "url('Images/background.png')"
    }
    else if (score >= 60){
       
        canvas.style.backgroundImage = "url('Images/night_background.png')"
    }
    else if (score <= 20){
    
        canvas.style.backgroundImage = "url('Images/background.png')"
    }

}


function loop(){
requestAnimationFrame(loop)
c.clearRect(0,0,gamewidth,gameheight)
ball1.make()
ball1.gravity()
ball1.hop()
create()
remove()
league()
document.getElementById("para").innerHTML = "SCORE : "+ score
document.getElementById("graph").innerHTML = "HIGHSCORE : "+ highScore
}
loop()
document.addEventListener("keydown",function(key){
    if (key.keyCode == "32"){
        wing.play()
        ball1.jump()
    }
    },true)
    alert("Press SPACE BAR TO START")