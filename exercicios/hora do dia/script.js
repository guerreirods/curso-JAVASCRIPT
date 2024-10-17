function carregar (){

var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${min}h.`
if (hora >= 6 && hora <12){
    document.body.style.background = 'lightblue'
    img.src = 'img/1.png'
}else if (hora >= 12 && hora <=18){
    document.body.style.background = 'orange'
    img.src = 'img/3.png'
}else{
    img.src = 'img/2.png'
    document.body.style.background = 'black'
}
}