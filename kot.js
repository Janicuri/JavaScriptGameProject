let canvas = document.getElementById("canvas")
let c = canvas.getContext("2d")
canvas.style.backgroundColor = "lightgreen"
document.body.style.backgroundColor = "black"
const gamewidth = 700
const gameheight = 700
let k = 1;
let objects = []
class Object {
    constructor(px,py,width,height,way){
       this.px = px 
       this.py = py 
       this.width = width 
       this.height = height
       this.way = way  
    }
    show (){
        c.beginPath()
        c.fillStyle = "darkblue"
        c.fillRect(this.px,this.py,this.width,this.height)
        c.stroke()
        c.closePath()
    }

}
let ground = new Object(-25,650,750,60,"down")
objects.push(ground)
objects.push(new Object(100,550,800,15,"down"))

objects.push(new Object(100,250,500,15,"down"))
function level (){
for(let i = 0 ;i<objects.length;i++){
objects[i].show()
}    
}


let player = {
    px:100,
    py:635,
    r :20,
    velx:5,
    vely:5,
    temp:0,
    cond: false,
    checkall:function(){
        for(var i = 0;i < objects.length;i++){
            if(this.vely == 5 &&this.px >= objects[i].px&& this.px <= objects[i].px + objects[i].width&& this.py +this.r >= objects[i].py && this.py + this.r <= objects[i].py + objects[i].width){
                this.cond = true        
            }
            else if(this.vely ) {
                this.cond = false
            }
            
        }
        objects.length = objects.length
    },
    gravity:function(){
        
         if(this.py + this.r <= ground.py && this.cond == false){
         this.py +=this.vely
        }
    else if (this.vely == -5){
        this.py += this.vely
}    
},
    move:function () {
        if(this.py +this.r >=this.temp){
            this.px+=this.velx
        }
    },
    show: function(){
        c.beginPath()
        c.fillStyle = "red"
        c.fillRect(this.px,this.py,this.r,this.r)
        c.stroke()
        c.closePath()
    },
    jump: function() {
        this.temp = this.py -100
        this.vely = -5
    },
    godown: function(){
        if(this.py <= this.temp){
            this.vely = 5
        }
    },
    direction : function(dir){
        if (dir == "left"){
                this.velx = -5
        }
        else if(dir == "right"){
            this.velx =5
        }
    },
    stop: function(){
        if(this.px+this.r >=gamewidth){
            this.velx = 0
        }
        else if (this.px <=0){
            this.velx = 0
        }
    }
    
}
function loop(){
    requestAnimationFrame(loop)
    c.clearRect(0,0,gamewidth,gameheight)
    level()
    player.show()
    player.checkall()
    player.move()
    player.gravity()
    player.godown()
    player.stop()

}
loop()

document.addEventListener("keydown", function(key){
   // for(var i = 0;i<objects.length;i++){
if (key.keyCode == "32"&&player.cond == true){
player.jump()
}
else if (key.keyCode == "32"&&player.py+player.r < ground.py&& player.px + player.r >=gamewidth){
    player.jump()
player.direction("left")
}
else if (key.keyCode == "32"&&player.py+player.r < ground.py&& player.px <=0){
    player.jump()
player.direction("right")
}
}
//objects.length = objects.length
//}
,true)

//&& this.px+this.r <=gamewidth-5&& this.px >0
// player.py+player.r >= ground.py
// player.py+player.r < ground.py
