function calcular (){
    var numero = document.getElementById('n')
    var resultado = document.getElementById('resultado')
    

    if (numero.value.length == 0){
        alert('Por favor, informe um número primeiro.')
    }else{
        resultado.innerText = ``

        var n = Number(numero.value)

        for(var i=1;i<=10;i++){
            var option = document.createElement('option')
            option.value = i
            option.text = `${n} * ${i} = ${n*i}`
            resultado.appendChild(option)
        }
    }    
}