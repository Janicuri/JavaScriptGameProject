var canvas = document.getElementById("canvas")
var c = canvas.getContext("2d")
var maxSpeed = 5
const width = 600;
const height = 600;
var player1_score = 0
var player2_score = 0
var bool = false;
var buton2 = document.createElement("button")
buton2.id = "btn2"
buton2.innerHTML = "Pause"
var savedy
var savedx
var winScore = 10
document.getElementById("h1").innerHTML = "Press SPACE to start"
let audio = new Audio("sounds/paddleshot.mp3")
let die = new Audio("sounds/die.mp3")


buton2.onclick = function(){
    if (ball.vy != 0 ){
    savedx = ball.vx
    savedy = ball.vy
    ball.vy = 0
    ball.vx = 0
    document.getElementById("btn2").innerHTML = "UnPause"
}
else if (ball.vy == 0){
    ball.vy = savedy
    ball.vx = savedx
    document.getElementById("btn2").innerHTML = "Pause"

}
}

function pause (){
    if (ball.vy != 0 ){
    savedx = ball.vx
    savedy = ball.vy
    ball.vy = 0
    ball.vx = 0
}
else if (ball.vy == 0){
    ball.vy = savedy
    ball.vx = savedx
    document.getElementById("btn2").innerHTML = "Pause"

}
}



var player1 = {
px : 40,
py : 250,
width: 30,
height: 80,
condition: true,
condition2:true,

make : function(){
    c.beginPath()
    c.fillStyle = "green"
    c.fillRect(this.px,this.py,this.width,this.height)
    c.stroke()
    c.closePath()
},
move : function(){
if (this.condition == true && this.condition2 == true && this.py >=0){
    this.py-=7
}
else if (this.condition == false && this.condition2 == true && this.py+this.height <=height){
    this.py+=7
}

}
}

var player2 = {
    px : 530,
    py : 250,
    width: 30,
    height: 80,
    
    make : function(){
        c.beginPath()
        c.fillStyle = "blue"
        c.fillRect(this.px,this.py,this.width,this.height)
        c.stroke()
        c.closePath()
    }
    }

var ball = {
px: 285,
py:285,
r:15,
vx :0,
vy:0,

make(){
    c.beginPath()
    c.arc(this.px,this.py,this.r,0,2*Math.PI,false)
    c.fillStyle = "red"
    c.fill()
    c.stroke()
    c.closePath()   
},
move: function(){

},

up_down_cond : function(){
if (this.py - this.r<=0){
this.vy = maxSpeed
}
else if (this.py + this.r>=height){
    this.vy = -maxSpeed
}
else if(this.px -this.r<=0){
    die.play()
    this.destroy()
    player2_score++
}
else if(this.px +this.r>=width){
    die.play()
    this.destroy()
    player1_score++
}
},
move : function(){
    this.px +=this.vx
    this.py +=this.vy
},
destroy:function(){
    this.px = 285
    this.py = 285
    this.swap()
},
swap:function(){
    if (bool == false){
        ball.vy = maxSpeed;
        ball.vx = maxSpeed;
        bool = true
        }
        else if (bool == true){
        ball.vy = -maxSpeed;
        ball.vx = -maxSpeed;
        bool = false
        }
},
p1_cond : function(){
    if (this.py>=player1.py && player1.py + player1.height >= this.py && player1.px<=this.px-this.r && player1.px+player1.width + 15 >= this.px){
        this.vx = maxSpeed
        audio.play()
    }
},
p2_cond : function(){
    if(this.py>=player2.py && player2.py + player2.height >= this.py && player2.px-15 <=this.px && player2.px+player2.width >= this.px){
this.vx = -maxSpeed
audio.play()
    }
}

}
function win(){
    if (player1_score >= winScore){
document.getElementById("h1").innerHTML = "Player1 Wins"
ball.vx = 0
ball.vy = 0
    }
    else if (player2_score  >=winScore){
        document.getElementById("h1").innerHTML = "Player2 Wins"
        ball.vx = 0
        ball.vy = 0
    }
}



function loop(){
    requestAnimationFrame(loop)
    c.clearRect(0,0,width,height)
    player1.make()
    player2.make()
    ball.make()
    ball.up_down_cond()
    player1.move()
    ball.move()
    win()
    document.getElementById("p1").innerHTML = "Player1's Points : " + player1_score
    document.getElementById("p2").innerHTML = "Player2's Points : " + player2_score
    ball.p1_cond()
    ball.p2_cond()
}
player1.condition2 = false
loop()
document.getElementById("canvas").addEventListener("mousemove",function(e){
    player2.py = e.clientY -150

        },false)



function start(){ 
    ball.vy = maxSpeed;
    ball.vx = maxSpeed;
    document.getElementById("container").removeChild(document.getElementById("btn"))
    document.getElementById("container").appendChild(buton2)
    if (document.getElementById("input").value != 0){
    winScore = document.getElementById("input").value
    }
    else{
        winScore = 10
    }
    
}
document.addEventListener("keydown",function(key){
    player1.condition2 = true
if (key.keyCode == "87"){
    
    player1.condition = true
}
else if(key.keyCode == "83"){

    player1.condition = false
}
},true)

document.addEventListener("keydown",function(key){
    if(key.keyCode == "80"){
        pause()
    }
},false)
document.addEventListener("keydown",function(key){
    if(key.keyCode == "32"){
    start()
    }
},false)
document.addEventListener("keydown",function(key){
    if (key.keyCode == "69" && player1.condition2 == true){
        player1.condition2 = false
    }
    },true)