function organizarTreino(tripulacao, frota) {
    // Contando tripulantes (O(n))
    for (let i = 0; i < tripulacao.length; i++) {
      console.log(`Tripulante: ${tripulacao[i]}`);
    }
  
    // Contando navios da frota (O(m))
    for (let j = 0; j < frota.length; j++) {
      console.log(`Navio: ${frota[j]}`);
    }
  
    // Criando duplas para treino (O(n²))
    for (let i = 0; i < tripulacao.length; i++) {
      for (let j = 0; j < tripulacao.length; j++) {
        console.log(`${tripulacao[i]} treina com ${tripulacao[j]}`);
      }
    }
  }

  
//   Imagine que Luffy quer contar:

// Todos os tripulantes do Bando do Chapéu de Palha (O(n)).

// Todos os navios da frota do Chapéu de Palha (O(m)).

// Depois, comparar cada tripulante com todos os outros para decidir duplas de treino (O(n²)).

// 🎯 Resumo Final
// Código	Complexidade antes	Complexidade depois
// O(n + n²)	O(n²)	O(n²)
// O(n + m + n²)	O(n²)	O(n²)
// O(n³ + n² + n)	O(n³)	O(n³)
// ✅ Sempre mantemos apenas o termo dominante (o que cresce mais rápido).
// ✅ Ignoramos os outros porque eles têm impacto insignificante para n grande.