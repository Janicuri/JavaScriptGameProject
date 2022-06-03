var cavnas = document.getElementById('canvas')
var c = canvas.getContext("2d")
var gamewidth = 600
var gameheight = 600

document.body.style.textAlign = "center"
class Table{
    constructor(){
        this.width = 600
        this.height = 600
        
    }
    make(){
        c.beginPath()
        c.moveTo(this.width/3,0)
        c.lineTo(this.width/3,this.height)
        c.stroke()
        c.closePath()
        c.beginPath()
        c.moveTo(this.width*4/6,0)
        c.lineTo(this.width*4/6,this.height)
        c.stroke()
        c.closePath()
        c.beginPath()
        c.moveTo(0,this.height/3)
        c.lineTo(this.width,this.height/3)
        c.stroke()
        c.closePath()
        c.beginPath()
        c.moveTo(0,this.height*4/6)
        c.lineTo(this.width,this.height*4/6)
        c.stroke()
        c.closePath()
        
    }
}
class Player {
    
}




var table = new Table()




function loop(){
    requestAnimationFrame(loop)
    c.clearRect(0,0,gamewidth,gameheight)
    table.make()
}
loop()