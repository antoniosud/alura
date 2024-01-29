//let titulo = document.querySelector('h1')
//titulo.innerHTML = 'Jogo do número secreto'

//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = 'Escolha um número entre 1 e 100'
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 100");
}
exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior");
    }
    tentativas++;
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

/*alert("Boas vindas ao game")
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
let numeroMaximo = 5000
console.log(numeroSecreto)
let chute 
let tentativas = 1

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`)
    //se chute for igual ao numero secreto
if(chute == numeroSecreto){
    break
}else{
    if(chute > numeroSecreto){
        alert(`O número secreto é menor que ${chute}`)
    }else{
        alert(`O número secreto é maior que ${chute}`)
    }
    //tentativas = tentativas + 1
    tentativas++
}

}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Parabéns, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`)



let porcentagemDesconto = 0;
let quantidadeMilhas = 36000

if(quantidadeMilhas >= 5000){
    porcentagemDesconto = porcentagemDesconto + 10;
    console.log(porcentagemDesconto)
}else{
    console.log(porcentagemDesconto)
}

if(quantidadeMilhas > 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
    console.log(porcentagemDesconto)
} else {
    porcentagemDesconto = 0;
    console.log(porcentagemDesconto)
}


var dia_da_semana = prompt("Digite o dia da semana")

if(dia_da_semana == "sabado" || dia_da_semana == "domingo"){
    alert("Bom final de semana")
}
else{
    alert("Boa semana")

}

alert("Bem vindo ao teste de negativo ou positivo")
var num = parseInt(prompt("Digite um número"))

if(num > 0){
alert("Positivo")
}else if(num  < 0){
    alert("neutro")
}else{
    alert("negativo")
}


var num = 1

while(num < 11){
    console.log(num)
    num--
    
}
*/
