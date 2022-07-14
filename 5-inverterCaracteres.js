let frase = "Olá a quem corrige meu código!"; // <- INSIRA A FRASE DE SUA PREFERÊNCIA //
let inversao = [];
let fraseInvertida;

for (var i = 0; i < frase.length; i++){
    inversao.unshift(frase[i]);
}

fraseInvertida = inversao.join("");

console.log(fraseInvertida);