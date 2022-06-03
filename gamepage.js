let colors = ["blue","aqua","black","green","cornflowerblue"] 
let name 
let sname

function change1(){
    document.body.style.backgroundColor = colors[0]
    document.getElementById("Home").style.backgroundColor = colors[0]
}
function change2(){
    document.body.style.backgroundColor = colors[1]
    document.getElementById("Home").style.backgroundColor = colors[1]
}
function change3(){
    document.body.style.backgroundColor = colors[2]
    document.getElementById("Home").style.backgroundColor = colors[2]
}
function change4(){
    document.body.style.backgroundColor = colors[3]
    document.getElementById("Home").style.backgroundColor = colors[3]
}
function change5(){
    document.body.style.backgroundColor = colors[4]
    document.getElementById("Home").style.backgroundColor = colors[4]
}
function addCookie(username,surname){
    document.cookie = username + " " + surname + ";"
}
function cookie_maker(){
    name = document.getElementById("place").value
    sname = document.getElementById("places").value
    addCookie(name,sname)
}
