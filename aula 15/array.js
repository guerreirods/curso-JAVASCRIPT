let num = [5, 3, 8, 9]

console.log(`array incial: ${num}`)

num[2] = 1

console.log(`mudei o indice 2 para 1 e ficou: ${num}`)

num.push(7)

console.log(`adcionei um 7 para o final e ficou: ${num}`)
console.log(`essa array tem ${num.length} elementos.`)
console.log(`ordenada ela fica assim: ${num.sort()}`)
console.log(`o primeiro valor é ${num[0]}`)

let val = 7
let pos = num.indexOf(val)

console.log(`o valor ${val} está na posição ${pos}`)