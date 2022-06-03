let image = document.getElementById("brick")
let paddle_img = document.getElementById("paddle")

let brickshot = new Audio("sounds/brickshot.mp3")
let pads = new Audio("sounds/paddleshot.mp3") 
let die = new Audio("sounds/die.mp3")
class Brick{
    constructor(px,py,w,h,pose){
        this.px = px 
        this.py = py 
        this.w = w 
        this.h = h 
        this.pose = pose
     
    }
    condition(){
        if (player.px >= this.px && player.px < this.px + this.w && player.py > this.py && player.py-15 <= this.py + this.h){
            this.destroy()
            brickshot.play()
            console.log("gg")
        }

    }
    destroy(){
        arrr[this.pose] = ""
     if (player.vely == -5){
         player.vely = 5
     }
     else if (player.vely == 5){
         player.vely = -5
     }

    }
    make(){
        c.beginPath()
        c.fillStyle = "brown"
        c.drawImage(image,this.px,this.py,this.w,this.h);
        //c.fillRect(this.px,this.py,this.w,this.h)
        c.stroke()
        c.closePath()
    }
    
    
}
class Ball {
    constructor(px,py,r){
        
        this.px = px 
        this.py = py 
        this.r = r        
        this.velx = 0
        this.vely = 0
    }
    make(){
        c.beginPath()
        c.arc(this.px,this.py,this.r,0,2*Math.PI,false)
        c.fillStyle = "red"
        c.fill()
        c.stroke()
        c.strokeStyle = "red"
        c.closePath()    
    }
    move(){
        this.px += this.velx
        this.py +=this.vely
    }
    condition(){
        if (this.px+15 >= gamewidth){
            this.velx = -5
        }
        else if (this.px-15 <= 0){
            this.velx = 5
        }
        else if (this.py-15 <= 0){
            this.vely = 5
        
        }
        else if (this.px >= paddle.px && paddle.px+ 100 >= this.px && paddle.py <= this.py +20 && paddle.py + 20 >= this.py ){
            this.vely = -5
            pads.play()
        }
        else if(this.py+15 >= gameheight){
            die.play()
            this.destroy()
            
            
        }
    }
    destroy(){
        this.px = gamewidth *Math.random()
        this.py =  300
        this.velx = 0
        this.vely = 0
        for (let ok = 0;ok<100;ok++){
            if ( arrr.length == 0 ){
                break
            }
            else{
            arrr.pop()
        }
        }
        if (level == "level1"){
            spawn()
        }
        else if (level =="level2"){
            level2()
        }
        else if (level == "level3"){
            level3()
        }
    }
}
var paddle = {
    px : 50,
    py : 530,
    w : 100,
    h : 20,

    make : function(){
        c.beginPath()
        c.fillStyle = "green"
        c.drawImage(paddle_img,this.px,this.py,this.w,this.h)
       // c.fillRect(this.x,this.phis.py,this.w,this.h)
        c.stroke()
        c.closePath()
    }
}
var level = "level1"
let canvas = document.getElementById("canvas")
var c = canvas.getContext("2d")
var gamewidth = canvas.width 
var gameheight = canvas.height 
let player = new Ball(300,300,15)
var arrr = []
var blah = 30

function spawn(){
    for (var i = 0;i<26;i++){
        var u = i-8
        var eha = i - 16
        if(i <= 8 ){
    arrr.push(new Brick(70 * i,50,60,blah,i))
    
}
else if (i>8 && i<16){
arrr.push(new Brick(80*u,100,60,blah,i))

}
else if(i>=16){
arrr.push(new Brick(70*eha,150,60,30,i))

} 
console.log()
eha++
u++
}
}
spawn()


function start(){
    if (player.velx == 0&& player.vely==0){
        player.velx = 5
    player.vely = 5
    }
    else if (player.velx == 5 && player.vely == 0){
        player.velx = 5
        player.vely = 5
    }
    else if(player.vely == 5 && player.velx == 0){
        player.velx = 5
        player.vely = 5
    }
    
}


function remove(){
    for(let j = 0 ;j<=23;j++){
    if (arrr[j] != ""){
        arrr[j].make()
        arrr[j].condition()
    }    
}

    

}
function level2(){
    for (let ok = 0;ok<100;ok++){
        if ( arrr.length == 0 ){
            break
        }
        else{
        arrr.pop()
    }
    }
    for (var i = 0;i<26;i++){
        var u = i-8
        var eha = i - 16
        if(i <= 8 ){
    arrr.push(new Brick(80 * i,40,60,blah,i))
    
}
else if (i>8 && i<16){
arrr.push(new Brick(80*u,400,60,blah,i))

}
else if(i>=16){
arrr.push(new Brick(70*eha,250,60,30,i))

} 
console.log()
eha++
u++
}

}

function level3 (){
    for (let ok = 0;ok<100;ok++){
        if ( arrr.length == 0 ){
            break
        }
        else{
        arrr.pop()
    }
    }
    for (var i = 0;i<26;i++){
        var u = i-8
        var eha = i - 16
        if(i <= 8 ){
    arrr.push(new Brick(80 * i,40+ i*10,60,blah,i))
    
}
else if (i>8 && i<16){
arrr.push(new Brick(80*u,120-i*10,60,blah,i))

}
else if(i>=16){
arrr.push(new Brick(70*i,60,60,30,i))

} 
console.log()
eha++
u++
}
}

function check(){
 
    if (arrr[0]===arrr[1] && arrr[1] === arrr[2] && arrr[2] === arrr[3]&& arrr[3] === arrr[4] && arrr[4] === arrr[5] && arrr[5] === arrr[6] && arrr[6] === arrr[7]&& arrr[7] === arrr[8] && arrr[8] === arrr[0]){
        document.getElementById("h1").innerHTML = "Level 2"
        level = "level2"
        level2()
    
}
}

function loop(){
requestAnimationFrame(loop)
c.clearRect(0,0,gamewidth,gameheight)
player.make()
paddle.make()
remove()
check()
player.move()
player.condition()
}

loop()

document.getElementById("Content").addEventListener("mousemove",function(e){
    paddle.px = e.clientX -550
},false)

canvas.style.backgroundImage = "url('Images/brickwall.jpg')"