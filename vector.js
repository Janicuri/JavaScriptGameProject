let canvas = document.getElementById("canvas")
let c = canvas.getContext("2d")
const gamew = 700
const gameh = 600
let x = 0 
let y = 0
let x2 
let y2

function make_vector (){
    c.beginPath()
    c.moveTo(gamew/2,gameh/2)
    c.lineTo(x,y)
    c.stroke()
    c.closePath()
}
function ereaseVector(){
    
    c.beginPath()
    c.fillStyle = "grey"
    c.moveTo(gamew/2,gameh/2)
    c.lineTo(x,y)
    c.stroke()
    c.closePath()
}
function circle (){
    c.beginPath()
    c.fillStyle = "red"
    c.arc(350,300,5,0,360,false)
    c.fill()
    c.stroke()
    c.closePath()
}

function loop(){
    requestAnimationFrame(loop)
    //c.clearRect(0,0,gamew,gameh)
    //ereaseVector()
    circle()
    make_vector()
   
}
loop()
document.addEventListener("mousemove",function(e){
x = e.clientX - 160
y = e.clientY - 70
},true)

