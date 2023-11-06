'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let pivot= array[0]
    let subArrL=[];
    let subArrR=[];
    if(array.length>1){
      for (let i = 1; i < array.length; i++) {
        if(pivot>=array[i]){
          subArrL.push(array[i])
        }
        if(pivot<array[i]){
          subArrR.push(array[i])
        }
      }
      if(subArrL.length>1){
        subArrL = quickSort(subArrL)
      }
      if(subArrR.length>1){
        subArrR = quickSort(subArrR)
      }
    }
    let res= subArrL.concat(pivot,subArrR)
    return res
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length<=1) return array;
    let lineDiv = Math.floor(array.length/2)
    let leftArr= array.slice(0,lineDiv)
    let rightArr= array.slice(lineDiv)

    leftArr=mergeSort(leftArr)
    rightArr=mergeSort(rightArr)

    let arrayRes=[]
    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            arrayRes.push(leftArr.shift())
        }else{
            arrayRes.push(rightArr.shift()) 
        }
    }
    arrayRes = arrayRes.concat(leftArr,rightArr)

    return arrayRes;
  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
