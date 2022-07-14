let faturamentoEstados = [
    {
        estado: "SP",
        faturamento: 67836.43
    },
    {
        estado: "RJ",
        faturamento: 36678.66
    },
    {
        estado: "MG",
        faturamento: 29229.88
    },
    {
        estado: "ES",
        faturamento: 27165.48
    },
    {
        estado: "Outros",
        faturamento: 19849.53
    }
]

const totalFaturamento = faturamentoEstados.reduce(function (valorPrevio, valorAtual) {
    return valorPrevio + valorAtual.faturamento;
}, 0)

for (var i = 0; i < faturamentoEstados.length; i++){
    var percentual = (faturamentoEstados[i].faturamento / totalFaturamento) * 100;
    console.log(`Percentual de representação do estado de ${faturamentoEstados[i].estado} no valor total mensal da distribuidora: ${percentual.toFixed(2)}%`);
}

//console.log("Total faturamento: " + totalFaturamento);