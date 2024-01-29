alert("Seja bem vindo ao nosso site")

let nome = prompt("Digite seu nome")
let idade = parseInt(prompt("Digite sua idade"))
let numeroDeVendas = parseFloat(prompt("Digite o número de vendas"))
let saldoDisponivel = parseFloat(prompt("Digite seu saldo"))

alert(`Olá ${nome}, sua idade é ${idade}, seu número de vendas é ${numeroDeVendas} e seu saldo é ${saldoDisponivel}`)

if(idade >= 18){
    alert("Você pode tirar sua habilitação")
}


alert("Erro! Preencha todos os campos")
let mensagemDeErro = "Erro"
alert(mensagemDeErro )