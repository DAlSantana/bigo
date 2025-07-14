function gerarFilas(tripulacao, filaAtual = []) {
    if (tripulacao.length === 0) {
      console.log(`Fila: ${filaAtual.join(" -> ")}`);
      return;
    }
  
    for (let i = 0; i < tripulacao.length; i++) {
      let resto = tripulacao.slice(); // Copia a tripulação
      let escolhido = resto.splice(i, 1); // Remove um personagem
  
      gerarFilas(resto, filaAtual.concat(escolhido)); // Chama a função recursivamente
    }
  }
  
  // Testando com 3 personagens
  gerarFilas(["Luffy", "Zoro", "Sanji"]);
  

//   O(n!) acontece quando precisamos testar todas as sequências possíveis de algo.

// 💡 Exemplo simples: O Chopper quer testar todas as ordens possíveis para colocar os Chapéus de Palha em fila para uma foto.

// Se tivermos apenas 3 tripulantes (Luffy, Zoro e Sanji), podemos organizá-los de 6 maneiras diferentes:

// Luffy, Zoro, Sanji

// Luffy, Sanji, Zoro

// Zoro, Luffy, Sanji

// Zoro, Sanji, Luffy

// Sanji, Luffy, Zoro

// Sanji, Zoro, Luffy