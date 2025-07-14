function contarVitorias(inimigos) {
    let memoriaAntes = process.memoryUsage().heapUsed; // 📏 Medindo antes
    let contador = 0; // Apenas 1 espaço de memória usado
  
    for (let i = 0; i < inimigos.length; i++) {
      contador++; // Apenas atualiza a variável
    }
  
    let memoriaDepois = process.memoryUsage().heapUsed; // 📏 Medindo depois
    console.log(`Memória usada: ${(memoriaDepois - memoriaAntes) / 1024} KB`);
    
    return contador;
  }
  
  console.log(contarVitorias(["Kaido", "King", "Queen"])); // 3

  function listarVitorias(inimigos) { // O (N)
    let memoriaAntes = process.memoryUsage().heapUsed; // 📏 Medindo antes
    let vitorias = []; // Cria um array que cresce com a entrada
  
    for (let i = 0; i < inimigos.length; i++) {
      vitorias.push(inimigos[i]); // Armazena cada inimigo
    }
  
    let memoriaDepois = process.memoryUsage().heapUsed; // 📏 Medindo depois
    console.log(`Memória usada: ${(memoriaDepois - memoriaAntes) / 1024} KB`);
    
    return vitorias;
  }
  
  console.log(listarVitorias(["Kaido", "King", "Queen"]));
  