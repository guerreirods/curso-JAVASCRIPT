function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] ano inválido. Verifique os dados e tente novamento.')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var sexo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            sexo = 'Homem'
            if (idade >=0 && idade <4){
                img.setAttribute('src', 'bebe m.jpg')
                //bebe
            }else if (idade <12){
                img.setAttribute('src', 'criança m.jpg')
                //criança
            }else if (idade <19){
                img.setAttribute('src', 'adolescente m.jpg')
                //adolescente
            }else if (idade <50){
                img.setAttribute('src', 'adulto m.jpg')
                //adulto
            }else{
                img.setAttribute('src', 'idoso m.jpg')
                //idoso
            }
        }else if (fsex[1].checked){
            sexo = 'Mulher'
            if (idade >=0 && idade <4){
                img.setAttribute('src', 'bebe f.jpg')
                //bebe
            }else if (idade <12){
                img.setAttribute('src', 'criança f.jpg')
                //criança
            }else if (idade <19){
                img.setAttribute('src', 'adolescente f.jpg')
                //adolescente
            }else if (idade <50){
                img.setAttribute('src', 'adulto f.jpg')
                //adulto
            }else{
                img.setAttribute('src', 'idoso f.jpg')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexo} de ${idade} ano(s).`
        res.appendChild(img)
    }
}