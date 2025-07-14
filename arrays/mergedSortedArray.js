function mergeSortedArrays(array1, array2){
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    

  
    while (array1Item || array2Item){
    console.log("ARRAY ITEM 1 =>", array1Item);
    console.log("ARRAY ITEM 2", array2Item);

     if(array1Item < array2Item){
       mergedArray.push(array1Item);
       array1Item = array1[i];
       i++;
     }   
     else {
       mergedArray.push(array2Item);
       array2Item = array2[j];
       j++;
     }
     console.log("MERGED ARRAY ==>", mergedArray)
    }
    return mergedArray;
  }
  
console.log(  mergeSortedArrays([0,3,4,31], [3,4,6,30]))