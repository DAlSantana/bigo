Além da **Big O Notation**, existem outros conceitos matemáticos usados para medir a eficiência de um algoritmo. Aqui estão os principais:  

---

### **1️⃣ Big O (O Notation) – Limite Superior (Pior Caso)**  
📌 Mede **o tempo máximo** que um algoritmo pode levar para executar.  
📌 Foca no **worst-case scenario** (pior caso).  

🔹 **Exemplo:**  
- Busca Linear → **O(n)**  
- Merge Sort → **O(n log n)**  
- Bubble Sort → **O(n²)**  

🔹 **Uso:**  
- Avaliar algoritmos pelo tempo máximo que podem demorar.  

---

### **2️⃣ Big Ω (Omega Notation) – Limite Inferior (Melhor Caso)**  
📌 Mede **o tempo mínimo** que um algoritmo pode levar para executar.  
📌 Foca no **best-case scenario** (melhor caso).  

🔹 **Exemplo:**  
- Busca Linear → **Ω(1)** (se o item estiver no primeiro índice)  
- Merge Sort → **Ω(n log n)**  
- Bubble Sort → **Ω(n)** (se o array já estiver ordenado)  

🔹 **Uso:**  
- Verificar **o quão eficiente** um algoritmo pode ser no melhor cenário.  

---

### **3️⃣ Big Θ (Theta Notation) – Limite Exato (Caso Médio)**  
📌 Mede **o comportamento médio** de um algoritmo.  
📌 Quando um algoritmo tem **o mesmo crescimento assintótico no melhor e pior caso**, usamos **Big Theta (Θ)**.  

🔹 **Exemplo:**  
- Merge Sort → **Θ(n log n)**  
- Busca Binária → **Θ(log n)**  
- Busca Linear → **Θ(n)**  

🔹 **Uso:**  
- Avaliar a eficiência real de um algoritmo **quando ele se comporta da mesma forma na maioria dos casos**.  

---

### **4️⃣ Pequeno O (Little O Notation) – Crescimento Estritamente Menor**  
📌 Diz que um algoritmo cresce **estritamente mais devagar** que outro.  
📌 Indica que um algoritmo é **melhor que O(f(n)), mas não igual**.  

🔹 **Exemplo:**  
- Se um algoritmo tem complexidade **o(n²)**, significa que **não** é **O(n²)**, mas **pode ser O(n log n) ou menor**.  

🔹 **Uso:**  
- Comparar algoritmos de forma mais precisa quando o crescimento é mais lento que um determinado limite.  

---

### **5️⃣ Pequeno Ω (Little Omega Notation) – Crescimento Estritamente Maior**  
📌 Diz que um algoritmo cresce **estritamente mais rápido** que outro.  
📌 Indica que um algoritmo é **pior que Ω(f(n)), mas não igual**.  

🔹 **Exemplo:**  
- Se um algoritmo tem complexidade **ω(n log n)**, significa que **não** é **Ω(n log n)**, mas **pode ser Ω(n²) ou maior**.  

🔹 **Uso:**  
- Comparar algoritmos que crescem mais rápido que um determinado limite.  

---

### **🔥 Resumo Simples para Entender Melhor**
| Notação  | Explicação |
|----------|-------------|
| **O(f(n))**   | **Pior caso** (tempo máximo que pode levar) |
| **Ω(f(n))**   | **Melhor caso** (tempo mínimo possível) |
| **Θ(f(n))**   | **Caso médio** (quando O e Ω são iguais) |
| **o(f(n))**   | Estritamente menor que O(f(n)) |
| **ω(f(n))**   | Estritamente maior que Ω(f(n)) |

---

## **💡 Exemplo Prático com Busca Linear**
Imagine que temos um array de **n** elementos e queremos buscar um número específico.

```javascript
function buscaLinear(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Encontrado
        }
    }
    return -1; // Não encontrado
}
```
🔹 **Big O (Pior Caso)** → **O(n)** (se o número estiver no final ou não existir)  
🔹 **Big Ω (Melhor Caso)** → **Ω(1)** (se o número estiver na primeira posição)  
🔹 **Big Θ (Caso Médio)** → **Θ(n)** (se o número estiver em uma posição aleatória)  

---

## **📌 Conclusão**
- **Big O** é a mais usada porque sempre focamos no pior caso.  
- **Big Ω e Big Θ** são úteis para entender o comportamento real do algoritmo.  
- **Little o e Little ω** são menos comuns, mas usados para comparações precisas.  




Sempre vamos ter relações entre quantidade de elementos de entrada com a quantidade de iterações, sempre será algo decisivo.
Um bom código é separado em dois prinpcipios
    1 - Leitura do código
    2 - Escalabilidade
        2.1 - Velocidade
        2.2 - Memória gasta


Estutura de dados & algortimos 

https://www.quora.com/What-is-the-difference-between-big-oh-big-omega-and-big-theta-notations
https://cooervo.github.io/Algorithms-DataStructures-BigONotation/big-O-notation.html
https://www.bigocheatsheet.com/
Todas as estruturas de dados -> https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link/c25f98c73a03f5b1107cd0e2f4bce29c9d78e31655e55cb0b785d56f0036c9d1
Busca linear = https://medium.com/@hlfdev/dart-algoritmo-de-busca-bin%C3%A1ria-e-linear-19cb7df6a147
Busca binária = https://www.freecodecamp.org/portuguese/news/algoritmos-de-ordenacao-explicados-com-exemplos-em-python-java-e-c/
Algortimos
Sorting
Dynamic Programing
BFS & DFS
Recursion


Dúvidas


Como transformar um Big O(n^2) em um big O mais eficiente ?