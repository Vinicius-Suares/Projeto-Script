var txtano = document.getElementById('txtano')
var res = document.getElementById('res')
var dia = new Date()
var ano = dia.getFullYear()

function verificar() {
    if (txtano.value.length == 0 || txtano.value > ano || txtano.value < 1900) {
    window.alert('[ERRO] Verifique os dados novamente')
} else {
    var img = document.createElement('img')
    img.setAttribute('id', 'img')
    var idade = ano - txtano.value
    var genero = ' '
    var opt = document.getElementsByName('sexo')
    if (opt[0].checked) {
        var genero = 'homem'
       
        if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'bebe-h.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', 'jovem-h.jpg')
        } else if ( idade < 50) {
            img.setAttribute('src', 'adulto-h.jpg')
        } else {
            img.setAttribute('src', 'idoso-h.jpg')
        }
    } else {
        var genero = 'mulher'

        if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'bebe-m.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', 'jovem-m.jpg')
        } else if ( idade < 50) {
            img.setAttribute('src', 'adulto-m.jpg')
        } else {
            img.setAttribute('src', 'idoso-m.jpg')
        }
    }
     res.style.textAlign = 'center'
     res.innerHTML = `<p>Você é um ${genero} de ${idade} anos</p>`
     res.appendChild(img)
     img.setAttribute('width', '300px')
}

}