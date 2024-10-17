function fatorial (x){
    let fat = 1
    for (let contador = x; contador > 1; contador--)
        fat*=contador
    return fat
}

console.log(fatorial(4))