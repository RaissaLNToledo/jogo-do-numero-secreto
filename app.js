let numInicial = 1;
let numFinal = 10;

let numeroSecreto = gerarNumeroAleatorio(numInicial, numFinal);
let tentativas = 1;
exibirMensagemInicial();

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Numero Secreto';
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = `Escolha um numero entre ${numInicial} e ${numFinal}`

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //reponsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do Numero Secreto');
    exibirTextoNaTela('p', `Escolha um numero entre ${numInicial} e ${numFinal}`);    
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Número secreto é menor!');
            exibirTextoNaTela('p', `Digite um novo numero menor que ${chute}.`);
        }
        else {
            exibirTextoNaTela('h1', 'Número secreto é maior!');
            exibirTextoNaTela('p', `Digite um novo número maior que ${chute}.`);
        }
        tentativas++;
        limparCampo('input');
    }
}

function gerarNumeroAleatorio(numeroInicial, numeroFinal) {
    return parseInt((Math.random()*numeroFinal) + numeroInicial);   
}

function limparCampo(campo) {
        chute = document.querySelector(campo);
        chute.value = '';
}

function reiniciarJogo() {
    limparCampo('input');
    numeroSecreto = gerarNumeroAleatorio(numInicial, numFinal);
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);    
}