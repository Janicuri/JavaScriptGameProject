let canvas = document.getElementById("canvas")
let c = canvas.getContext("2d")
const gamewidth = 500;
const gameheight = 500;
let mario = document.getElementById("marior")
let mariol =document.getElementById("mariol")
class Platform{
    constructor(px,py,width,height){
        this.px = px
        this.py = py 
        this.width = width 
        this.height = height
    }
    make(){
        c.beginPath()
        c.fillStyle = "yellow"
        c.strokeStyle = "black"
        c.fillRect(this.px,this.py,this.width,this.height)
        c.stroke()
        c.closePath()
    }
}
class Player{
constructor(){
    this.px = 30
    this.py = gameheight - 500 
    this.width = 30 
    this.height = 30
    this.vely = 3
    this.velx = 5
    this.temp = 500
    this.cond = true
    this.dir = "right"
}
gravity(){
    if (this.py + this.height >=gameheight && this.cond == true){
        this.vely = 0
    }
    this.py +=this.vely

}
make(){
    c.beginPath()
    c.fillStyle = "black"
    c.strokeStyle = "black"
    if (this.dir == "right"){
    c.drawImage(mario,this.px,this.py,this.width,this.height)
    }
    else if (this.dir == "left"){
        c.drawImage(mariol,this.px,this.py,this.width,this.height)
    }
    c.stroke()
    c.closePath()
}
jump(){
    this.temp = this.py - 100
    this.vely = -3
}
check (){
    if(this.py <= this.temp){
this.vely = 3
this.cond = true 
    }
}
move (direction){
    if (direction == "right"){
        this.px+=this.velx
        this.dir = "right"
    }
    else   if (direction == "left"){
        this.px-=this.velx
        this.dir = "left"
    }

}
}
me = new Player()

function loop(){
    requestAnimationFrame(loop)
    c.clearRect(0,0,gamewidth,gameheight)
    me.make()
    me.gravity()
    me.check()
}



document.addEventListener("keydown",function(key){
if(key.keyCode == "38" && me.py + me.height >= gameheight){
    me.cond = false 
    me.jump()

}
if(key.keyCode == "37"){ 
    me.move("left")
    
}
if(key.keyCode == "39"){ 
    me.move("right")
    
}


},true)




loop()