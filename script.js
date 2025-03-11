function exibirTabuada() {
    let vnumInicial = document.getElementById('vnumInicial').value;
    let vnumFinal = document.getElementById('vnumFinal').value;
    let vresult = document.getElementById('vresult');
    vresult.value = '';

    if (vnumInicial === '' || vnumFinal === '') {
        vresult.value = 'Insira números válidos para correta execução.';
        return;
    }

    vnumInicial = parseInt(vnumInicial);
    vnumFinal = parseInt(vnumFinal);

    if (isNaN(vnumInicial) || isNaN(vnumFinal)) {
        vresult.value = 'Insira números válidos para correta execução.';
        return;
    }

    if (vnumInicial > vnumFinal) {
        vresult.value = 'O primeiro número precisa ser menor ou igual ao número final para gerar a tabuada de forma crescente.';
        return;
    }

    for (let i = vnumInicial; i <= vnumFinal; i++) {
        vresult.value += `Tabuada do ${i}:\n`;
        for (let c = 1; c <= 10; c++) {
            vresult.value += `${i} x ${c} = ${i * c}\n`;
        }
        vresult.value += '\n';
    }
}

document.getElementById('BtnExibir').addEventListener('click', exibirTabuada);