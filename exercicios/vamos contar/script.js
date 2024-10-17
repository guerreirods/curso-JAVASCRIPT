function contar(){
    var inicio = parseFloat(document.getElementById('inicio').value)
    var fim = parseFloat(document.getElementById('fim').value)
    var passo = (document.getElementById('passo').value)
    var res = document.getElementById('resultado')

    res.innerText = '' 
    // limpa os dados primeiro para executar depois

    if (passo === '' || passo <=0){
        alert('Passo inválido. Considerando passo 1...')
        passo = 1
    }else{
    passo = parseFloat(passo)
    }

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo)){
        res.innerText = 'Por favor, insira valores válidos.'
        //se estiver faltando algo, ele retorna a mensagem e termina.
        return
    }

    if(inicio>fim){

        for (var conta = inicio; conta>=fim; conta-=passo){
            //contagem regressiva
            res.innerText+= conta.toString().replace('.',',')
            if(conta-passo>=fim){
                res.innerText+=' 👉 '
            }else{
                res.innerText+=' 👉 🏁'
            }
        }

    }else{

    for (var conta = inicio; conta<=fim; conta+=passo){
        //contagem crescente
        //inicia um loop do 'inicio' pulando 'passo' até chegar em 'fim'.
        res.innerText+= conta.toString().replace('.',',')
        //escreve cada valor contado no paragrafo res
        //transforma o resultado em string e, troca o . por ,
        if(conta+passo<=fim){
            res.innerText+=' 👉 '
            //se ainda não tiver contado até o fim, coloca um emoji.
        }else{
            res.innerText+=' 👉 🏁'
            //se tiver chegado ao fim, indica o fim com uma bandeira.
        }
    }
}
}