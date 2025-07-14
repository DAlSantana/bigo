// 0(n)

const exercicios = new Array(10000).fill("Supino");

const t1 = performance.now();
for (let i=0; i < exercicios.length; i++){
    console.log(i);
}

const t2 = performance.now();

console.log("O tempo de processamento foi", t2 - t1, "milisegundos");


// Quanto menor o numero de elementos mais rapido será.
// O número de operações vai de acordo com  a quantidade de entrada