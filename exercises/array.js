
const array1  = ['a','b','c', 'x']
const array2 = ['z', 'y', 'i']
// should return false

const array3  = ['a','b','c', 'x']
const array4 = ['z', 'y', 'x']
// should return true


// two inputs O(N) + O(N)
// one return


function shouldReturn(arrayOne, arrayTwo){
    const novoArray = [...arrayOne, ...arrayTwo].sort(); //domina porque precisa processar todos os elementos várias vezes.  O(n log n), 
    let result = false;
    console.log(novoArray)

    novoArray.forEach((element, index)=> {
        if(element === novoArray[index +1] || element === novoArray[index -1]){
            result = true;
            return;
        }
    });

  return result
}

//Worst Case BIG O(N)
console.log("result",shouldReturn(array1, array2));
console.log("result",shouldReturn(array3, array4));