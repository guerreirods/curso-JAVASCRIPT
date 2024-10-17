const inicio = new Date('2023-11-29T00:00:00Z');

function CalcularTempoCorrido(inicio) {
    const agora = new Date();
    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();
    let horas = agora.getHours() - inicio.getHours();
    let minutos = agora.getMinutes() - inicio.getMinutes();
    let segundos = agora.getSeconds() - inicio.getSeconds();

    // Ajustar dias e meses
    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }
    if (horas < 0) {
        horas += 24;
        dias--;
    }
    if (dias < 0) {
        meses--;
        // Calcular o número de dias do mês anterior
        const mesAnterior = (agora.getMonth() - 1 + 12) % 12;
        const diasNoMesAnterior = new Date(agora.getFullYear(), mesAnterior + 1, 0).getDate();
        dias += diasNoMesAnterior;
    }
    if (meses < 0) {
        meses += 12;
        anos--;
    }

    return { anos, meses, dias, horas, minutos, segundos };
}

function AtualizarContador() {
    const passou = CalcularTempoCorrido(inicio);
    const contadormsg = document.getElementById('msg');
    contadormsg.textContent = `Estamos juntos há exatos ${passou.meses} meses, ${passou.dias} dias, ${passou.horas} horas, ${passou.minutos} minutos e ${passou.segundos} segundos! 💖`;
}

setInterval(AtualizarContador, 1000);

AtualizarContador();