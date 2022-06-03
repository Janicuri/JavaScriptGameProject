let canvas = document.getElementById("canvas")
let c = canvas.getContext("2d")
let width = 800;
let groundlevel = 450;
let cactus = []
let length = cactus.length 
let height = 500
let image = document.getElementById("dino")
let image2 = document.getElementById("dino2")
let images = [image, image2]
////Initialysing game 

class Object {
    constructor(){
        this.px = 700
        this.py = 410
        this.width = 30
        this.height = 40
        this.vel = 5
        this.cond = true
    }
    load(){
        c.beginPath()
        c.fillStyle = "blue"
        c.fillRect(this.px,this.py,this.width,this.height)
        c.stroke()
        c.closePath()

    }
    move(){
        this.px -= this.vel
    }
    die(){
        if (this.px <=-50){
            
        }
    }
    
}
cactus.push(new Object())
length = cactus.length
///making cactus
function display_all(){
    for(let i = 0; i<=length-1;i++){
        if (cactus[i]!= ""){
            cactus[i].load()
            cactus[i].move()
        }
    }
}
function create_new (){
    if (dino.x + 50 >=cactus[length-1].px && cactus[length-1].cond == true){
        cactus[length-1].cond = false
        cactus.push(new Object())
        length = cactus.length
    }
}


////MAKING DINO
let dino = {
    x:100,
    y:300,
    w:30,
    h:40,
    upper:this.y-100,
    cond : false,
    vel:4,
    cond2:true,
    jump:function(){
        if (this.y<=this.upper && this.cond == true){
            this.vel = 4

        }
    },
    gravity:function(){
        if(this.y+this.h <= groundlevel){
        this.y+=this.vel
    }
    
},
make : function(){
    if(this.cond2 == true){
    c.beginPath()
        c.fillStyle = "red"
        c.drawImage(image,this.x,this.y,this.w,this.h)
        c.stroke()
        c.closePath()
        
    }
    else if (this.cond2 == false){
        c.beginPath()
        c.fillStyle = "red"
        c.drawImage(image2,this.x,this.y,this.w,this.h)
        c.stroke()
        c.closePath()
        
    }
},
check : function(){
    if(this.y +this.h>= groundlevel){
this.cond = true
dino.upper = dino.y - 100
dino.y -=10
dino.vel = -4

    }
}
}
///////////////making gameloop



function loop(){
requestAnimationFrame(loop)
c.clearRect(0,0,width,height)
dino.make()
dino.gravity()
dino.jump()
display_all()
create_new()
c.fillStyle = "grey"
c.fillRect(0,450,width,50)

}
/////////////adding input
setInterval(function(){
    if(dino.cond2 == true){
dino.cond2 = false
    }
    else if (dino.cond2 == false){
        dino.cond2 = true
    }
},2000)


document.addEventListener("keydown",function(key){
if(key.keyCode == "32"){
    dino.check()
    console.log("bruh")
    
}
},true)
loop()
