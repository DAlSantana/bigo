

// let frase = "Olá, meu nome é diego";
// let fraseAoContrario = "";

// for (let i = 1; i < frase.length + 1; i++){
//     let letra =  frase[frase.length - i] 
//     fraseAoContrario = fraseAoContrario + letra;
// }

// console.log(fraseAoContrario)


let frase = "Olá, meu nome é Diego";
let fraseAoContrario = [];

for (let i = 1; i < frase.length + 1; i++) {
    fraseAoContrario.push(frase[frase.length - i]); // Adiciona ao array
}

console.log(fraseAoContrario.join("")); // Junta os caracteres em uma única operação
