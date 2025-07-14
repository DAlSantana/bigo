function contarTripulantes(tripulacao) {
    // Zoro conta os tripulantes uma vez
    for (let i = 0; i < tripulacao.length; i++) {
      console.log(`Tripulante ${i + 1}: ${tripulacao[i]}`);
    }
    
    // Zoro conta os tripulantes de novo
    for (let i = 0; i < tripulacao.length; i++) {
      console.log(`(Confirmação) Tripulante ${i + 1}: ${tripulacao[i]}`);
    }
}

  
// O fato de Zoro contar os tripulantes duas vezes faz com que a complexidade pareça O(2n).

// Mas em notação Big O, constantes não importam porque estamos interessados apenas no crescimento da função quando n fica muito grande.

// Então, na prática:
// 🔹 O(2n) = O(n)
// 🔹 O(100n) = O(n)
// 🔹 O(1000n) = O(n)

// 📌 Por que remover o 2?
// Quando n cresce muito (ex: n = 1.000.000), a diferença entre n e 2n não muda significativamente a escala do problema.

// Por isso, no Big O, apenas focamos na ordem de crescimento e removemos constantes fixas como 2, 100, etc. 🚀