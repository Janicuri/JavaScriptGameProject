let canvas = document.getElementById("canvas")
let c = canvas.getContext("2d")
let width = 500
let height = 600
let all = []

class Block {
    constructor(px,py,a,b){
        this.px = px 
        this.py = py
        this.a = a
        this.b = b
        this.fall = true
        this.speed = 10
    }
    make(){
        c.beginPath
        c.fillStyle = "red"
        c.fillRect(this.px,this.py,this.a,this.b)
        c.stroke()
        c.closePath()
    }
    selfCond(){
        for (let i = 0; i < all.length;i++){
        if (this.py + this.b < height || this.py + this.b == all[i].py && ){
            this.py += this.speed
        }
        else{
            this.fall = false
            this.speed = 0
        }
        }
    }
}
all.push(new Block(240,0,20,20))
function add(){
    all.push(new Block(240,0,20,20))
}


function loop(){
    c.clearRect(0,0,width,height)
    for (let i = 0; i < all.length;i++){
    all[i].make()
    all[i].selfCond()
}
    if (all[all.length-1].fall == false){
    add()
    }

}
setInterval(loop,1000/10)