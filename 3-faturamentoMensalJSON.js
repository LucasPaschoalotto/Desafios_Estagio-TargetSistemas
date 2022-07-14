const lista = require("./list/dados.json");
let media;
let menorValor = 99999999;
let maiorValor = 0;
let diasFaturamentoSuperior = 0;

const filtroZero = lista.filter(function (number) {
    return number.valor != 0;
});

const somaFaturamento = filtroZero.reduce(function (valorPrevio, valorAtual) {
    return valorPrevio + valorAtual.valor;
}, 0)

media = somaFaturamento / filtroZero.length;

for (var i = 0; i < filtroZero.length; i++){
    if(filtroZero[i].valor < menorValor){
        menorValor = filtroZero[i].valor;
    } else if(filtroZero[i].valor > maiorValor){
        maiorValor = filtroZero[i].valor;
    }
    if(filtroZero[i].valor > media){
        diasFaturamentoSuperior++;
    }
}

//console.log(filtroZero);
//console.log("Média de faturamento: " + somaFaturamento);
//console.log("Quantidade de dias: " + filtroZero.length);
//console.log("Media mensal: " + media);
console.log("Menor valor de faturamento ocorrido em um dia do mês: " + menorValor);
console.log("Maior valor de faturamento ocorrido em um dia do mês: " + maiorValor);
console.log("Número de dias no mês em que o valor do faturamento diário foi superior à media mensal: " + diasFaturamentoSuperior);