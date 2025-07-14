// 📌 Exemplo Prático com One Piece 🏴‍☠️
// Imagine que Luffy está procurando carne em um navio cheio de comida!
// Ele pode encontrar a carne rapidamente ou ter que procurar até o fim.


function procurarCarne(comidas) {
  for (let i = 0; i < comidas.length; i++) {
    if (comidas[i] === "carne") {
      return `Luffy encontrou a carne no índice ${i}!`;
    }
  }
  return "Luffy não encontrou carne! 😢";
}


// 📊 Analisando os casos:
// ✅ Best Case (Melhor Caso) – O(1)
// ➡ Luffy encontra a carne na primeira posição.

// ✅ Average Case (Caso Médio) – O(n/2) ≈ O(n)
// ➡ Luffy encontra a carne no meio da lista.

// ❌ Worst Case (Pior Caso) – O(n)
// ➡ A carne está no final da lista ou nem existe!

// Pior caso significa que Luffy precisa checar TODAS as comidas antes de desistir. 😨