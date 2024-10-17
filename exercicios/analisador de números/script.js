let valores = []

function adc() {
    let valordigitado = document.getElementById('adcn')

    if(valordigitado.value.length == 0 || Number(valordigitado.value) <1 || 
    Number(valordigitado.value) > 100 || valores.indexOf(Number(valordigitado.value)) != -1){

        alert('Valor é inválido, ou já foi informado.')

    }else{

        valordigitado = Number(valordigitado.value)  
        valores.push(valordigitado)
        let select = document.getElementById('selectval')
        let option = document.createElement('option')
        option.value = valordigitado
        option.text = `Você adcionou o valor "${valordigitado}".`
        select.appendChild(option)
        document.getElementById('adcn').value=''
        document.getElementById('res').innerHTML=''

    }


}

function analisar(){

    if(valores==''){
        alert('Adcione valores para serem analisados.')
    }else{
        let res = document.getElementById('res')
        let last = 0
        let soma = 0
        let media = 0
        valores.sort()
        for(let pos = 0; pos < valores.length; pos++){
            last = valores[pos]
            soma += valores[pos]
            media = soma/valores.length
        }
        valores.sort()
        res.innerHTML = 
        `Ao todo, temos ${valores.length} números cadastrados.<br>
        O maior valor informado foi ${last}.<br>
        O menor valor informado foi ${valores[0]}.<br>
        Somando todos os valores, temos ${soma}.<br>
        A média dos valores digitados é ${media}.`
    }
}