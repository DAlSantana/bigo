// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; //0(1)
    a = 50 + 3; //0(1)
  
    for (let i = 0; i < input.length; i++) { //0(n)
      anotherFunction(); //0(n)
      let stranger = true; //0(n)
      a++; //0(n)
    }

    return a; //0(1)

}
// Resultado = 0(3 + 4n) or 0(n)

funChallenge(new Array(10).fill(1))