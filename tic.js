let canvas = document.getElementById("canvas")
let c = canvas.getContext("2d")
//let x = document.getElementById()
//let y = document.getElementById()
let posx = [100,300,500]
let posy = [100,300,500]
class Line{
    constructor(x,y,x2,y2){
        this.x = x 
        this.y = y
        this.x2 = x2 
        this.y2 = y2  
    }
    make(){
        c.beginPath()
        c.moveTo(this.x,this.y)
        c.lineTo(this.x2,this.y2)
        c.stroke()
        c.closePath()
    }
}

class Sign{
    constructor(pos){
        this.pos = pos
    }
    make(){
        c.beginPath()
        c.fillStyle = "black"
        c.fillRect(posx[this.pos-1])
        c.stroke()
        c.closePath()
    }

}






let lines = [new Line(200,0,200,600),new Line(400,0,400,600),new Line(0,200,600,200),new Line(0,400,600,400)]

function loop(){
requestAnimationFrame(loop)
c.clearRect(0,0,600,600)
for(let i = 0; i<lines.length;i++){
    lines[i].make()
}
}
loop()