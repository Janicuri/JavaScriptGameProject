
let canvas = document.getElementById("canvas")
const gamewidth = 1250
const gameheight = 600
canvas.style.backgroundColor = "grey"
canvas.width = gamewidth
canvas.height = gameheight
let c = canvas.getContext("2d")
let closeby = false
let closer = 200
txt = false
class Ball{
    constructor(px,py){
        this.px = px
        this.py = py 
        this.r = 15
        this.number = 0
        this.vel = [-40,40]
        this.color = "red"
    }
    make(){
        c.beginPath()
        c.fillStyle = this.color
        c.arc(this.px,this.py,this.r,0,360,false)
        if(txt){
            c.fillText("This is a note that will appear when you win the fucking game,:::: YOU SON OF A BITTCH IM IN",gamewidth/2,gameheight/2,400)

        }
        c.fill()
        c.stroke()
        c.closePath()
        

    }
    generator(){
        this.number = Math.random()*10
        if (this.number > 5){
            return true
        }
        else {
            return false
        }
    }
    move(){
        
        if(this.generator()){
            this.px+=this.vel[0]
        }
        else{
            this.px+=this.vel[1]
        }
        if(this.generator()){
            this.py+=this.vel[0]
        }
        else{
            this.py+=this.vel[1]
        }
    
    }
    on(){
        if (this.px + this.r >=gamewidth){
            this.px= Math.random()*gamewidth
        }
        else if(this.px -this.r<=0){
            this.px = Math.random()*gamewidth
        }
        else if(this.py -this.r<=0){
            this.py = Math.random()*gamewidth
        }
        else if(this.py +this.r>=gameheight){
            this.py = Math.random()*gamewidth
        }
        
    }
}

ball = new Ball(300,300)
function all()
{
    c.clearRect(0,0,gamewidth,gameheight)
    ball.make()
ball.move()
ball.on()
}
document.addEventListener("mousemove",function(e){
    if(e.clientX>=ball.px-ball.r && e.clientY >= ball.py-ball.r && e.clientX <= ball.px+ball.r &&e.clientY <= ball.py +ball.r){
ball.color = "black"
ball.vel[0] = 0
ball.vel[1] = 0
txt = true
}
},true)


setInterval(all,1000/10)


//    if(e.clientX >= ball.px - closer && e.clientY>=ball.py-closer && e.clientY <= ball.px + closer && e.clientY<=ball.py+closer){
//closeby = true
//}
//else if(e.clientX < ball.px - closer || e.clientY<ball.py-closer || e.clientY > ball.px + closer || e.clientY>ball.py+closer){
//    closeby = false
//}
//},true)