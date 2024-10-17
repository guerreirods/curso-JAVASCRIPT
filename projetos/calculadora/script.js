var visor = document.getElementById('screen')
let sinal = ''

function clicarn(n){
    var valor = Number(n)
    visor.innerHTML += valor
}

function clicars(s){
    sinal = s
    visor.innerHTML += s
}

function calcular(){
    if(sinal == '+'){
        alert('+')
    }else if (sinal == '-'){
        alert('-')
    }else if (sinal == '/'){
        alert('/')
    }else if (sinal == '*'){
        alert('*')
    }
}