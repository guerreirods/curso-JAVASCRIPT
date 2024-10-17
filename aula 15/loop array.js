let valores = [8,3,5,12,0,9,1]

/*
for(posicao=0; posicao<valores.length; posicao++){
    console.log(`a posição ${posicao} tem o valor ${valores[posicao]}`)
}
*/

for(pos in valores){
    console.log(`na posição ${pos} o valor é ${valores[pos]}`)
}