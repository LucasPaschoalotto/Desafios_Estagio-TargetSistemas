let sequenciaFibonacci = [0, 1];
let proxNumero;
let numeroEscolhido = 233; // <- INSIRA O VALOR DESEJADO !!! //

for (var i = 2; i < 99999; i++){
    proxNumero = sequenciaFibonacci[i-2] + sequenciaFibonacci[i-1];
    sequenciaFibonacci.push(proxNumero);

    if(proxNumero == numeroEscolhido){
        console.log(`O número ${numeroEscolhido} faz parte da sequência de Fibonacci`);
        break;
    } else if(proxNumero > numeroEscolhido){
        console.log(`O número ${numeroEscolhido} não faz parte da sequência de Fibonacci`);
        break;
    }
}