// Uma função com mensagem ola
function ola(){
    alert("Olá Mundo!");
}

// Chamando a função ao clicar em um botão html
// document.getElementById("btnClick").onclick = ola;

// Declaração de variáveis
var nome;
var numero1, numero2;
var resultado;

nome = "";
numero1 = 0;
numero2 = 0;
resultado = 0;

numero1 = prompt("Digite um valor: ");
numero2 = prompt("Digite outro valor: ");
resultado = numero1 * numero2;

console.log("A multiplicação entre o valor %d e %d é %d",numero1,numero2,resultado);