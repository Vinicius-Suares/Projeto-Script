function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
//var hora = 10

msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
    //cedo
    img.src = 'cedo.png'
    document.body.style.background = 'orange'
} else if (hora >= 12 && hora < 18) {
    //tarde
    img.src = 'tarde.png'
    document.body.style.background = 'lightgray'
} else {
    //noite
    img.src = 'noite.png'
    document.body.style.background = 'lightblue'
}
}