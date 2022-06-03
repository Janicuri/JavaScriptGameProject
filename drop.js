let canvas = document.getElementById("canvas")
canvas.width = 600
canvas.height = 600
let c = canvas.getContext("2d")
const gameWidth = 600
const gameHeight = 600


class Player{
    constructor(){
        this.px = 30
        this.py = 30
        this.r = 10
        this.velx = 6
        this.vely = 6
        this.dir = ""

    }
    make(){
        c.beginPath()
        c.fillStyle = "red"
        c.strokeStyle = "black"
        c.fillRect(this.px,this.py,this.r,this.r)
        c.stroke()
        c.closePath()
    }
} 


let me = new Player()

class Platform {
    constructor(){
        this.px = 30
        this.py = 30
        this.r = 10
        this.velx = 6
        this.vely = 6
        this.dir = ""

    }
    make(){
        c.beginPath()
        c.fillStyle = "red"
        c.strokeStyle = "black"
        c.fillRect(this.px,this.py,this.r,this.r)
        c.stroke()
        c.closePath()
    }
    move(){
        
    }
}




function loop(){
    requestAnimationFrame(loop)
    c.clearRect(0,0,gameWidth,gameHeight)
    me.make()

}
document.addEventListener("mousemove",function(e){
me.px = e.clientX - gameWidth/2
me.py = e.clientY
},true)
loop()