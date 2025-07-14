function contarTripulantesENavios(tripulacao, frota) {
    // Contando tripulantes (tamanho = n)
    for (let i = 0; i < tripulacao.length; i++) {
      console.log(`Tripulante ${i + 1}: ${tripulacao[i]}`);
    }
  
    // Contando navios (tamanho = m)
    for (let j = 0; j < frota.length; j++) {
      console.log(`Navio ${j + 1}: ${frota[j]}`);
    }
  }
  

//   ➡ Big O antes da simplificação:
// 🔹 O(n) + O(m)

// 🔹 Não multiplicamos porque n e m são entradas independentes.


function testarCombinacoes(pratos, bebidas) {
    for (let i = 0; i < pratos.length; i++) {
      for (let j = 0; j < bebidas.length; j++) {
        console.log(`Sanji testou: ${pratos[i]} com ${bebidas[j]}`);
      }
    }
  }

  
//   ➡ Big O antes da simplificação:
// 🔹 Como um loop está dentro do outro, a complexidade se multiplica:
// 🔹 O(n * m) (porque para cada prato, testamos todas as bebidas).

