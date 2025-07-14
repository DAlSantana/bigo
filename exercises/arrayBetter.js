

const array1  = ['a','b','c', 'x']
const array2 = ['z', 'y', 'i']
// should return false

const array3  = ['a','b','c', 'x']
const array4 = ['z', 'y', 'x']
// should return true


function shouldReturn(arrayOne,arrayTwo){
    const novoArray = new Set(arrayOne);
    let result = false;

    for (const element of arrayTwo) {
        if (novoArray.has(element)) {
            result = true;
            break;
        }
    }
  return result;
}

console.log("result", shouldReturn(array1, array2));
console.log("result 2", shouldReturn(array3, array4));
